import { useState } from "react";
import {
  Grid3X3,
  TrendingUp,
  BarChart3,
  Newspaper,
  Eye,
  Menu,
  Tag,
  MessageSquare,
  TrendingDown,
  ArrowUpDown,
  Plus,
  Landmark,
  PackageCheck,
  ExternalLink,
  Bitcoin,
} from "lucide-react";

const WalletOverviewWithHeader = () => {
  const [open, setOpen] = useState(false);

  const portfolio = [
    { name: "Tether", percentage: 35.02, color: "bg-green-400" },
    { name: "Xrp Coin", percentage: 20, color: "bg-purple-500" },
    { name: "Bitcoin", percentage: 45.02, color: "bg-yellow-400" },
  ];



  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/40 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Window Dots */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="w-6 h-6 bg-green-400 rounded-full" />
          <div className="w-6 h-6 bg-purple-500 rounded-full" />
          <div className="w-6 h-6 bg-yellow-400 rounded-full" />
        </div>

        {/* Desktop Horizontal Tabs */}
      

        {/* Tags & Message */}
        <div className="flex items-center justify-end space-x-3">
          <button className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
            <Tag className="w-4 h-4" />
            <span>All Tags</span>
          </button>
          <button className="hidden md:flex p-2 bg-gray-800/50 rounded-full hover:bg-gray-800/70 border border-gray-700/30">
            <MessageSquare className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Wallet Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 w-full relative">
  {/* Binance + Icons */}
  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
    <div className="flex items-center space-x-1 sm:space-x-2 border border-gray-600 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-[#2a2a2a]">
      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-400 rounded-full" />
      <span className="text-xs sm:text-sm text-white">Binance</span>
    </div>

    {[TrendingDown, TrendingUp, ArrowUpDown, BarChart3, Plus].map((Icon, i) => (
      <button
        key={i}
        className="hidden sm:flex p-1 sm:p-2 rounded-full border border-gray-600 hover:bg-[#2a2a2a]"
      >
        <Icon className="text-gray-400" size={14} />
      </button>
    ))}
  </div>


</div>


      {/* Wallet Info + Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
  {/* Wallet Info */}
  <div>
    <div className="text-sm text-gray-400">Main Wallet</div>
    <div className="text-4xl font-bold text-white">$23.547.00</div>
    <div className="text-gray-600">...</div>
  </div>

  {/* Action Buttons */}
  <div className="w-full flex flex-wrap gap-6 justify-center md:justify-end">
    {[Landmark, PackageCheck, ExternalLink].map((Icon, idx) => {
      const labels = ["Banking", "Billspay", "Fund Transfer"];
      const bgColors = ["", "purple-500/20", "yellow-400/20"];
      return (
        <div className="flex flex-col items-center" key={idx}>
          <div
            className={`w-24 h-16 rounded-full border border-gray-600 hover:bg-[#2a2a2a] flex items-center justify-center mb-1`}
            style={{ backgroundColor: bgColors[idx] }}
          >
            <Icon className="text-purple-400" size={32} />
          </div>
          <span className="text-sm text-gray-400">{labels[idx]}</span>
        </div>
      );
    })}
  </div>
</div>


      {/* Portfolio Bar */}
<div className="w-full h-6 sm:h-8 bg-gray-800 rounded-full overflow-hidden flex">
  {portfolio.map((item, i) => (
    <div
      key={i}
      className={`${item.color} h-full flex items-center justify-center`}
      style={{ width: `${item.percentage}%` }}
    >
      {item.percentage > 10 && (
        <span className="text-[10px] sm:text-xs text-black px-2 whitespace-nowrap">
          • {item.name} {item.percentage}%
        </span>
      )}
    </div>
  ))}
</div>


    
    </div>
  );
};

export default WalletOverviewWithHeader;
