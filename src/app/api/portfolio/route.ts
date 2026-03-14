import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.portfolio.findMany({
      where: { show: true, private: false },
      orderBy: { priority: "desc" },
      include: {
        portfolioItems: {
          where: { show: true, private: false },
          orderBy: { priority: "desc" },
        },
      },
    });
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 500 });
  }
}
