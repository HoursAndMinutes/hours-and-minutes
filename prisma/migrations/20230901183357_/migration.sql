/*
  Warnings:

  - Added the required column `imageURL` to the `Watches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Watches" ADD COLUMN     "imageURL" VARCHAR(500) NOT NULL;
