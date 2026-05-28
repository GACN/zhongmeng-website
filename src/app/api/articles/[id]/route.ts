import { NextRequest, NextResponse } from "next/server";
import { getArticles, setArticles } from "@/lib/kv-store";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const articles = await getArticles();
    const article = articles.find((a: any) => a.id === id);
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const articles = await getArticles();
    const idx = articles.findIndex((a: any) => a.id === id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    articles[idx] = { ...articles[idx], ...body };
    await setArticles(articles);
    return NextResponse.json({ ok: true, article: articles[idx] });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const articles = await getArticles();
    const filtered = articles.filter((a: any) => a.id !== id);
    await setArticles(filtered);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
