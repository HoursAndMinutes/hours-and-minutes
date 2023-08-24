/*
  Warnings:

  - You are about to drop the column `cc_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ship_id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cc_id",
DROP COLUMN "ship_id";

-- CreateTable
CREATE TABLE "Watches" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "brand" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "material" VARCHAR(100) NOT NULL,
    "mech" BOOLEAN,
    "digital" BOOLEAN,
    "gender" VARCHAR(100) NOT NULL,

    CONSTRAINT "Watches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing_Info" (
    "id" SERIAL NOT NULL,
    "name_on_card" VARCHAR(200) NOT NULL,
    "cc" VARCHAR(16) NOT NULL,
    "cvv" VARCHAR(4) NOT NULL,
    "exp" VARCHAR(7) NOT NULL,
    "street_address" VARCHAR(200) NOT NULL,
    "city" VARCHAR(200) NOT NULL,
    "state" VARCHAR(200) NOT NULL,
    "zip" VARCHAR(200) NOT NULL,
    "country" VARCHAR(200) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Billing_Info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipping_Info" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(100) NOT NULL,
    "lastname" VARCHAR(100) NOT NULL,
    "street_address" VARCHAR(200) NOT NULL,
    "city" VARCHAR(200) NOT NULL,
    "state" VARCHAR(200) NOT NULL,
    "zip" VARCHAR(200) NOT NULL,
    "country" VARCHAR(200) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Shipping_Info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase_History" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "watch_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "watch_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Watches_id_key" ON "Watches"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Billing_Info_id_key" ON "Billing_Info"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Shipping_Info_id_key" ON "Shipping_Info"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_History_id_key" ON "Purchase_History"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_id_key" ON "Cart"("id");

-- AddForeignKey
ALTER TABLE "Billing_Info" ADD CONSTRAINT "Billing_Info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping_Info" ADD CONSTRAINT "Shipping_Info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_History" ADD CONSTRAINT "Purchase_History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_History" ADD CONSTRAINT "Purchase_History_watch_id_fkey" FOREIGN KEY ("watch_id") REFERENCES "Watches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_watch_id_fkey" FOREIGN KEY ("watch_id") REFERENCES "Watches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
