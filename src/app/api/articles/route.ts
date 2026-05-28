import { NextRequest, NextResponse } from "next/server";
import { getArticles, setArticles } from "@/lib/kv-store";

export async function GET() {
  try {
    const articles = await getArticles();
    return NextResponse.json(articles);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
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
    const articles = await getArticles();
    articles.unshift(article);
    await setArticles(articles);
    return NextResponse.json({ ok: true, article });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
