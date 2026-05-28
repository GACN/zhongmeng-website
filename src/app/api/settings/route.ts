import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function readSettings(): any {
  const dataPath = path.join(process.cwd(), "src/data/settings.json");
  try {
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  } catch {
    return {};
  }
}

export async function GET() {
  try {
    const settings = readSettings();
    return NextResponse.json(settings);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const dataPath = path.join(process.cwd(), "src/data/settings.json");
    fs.writeFileSync(dataPath, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
