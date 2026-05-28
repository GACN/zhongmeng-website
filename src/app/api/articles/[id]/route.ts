import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/articles.json");

function readArticles() {
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

function writeArticles(articles: any[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2), "utf-8");
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const articles = readArticles();
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
    const articles = readArticles();
    const idx = articles.findIndex((a: any) => a.id === id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    articles[idx] = { ...articles[idx], ...body };
    writeArticles(articles);
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
    let articles = readArticles();
    articles = articles.filter((a: any) => a.id !== id);
    writeArticles(articles);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
