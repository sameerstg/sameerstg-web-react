import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, feedback } = await req.json();
    if (!email || !feedback) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await prisma.feedback.create({ data: { email, feedback } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
