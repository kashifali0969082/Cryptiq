import React from 'react';
import { Star, TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  owned: boolean;
}

interface CryptoMarketCardProps {
  cryptoData: CryptoItem[];
}

const CryptoMarketCard: React.FC<CryptoMarketCardProps> = ({ cryptoData }) => {
  // const [filter, setFilter] = useState<'all' | 'owned'>('owned');

  const filteredData = 
     cryptoData.filter(item => item.owned)
    

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/40">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-white font-medium">Crypto Market</span>
        </div>
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
          <span className="text-white text-sm">📈</span>
        </div>
      </div>

      {/* <div className="flex items-center space-x-2 mb-6">
        <button 
          onClick={() => setFilter('owned')}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
            filter === 'owned' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/30'
          }`}
        >
          My Holdings
        </button>
        <button 
          onClick={() => setFilter('all')}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
            filter === 'all' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/30'
          }`}
        >
          All Coins
        </button>
      </div> */}

      <div className="space-y-1 max-h-96 overflow-y-auto">
        {filteredData.map((crypto, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-200 border border-gray-800/20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{crypto.symbol}</span>
                </div>
                {crypto.owned && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-2 h-2 text-white fill-current" />
                  </div>
                )}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{crypto.name}</div>
                <div className="text-gray-400 text-xs">{crypto.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium text-sm">{crypto.price}</div>
              <div className={`flex items-center space-x-1 text-xs ${
                crypto.isPositive ? 'text-green-400' : 'text-red-400'
              }`}>
                {crypto.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{crypto.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 border-t border-gray-800/40">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Market Cap</span>
          <span className="text-white font-medium">$2.1T</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">24h Volume</span>
          <span className="text-green-400 font-medium">$89.2B</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarketCard;