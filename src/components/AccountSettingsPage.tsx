import React, { useState } from "react";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Key,
  Globe,
  Moon,
  Smartphone,
  Mail,
  Eye,
  EyeOff,
  TrendingUp,
} from "lucide-react";

interface AccountSettingsPageProps {
  onCancel: () => void;
}

const AccountSettingsPage: React.FC<AccountSettingsPageProps> = ({
  onCancel,
}) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    trading: true,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "api", label: "API Keys", icon: Key },
    { id: "preferences", label: "Preferences", icon: Globe },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-gray-700/50"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <span className="text-white text-xs">✏️</span>
                </button>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Ms. Alexandra
                </h3>
                <p className="text-gray-400">@Alexa.959EOr</p>
                <p className="text-gray-500 text-sm">Member since June 2023</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Alexandra Rodriguez"
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alexandra@example.com"
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Country
                </label>
                <select className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">
                Two-Factor Authentication
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Secure your account with 2FA</p>
                  <p className="text-green-400 text-sm">
                    ✓ Enabled via Authenticator App
                  </p>
                </div>
                <button className="bg-gray-700/50 rounded-xl px-4 py-2 text-white hover:bg-gray-700/70 transition-colors">
                  Manage
                </button>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 pr-12"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">Login Sessions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Current Session</p>
                      <p className="text-gray-400 text-sm">
                        Chrome on macOS • New York, US
                      </p>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {key === "email" && (
                        <Mail className="w-5 h-5 text-gray-400" />
                      )}
                      {key === "push" && (
                        <Bell className="w-5 h-5 text-gray-400" />
                      )}
                      {key === "sms" && (
                        <Smartphone className="w-5 h-5 text-gray-400" />
                      )}
                      {key === "trading" && (
                        <TrendingUp className="w-5 h-5 text-gray-400" />
                      )}
                      <div>
                        <p className="text-white capitalize">
                          {key} Notifications
                        </p>
                        <p className="text-gray-400 text-sm">
                          {key === "email" && "Receive updates via email"}
                          {key === "push" && "Browser push notifications"}
                          {key === "sms" && "SMS alerts for important updates"}
                          {key === "trading" &&
                            "Trading alerts and market updates"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setNotifications((prev) => ({ ...prev, [key]: !value }))
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? "bg-purple-600" : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">
                Connected Payment Methods
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CB</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Coinbase Pro</p>
                      <p className="text-gray-400 text-sm">
                        Primary trading account
                      </p>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm">
                    Disconnect
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">
                        Add Payment Method
                      </p>
                      <p className="text-gray-500 text-sm">
                        Connect bank account or card
                      </p>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "api":
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">API Keys</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                  <div>
                    <p className="text-white font-medium">Trading API Key</p>
                    <p className="text-gray-400 text-sm font-mono">
                      sk_live_••••••••••••••••••••••••••••••••
                    </p>
                    <p className="text-gray-500 text-xs">
                      Created: June 15, 2024 • Last used: 2 hours ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-sm">Active</span>
                    <button className="text-gray-400 hover:text-white text-sm">
                      Revoke
                    </button>
                  </div>
                </div>

                <button className="w-full p-4 bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-700/50 text-purple-400 hover:text-purple-300 transition-colors">
                  + Generate New API Key
                </button>
              </div>
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-800/20">
              <h3 className="text-white font-semibold mb-4">
                Display Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-white">Dark Mode</p>
                      <p className="text-gray-400 text-sm">Use dark theme</p>
                    </div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Currency</p>
                    <p className="text-gray-400 text-sm">
                      Display currency preference
                    </p>
                  </div>
                  <select className="bg-gray-800/50 border border-gray-700/30 rounded-xl px-3 py-2 text-white">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Language</p>
                    <p className="text-gray-400 text-sm">Interface language</p>
                  </div>
                  <select className="bg-gray-800/50 border border-gray-700/30 rounded-xl px-3 py-2 text-white">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">
            Account Settings
          </h1>
          <p className="text-gray-400">
            Manage your account preferences and security settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-800/40 sticky top-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/40">
              {renderTabContent()}

              <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-gray-800/40">
                <button
                  onClick={onCancel}
                  className="px-6 py-2 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white transition-colors border border-gray-700/30"
                >
                  Cancel
                </button>

                <button className="px-6 py-2 bg-purple-600 rounded-xl text-white hover:bg-purple-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
