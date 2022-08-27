/*
  Warnings:

  - A unique constraint covering the columns `[englishName]` on the table `Cocktail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[japaneseName]` on the table `Cocktail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `StaffMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cocktail_englishName_key" ON "Cocktail"("englishName");

-- CreateIndex
CREATE UNIQUE INDEX "Cocktail_japaneseName_key" ON "Cocktail"("japaneseName");

-- CreateIndex
CREATE UNIQUE INDEX "StaffMember_username_key" ON "StaffMember"("username");
