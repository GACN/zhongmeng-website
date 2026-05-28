import { kv } from "@vercel/kv";
import fs from "fs";
import path from "path";

// Seed KV from local JSON on first run
// Falls back to empty array if file is unavailable (e.g. Vercel read-only FS)
async function ensureSeeded() {
  const exists = await kv.exists("articles");
  if (!exists) {
    try {
      const dataPath = path.join(process.cwd(), "src/data/articles.json");
      const articles = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      await kv.set("articles", articles);
      console.log("[KV] Seeded articles from local JSON");
    } catch (e: any) {
      console.log("[KV] Seed failed (FS read-only?), starting empty:", e.message);
      await kv.set("articles", []);
    }
  }
}

export async function getArticles(): Promise<any[]> {
  await ensureSeeded();
  return (await kv.get<any[]>("articles")) || [];
}

export async function setArticles(articles: any[]) {
  await kv.set("articles", articles);
}
