import { useEffect, useState } from "react";
import Header from "./components/header";
import TransactionCard from "./components/TrasnactionCard";
import PortfolioCard from "./components/PortfolioCard";
import CryptoMarketCard from "./components/CryptoMarketCard";
import AccountCard from "./components/AccountCard";
import AIAssistantCard from "./components/AIAssistantCard";
import AnalyticsPage from "./components/AnalyticsPage";
import TransferPage from "./components/TransferPage";

const mockTransactions = [
  {
    id: "1",
    title: "Bitcoin Purchase",
    dueTime: "10:30",
    status: "completed" as const,
    amount: "+0.0025 BTC",
    value: "$156.75",
  },
  {
    id: "2",
    title: "Ethereum Sale",
    dueTime: "09:45",
    status: "completed" as const,
    amount: "-0.5 ETH",
    value: "$1,247.50",
  },
  {
    id: "3",
    title: "Cardano Purchase",
    dueTime: "08:15",
    status: "pending" as const,
    amount: "+500 ADA",
    value: "$185.00",
  },
  {
    id: "4",
    title: "Solana Transfer",
    dueTime: "07:30",
    status: "active" as const,
    amount: "+12.5 SOL",
    value: "$892.50",
  },
];

const mockPortfolioData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    value: "$15,247.50",
    change: "+2.45%",
    changeValue: "+$365.20",
    isPositive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    value: "$8,156.75",
    change: "-1.23%",
    changeValue: "-$101.85",
    isPositive: false,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    value: "$2,890.25",
    change: "+5.67%",
    changeValue: "+$155.40",
    isPositive: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    value: "$1,245.80",
    change: "+3.21%",
    changeValue: "+$38.75",
    isPositive: true,
  },
];

const mockCryptoMarket = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$62,450.00",
    change: "+2.45%",
    isPositive: true,
    owned: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,125.75",
    change: "-1.23%",
    isPositive: false,
    owned: true,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "$0.37",
    change: "+5.67%",
    isPositive: true,
    owned: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$71.45",
    change: "+3.21%",
    isPositive: true,
    owned: true,
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    price: "$5.82",
    change: "+1.89%",
    isPositive: true,
    owned: false,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    price: "$14.25",
    change: "-0.75%",
    isPositive: false,
    owned: false,
  },
];
function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "analytics" | "settings" | "transfer"
  >("home");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {currentPage !== "settings" && (
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      )}

      {/* 📊 Analytics Full Page (only when selected) */}
      {currentPage === "analytics" && (
        <div className="w-full p-4 md:p-6">
          <AnalyticsPage />
        </div>
      )}

      {/* 🏠 Home Page Layout */}
      {currentPage === "home" && (
        <div className="w-full">
          {/* Mobile layout */}
          {isMobile ? (
            <div className="px-4 py-4 flex flex-col gap-4">
              <PortfolioCard portfolioData={mockPortfolioData} />
              <TransactionCard transactions={mockTransactions} />
              <AIAssistantCard />
              <CryptoMarketCard cryptoData={mockCryptoMarket} />
              <AccountCard />
            </div>
          ) : (
            // Desktop 3-column layout
            <div className="px-6 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <TransactionCard transactions={mockTransactions} />
                <AccountCard />
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-4">
                <PortfolioCard portfolioData={mockPortfolioData} />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                <AIAssistantCard />
                <CryptoMarketCard cryptoData={mockCryptoMarket} />
              </div>
            </div>
          )}

          {/* 🔻 Full-width component below the main layout */}
          <div className="w-full px-4 md:px-6 py-6">
            <AnalyticsPage />
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
