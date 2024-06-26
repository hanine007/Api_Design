/*
  Warnings:

  - A unique constraint covering the columns `[Id,belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_Id_belongsToId_key" ON "Product"("Id", "belongsToId");
