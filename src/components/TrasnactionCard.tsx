import React from 'react';

interface Transaction {
  id: string;
  title: string;
  dueTime: string;
  status: 'active' | 'pending' | 'completed';
  amount: string;
  value: string;
}

interface TransactionCardProps {
  transactions: Transaction[];
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transactions }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-400';
      case 'pending':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-green-400';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Processing';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/40">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-white text-lg font-semibold">New Transactions</h3>
          <p className="text-gray-500 text-sm">Mon, 24 Jun 2024</p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800/50 rounded-xl px-3 py-2 border border-gray-700/30">
          <div className="w-4 h-4 bg-yellow-500 rounded-md"></div>
          <span className="text-white text-sm font-medium">Coinbase</span>
        </div>
      </div>

      <div className="space-y-1">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center space-x-4 p-2 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-200 border border-gray-800/20">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(transaction.status)}`}></div>
            <div className="flex-1">
              <div className="text-white font-medium text-sm">{transaction.title}</div>
              <div className="text-gray-500 text-xs">{getStatusText(transaction.status)} • {transaction.dueTime}</div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium text-sm">{transaction.amount}</div>
              <div className="text-gray-400 text-xs">{transaction.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800/40">
        <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">+ New Transaction</button>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 text-sm">Total Today</span>
          <div className="bg-gray-800/50 rounded-full px-3 py-1 border border-gray-700/30">
            <span className="text-green-400 text-sm font-medium">+$2,481.95</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;