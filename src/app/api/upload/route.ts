import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const ext = file.name.split(".").pop() || "jpg";
  const filename = `upload_${Date.now()}.${ext}`;

  const { data, error } = await supabaseAdmin.storage
    .from("uploads")
    .upload(filename, bytes, {
      contentType: file.type,
      upsert: false,
    });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: publicUrl } = supabaseAdmin.storage
    .from("uploads")
    .getPublicUrl(filename);

  return NextResponse.json({ ok: true, url: publicUrl.publicUrl });
}
