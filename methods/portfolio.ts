"use server";

import prisma from "@/lib/prisma";

export async function fetchPublicPortfolio() {
  return await prisma.portfolio.findMany({
    where: {
      show: true,
      private: false,
    },
    orderBy: {
      priority: "desc",
    },
    include: {
      portfolioItems: {
        where: {
          show: true,
          private: false,
        },
        orderBy: {
          priority: "desc",
        },
      },
    },
  });
}

export async function fetchPrivatePortfolio(title: string) {
  return await prisma.portfolio.findMany({
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
}
