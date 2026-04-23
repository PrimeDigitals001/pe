/*
  Warnings:

  - The primary key for the `QuoteCounter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `QuoteCounter` table. All the data in the column will be lost.
  - Added the required column `fiscalYear` to the `QuoteCounter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "preparedByName" TEXT NOT NULL DEFAULT 'Puja Parmar',
ADD COLUMN     "preparedByPhone" TEXT NOT NULL DEFAULT '63581 85076',
ADD COLUMN     "preparedByRole" TEXT NOT NULL DEFAULT 'Sales',
ADD COLUMN     "subject" TEXT,
ADD COLUMN     "validTill" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "QuoteCounter" DROP CONSTRAINT "QuoteCounter_pkey",
DROP COLUMN "year",
ADD COLUMN     "fiscalYear" TEXT NOT NULL,
ADD CONSTRAINT "QuoteCounter_pkey" PRIMARY KEY ("fiscalYear");

-- AlterTable
ALTER TABLE "QuoteItem" ADD COLUMN     "description" TEXT,
ADD COLUMN     "hsnCode" TEXT,
ADD COLUMN     "itemCode" TEXT;
