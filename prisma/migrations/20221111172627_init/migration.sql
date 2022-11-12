/*
  Warnings:

  - Changed the type of `collection` on the `nfts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "nfts" DROP COLUMN "collection";
ALTER TABLE "nfts" ADD COLUMN     "collection" STRING NOT NULL;

-- DropEnum
DROP TYPE "Collection";
