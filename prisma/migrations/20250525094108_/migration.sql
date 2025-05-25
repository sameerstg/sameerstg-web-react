-- CreateTable
CREATE TABLE "Social" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Social_image_key" ON "Social"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Social_link_key" ON "Social"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_image_key" ON "Skill"("image");
