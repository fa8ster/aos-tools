"use client";

import "../styles/globals.css";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

require("dotenv").config();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = WalletAdapterNetwork.Mainnet;
  const wallets = useMemo(
    () => [new PhantomWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  // Planetscale
  const mysql = require("mysql2");
  const connection = mysql.createConnection(process.env.DATABASE_URL);
  console.log("Connected to PlanetScale!");
  connection.end();
  // Planetscale

  return (
    <html className="h-full bg-gray-800">
      <head />
      <body className="h-full">
        <ConnectionProvider endpoint="https://omniscient-twilight-feather.solana-mainnet.quiknode.pro/c0ea1236c3995f1607038693bb9d59692efe51ad/">
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
