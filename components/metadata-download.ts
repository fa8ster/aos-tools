import { Metaplex } from "@metaplex-foundation/js";
import { Connection } from "@solana/web3.js";
const connection = new Connection(
  "https://omniscient-twilight-feather.solana-mainnet.quiknode.pro/c0ea1236c3995f1607038693bb9d59692efe51ad/",
  "finalized"
);
const metaplex = new Metaplex(connection);

var _ = require("lodash");

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  try {
    const nft = {
      address: "HMUXyfBY9BX8Y3HvyoCBhjCTy6dTQ6AyMjiFxm9hWntG",
      samId: "1010",
      name: "SAM #1010 (AOS)",
      firstCreator: "6fhr1c3dXjXKmQbFvLgDetFibwYtAdjxNGAiLqUPp6SM",
      currentHolder: "H1KvYGqBK2eWPueq2cXBctF94c14BZ6BCfJd9tkm2NZh",
      background: "Harvster",
      body: "Crimson Red",
      head: "Ape DeGen",
      rank: "Commander",
      faction: "DeGens",
      boost: "2X",
      collection: "sam",
    };

    const findNft = await prisma.nfts.findMany({
      where: {
        address: nft.address,
      },
    });

    if (findNft.length > 0) {
      console.log(findNft);
    } else {
      console.log("Creating NFT");
      const result = await prisma.nfts.create({
        data: nft,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    prisma.$disconnect();
  }
})();

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
