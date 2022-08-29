/*
  Warnings:

  - You are about to drop the column `cost` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Cocktail` table. All the data in the column will be lost.
  - Added the required column `icon` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Cocktail` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cocktail" (
    "cocktailId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "englishName" TEXT NOT NULL,
    "japaneseName" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "img" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_Cocktail" ("cocktailId", "englishName", "japaneseName") SELECT "cocktailId", "englishName", "japaneseName" FROM "Cocktail";
DROP TABLE "Cocktail";
ALTER TABLE "new_Cocktail" RENAME TO "Cocktail";
CREATE UNIQUE INDEX "Cocktail_englishName_key" ON "Cocktail"("englishName");
CREATE UNIQUE INDEX "Cocktail_japaneseName_key" ON "Cocktail"("japaneseName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
