import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .order("date", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const article = {
    id: String(Date.now()),
    title: body.title || "",
    category: body.category || "集团新闻",
    date: body.date || new Date().toISOString().slice(0, 10),
    summary: body.summary || "",
    content: body.content || "",
    cover: body.cover || "",
    published: body.published !== false,
  };

  const { data, error } = await supabaseAdmin
    .from("articles")
    .insert(article)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, article: data });
}
