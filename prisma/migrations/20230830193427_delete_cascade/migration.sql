-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_watch_id_fkey";

-- DropForeignKey
ALTER TABLE "Purchase_History" DROP CONSTRAINT "Purchase_History_watch_id_fkey";

-- AddForeignKey
ALTER TABLE "Purchase_History" ADD CONSTRAINT "Purchase_History_watch_id_fkey" FOREIGN KEY ("watch_id") REFERENCES "Watches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_watch_id_fkey" FOREIGN KEY ("watch_id") REFERENCES "Watches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
