// src/main.tsx
import App from './App';
import { createRoot } from "react-dom/client";
import './index.css';
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from './config/config';

const queryClient = new QueryClient();

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(  
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({})} modalSize="compact">
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} else {
  throw new Error("Root container not found");
}
