import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { div } from "framer-motion/client";
// import Image from "next/image";
import { User } from "lucide-react";
export const YourApp = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="flex border border-gray-700/50 bg-gray-800/60 justify-center items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-gray-800/70 transition-colors"
                  >
                    <span className="text-white">CONNECT WALLET</span>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="flex border border-gray-700/50 bg-gray-800/60 justify-center items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="text-red-400">
                      Wrong network
                    </div>
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openAccountModal}
                    className="flex border border-gray-700/50 bg-gray-800/60 justify-center items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-gray-800/70 transition-colors"
                    type="button"
                  >
                      <User width={20}
                      height={20} />
                    <div className="text-white">
                      {account.displayName}
                    </div>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};