/*
  Warnings:

  - Added the required column `content` to the `PortfolioItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Portfolio" ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PortfolioItem" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false;
