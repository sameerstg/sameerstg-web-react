-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "portfolioId" INTEGER,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_title_key" ON "Portfolio"("title");

-- AddForeignKey
ALTER TABLE "PortfolioItem" ADD CONSTRAINT "PortfolioItem_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
