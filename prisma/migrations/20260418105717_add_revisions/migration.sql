-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "revision" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Quote"("id") ON DELETE SET NULL ON UPDATE CASCADE;
