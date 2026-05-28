import { NextRequest, NextResponse } from "next/server";

const AUTH_PASSWORD = process.env.ADMIN_PASSWORD || "zhongmeng2026";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password === AUTH_PASSWORD) {
    const token = Buffer.from(`admin:${Date.now()}`).toString("base64");
    return NextResponse.json({ ok: true, token });
  }
  return NextResponse.json({ ok: false, error: "密码错误" }, { status: 401 });
}
