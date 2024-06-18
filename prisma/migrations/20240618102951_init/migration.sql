-- CreateEnum
CREATE TYPE "Update_Status" AS ENUM ('In_Progress', 'Shipped', 'Deprecated');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Usernmae" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Product" (
    "Id" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Update" (
    "Id" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,
    "version" TEXT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "asset" TEXT,
    "status" "Update_Status" NOT NULL DEFAULT 'In_Progress',
    "ProductId" TEXT NOT NULL,

    CONSTRAINT "Update_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "updatePoint" (
    "Id" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "UpadateId" TEXT NOT NULL,

    CONSTRAINT "updatePoint_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Usernmae_key" ON "User"("Usernmae");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "updatePoint" ADD CONSTRAINT "updatePoint_UpadateId_fkey" FOREIGN KEY ("UpadateId") REFERENCES "Update"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
