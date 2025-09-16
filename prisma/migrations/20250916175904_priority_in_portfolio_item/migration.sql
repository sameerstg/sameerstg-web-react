-- AlterTable
CREATE SEQUENCE portfolioitem_priority_seq;
ALTER TABLE "PortfolioItem" ALTER COLUMN "priority" SET DEFAULT nextval('portfolioitem_priority_seq');
ALTER SEQUENCE portfolioitem_priority_seq OWNED BY "PortfolioItem"."priority";
