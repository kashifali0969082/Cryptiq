import { useState } from "react";
import { CheckCircle, X, Send, Wallet, User2, DollarSign } from "lucide-react";

type TransferPageProps = {
  onCancel: () => void;
};

const supportedAssets = ["BTC", "ETH", "ADA", "SOL"];

export default function TransferPage({ onCancel }: TransferPageProps) {
  const [asset, setAsset] = useState("BTC");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [showAssetModal, setShowAssetModal] = useState(false);

  const handleTransfer = () => {
    if (!recipient || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Transferring ${amount} ${asset} to ${recipient}`);
    onCancel();
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-900/60 text-white shadow-xl rounded-xl border border-gray-700">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <Send className="w-6 h-6 text-purple-400" />
        Transfer Funds
      </h2>

      {/* Asset Selector */}
      <div className="mb-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-800/20">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-blue-400" />
            Selected Asset
          </label>
          <button
            onClick={() => setShowAssetModal(true)}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Change
          </button>
        </div>
        <div className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 text-center">
          {asset}
        </div>
      </div>

      {/* Recipient Input */}
      <div className="mb-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-800/20">
        <label className="block text-sm font-medium mb-1 text-gray-300 flex items-center gap-2">
          <User2 className="w-4 h-4 text-yellow-400" />
          Recipient Address
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded hover:bg-gray-600/40"
          placeholder="Enter wallet address"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-6 p-4 bg-gray-800/30 rounded-2xl border border-gray-800/20">
        <label className="block text-sm font-medium mb-1 text-gray-300 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-green-400" />
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded hover:bg-gray-600/40"
          placeholder="0.00"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col px-20 sm:flex-row sm:justify-between gap-3">
        <button
          onClick={handleTransfer}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition w-full sm:w-auto"
        >
          Transfer
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-full transition w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>

      {/* Asset Modal */}
      {showAssetModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-gray-800 px-4 py-2 rounded-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-white font-semibold text-lg">
                Select an Asset
              </h4>
              <button onClick={() => setShowAssetModal(false)}>
                <X className="text-white w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {supportedAssets.map((symbol) => (
                <div
                  key={symbol}
                  onClick={() => {
                    setAsset(symbol);
                    setShowAssetModal(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                    symbol === asset
                      ? "bg-gray-700/60"
                      : "bg-gray-700/40 hover:bg-gray-600/40"
                  }`}
                >
                  <div className="text-white font-medium">{symbol}</div>
                  {symbol === asset && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
