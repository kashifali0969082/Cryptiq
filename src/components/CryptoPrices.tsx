
import { MoreHorizontal } from 'lucide-react';

const CryptoPrices = () => {
  return (
    <div className="text-white p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-800/70 transition-colors border border-gray-700/30">
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
          </button>
          <div>
            <span className="text-white font-medium">Today's Cryptocurrency Prices by</span>
            <span className="text-purple-400 ml-2 font-medium">- Spectram →</span>
          </div>
        </div>

        {/* Buttons - responsive stacking */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <button className="bg-gray-800/50 rounded-full px-4 py-2 text-white hover:bg-gray-800/70 transition-colors border border-gray-700/30 font-medium">
            Let'sExchange
          </button>
          <button className="bg-purple-600 rounded-full px-4 py-2 text-white hover:bg-purple-700 transition-colors font-medium">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrices;
