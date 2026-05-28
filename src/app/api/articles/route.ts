import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function readArticles(): any[] {
  const dataPath = path.join(process.cwd(), "src/data/articles.json");
  try {
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const articles = readArticles();
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
    const articles = readArticles();
    articles.unshift(article);
    const dataPath = path.join(process.cwd(), "src/data/articles.json");
    fs.writeFileSync(dataPath, JSON.stringify(articles, null, 2), "utf-8");
    return NextResponse.json({ ok: true, article });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
