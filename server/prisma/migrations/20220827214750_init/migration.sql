-- CreateTable
CREATE TABLE "Order" (
    "orderId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Cocktail" (
    "cocktailId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "englishName" TEXT NOT NULL,
    "japaneseName" TEXT NOT NULL,
    "cost" DECIMAL NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderId" INTEGER NOT NULL,
    "cocktailId" INTEGER NOT NULL,

    PRIMARY KEY ("orderId", "cocktailId"),
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("orderId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail" ("cocktailId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StaffMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
