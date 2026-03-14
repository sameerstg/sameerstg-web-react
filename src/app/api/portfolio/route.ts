import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const revalidate = 86400; // Cache for 24 hours (ISR)

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
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=59',
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 500 });
  }
}
