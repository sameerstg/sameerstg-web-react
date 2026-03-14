import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json({ error: "Missing title" }, { status: 400 });
  }

  try {
    const data = await prisma.portfolio.findMany({
      where: {
        title: title,
        show: true,
        private: true,
      },
      include: {
        portfolioItems: {
          where: {
            show: true,
            private: true,
          },
          orderBy: {
            priority: "desc",
          },
        },
      },
    });
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 500 });
  }
}
