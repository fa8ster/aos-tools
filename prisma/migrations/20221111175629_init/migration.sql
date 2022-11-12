/*
  Warnings:

  - You are about to drop the column `id` on the `nfts` table. All the data in the column will be lost.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_nfts" (
    "address" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "samId" STRING NOT NULL,
    "name" STRING NOT NULL,
    "firstCreator" STRING NOT NULL,
    "currentHolder" STRING NOT NULL,
    "background" STRING NOT NULL,
    "body" STRING NOT NULL,
    "head" STRING NOT NULL,
    "rank" STRING NOT NULL,
    "faction" STRING NOT NULL,
    "boost" STRING NOT NULL,
    "collection" STRING NOT NULL,

    CONSTRAINT "nfts_pkey" PRIMARY KEY ("address")
);
INSERT INTO "_prisma_new_nfts" ("address","background","body","boost","collection","createdAt","currentHolder","faction","firstCreator","head","name","rank","samId","updatedAt") SELECT "address","background","body","boost","collection","createdAt","currentHolder","faction","firstCreator","head","name","rank","samId","updatedAt" FROM "nfts";
DROP TABLE "nfts" CASCADE;
ALTER TABLE "_prisma_new_nfts" RENAME TO "nfts";
CREATE UNIQUE INDEX "nfts_address_key" ON "nfts"("address");
