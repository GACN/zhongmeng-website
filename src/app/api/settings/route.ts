import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

async function ensureSeeded() {
  const exists = await kv.exists("settings");
  if (!exists) {
    const dataPath = path.join(process.cwd(), "src/data/settings.json");
    const settings = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    await kv.set("settings", settings);
  }
}

export async function GET() {
  try {
    await ensureSeeded();
    const settings = await kv.get("settings");
    return NextResponse.json(settings || {});
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    await kv.set("settings", body);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
