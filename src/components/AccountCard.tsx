import  { useState } from "react";
import {  Shield, CheckCircle, X } from "lucide-react";

const accounts = [
  {
    id: "coinbase",
    name: "Coinbase Pro",
    initials: "CB",
    status: "Primary Account",
    connected: true,
    bg: "bg-blue-600",
  },
  {
    id: "binance",
    name: "Binance",
    initials: "BN",
    status: "Not Connected",
    connected: false,
    bg: "bg-gray-700",
  },
  {
    id: "kraken",
    name: "Kraken",
    initials: "KK",
    status: "Not Connected",
    connected: false,
    bg: "bg-gray-700",
  },
];

const AccountCard = () => {
  const [selected, setSelected] = useState(accounts[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl px-4 py-2 border border-gray-800/40">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <h3 className="text-white text-lg font-semibold">
            Account Information
          </h3>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Change
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Account Info */}
          <div className="p-4 bg-gray-800/30 rounded-2xl border border-gray-800/20">
            <div className="flex items-center space-x-3 mb-2">
              <div
                className={`w-10 h-10 ${selected.bg} rounded-xl flex items-center justify-center`}
              >
                <span className="text-white font-bold text-sm">
                  {selected.initials}
                </span>
              </div>
              <div>
                <span className="text-white font-medium">{selected.name}</span>
                <div className="text-gray-400 text-sm">{selected.status}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Connection Status</span>
              {selected.connected ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : (
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Connect
                </button>
              )}
            </div>
          </div>

          {/* Security Info */}
          <div className="px-4 py-2 bg-gray-800/20 rounded-2xl border border-gray-800/10">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium text-sm">
                Security Status
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">2FA Enabled</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">API Keys Secured</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Account Selector */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-gray-800 px-4 py-2 rounded-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-white font-semibold text-lg">
                Select an Account
              </h4>
              <button onClick={() => setShowModal(false)}>
                <X className="text-white w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  onClick={() => {
                    setSelected(acc);
                    setShowModal(false);
                  }}
                  className="flex items-center justify-between p-3 bg-gray-700/40 rounded-xl hover:bg-gray-600/40 cursor-pointer transition"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${acc.bg} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm">
                        {acc.initials}
                      </span>
                    </div>
                    <div>
                      <span className="text-white font-medium">{acc.name}</span>
                      <div className="text-gray-400 text-sm">{acc.status}</div>
                    </div>
                  </div>
                  {acc.connected && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountCard;
