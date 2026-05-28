import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("settings")
    .select("*");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Convert key-value rows to a single object
  const settings: Record<string, any> = {};
  for (const row of data) {
    settings[row.key] = row.value;
  }
  return NextResponse.json(settings);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const entries = Object.entries(body).map(([key, value]) => ({
    key,
    value: typeof value === "object" ? value : { v: value },
  }));

  const { error } = await supabaseAdmin
    .from("settings")
    .upsert(entries, { onConflict: "key" });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
