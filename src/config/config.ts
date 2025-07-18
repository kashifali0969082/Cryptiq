import { createConfig, http } from "wagmi";
import { sepolia,bsc } from "wagmi/chains";

import {
  // tokenPocketWallet,
  walletConnectWallet,
  metaMaskWallet,
  // trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [walletConnectWallet,metaMaskWallet],
    },
  ],
  {
    appName: "cryptiq",
    projectId: "45a029651f37ec8e01c2e486810e6f3e",
  }
);
export const config = createConfig({
  chains: [sepolia,bsc],
  connectors,
  transports: {
    [sepolia.id]: http(),
    [bsc.id]: http(
      "https://bsc-mainnet.infura.io/v3/f5778e9c8b764c2eb60678ad73f25586"
    ),
  },
});

