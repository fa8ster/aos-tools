/*
  Warnings:

  - You are about to drop the `NFTs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NFTs";

-- CreateTable
CREATE TABLE "nfts" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" STRING NOT NULL,
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
    "collection" "Collection" NOT NULL DEFAULT 'sam',

    CONSTRAINT "nfts_pkey" PRIMARY KEY ("id")
);
