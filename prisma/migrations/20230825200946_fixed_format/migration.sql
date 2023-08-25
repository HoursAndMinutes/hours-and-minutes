/*
  Warnings:

  - You are about to drop the column `userId` on the `Billing_Info` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Purchase_History` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Shipping_Info` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Billing_Info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Purchase_History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Shipping_Info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Billing_Info" DROP CONSTRAINT "Billing_Info_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase_History" DROP CONSTRAINT "Purchase_History_userId_fkey";

-- DropForeignKey
ALTER TABLE "Shipping_Info" DROP CONSTRAINT "Shipping_Info_userId_fkey";

-- AlterTable
ALTER TABLE "Billing_Info" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Purchase_History" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shipping_Info" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Billing_Info" ADD CONSTRAINT "Billing_Info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping_Info" ADD CONSTRAINT "Shipping_Info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_History" ADD CONSTRAINT "Purchase_History_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
