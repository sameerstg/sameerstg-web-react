'use server'
import prisma from "@/lib/prisma";

export async function createFeedback(email: string, feedback: string) {
  await prisma.feedback.create({
    data: {
      email: email,
      feedback: feedback,
    },
  });
}
