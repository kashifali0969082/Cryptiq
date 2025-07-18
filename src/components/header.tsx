import React from "react";
import {

  LayoutGrid,
} from "lucide-react";
import bLogo from "/b_logo.png";
import { YourApp } from "./custombutton";

interface HeaderProps {
  currentPage: "home" | "analytics" | "transfer";
    onPageChange: (page: "home" | "analytics" | "transfer") => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const handlePageChange = (page: "home" | "analytics" | "transfer") => {
  //   onPageChange(page);
  //   // setIsMobileMenuOpen(false); // Close menu after navigation
  // };

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-800/50 w-full">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800/60 rounded-full flex items-center justify-center border border-gray-700/50">
            <img
              src={bLogo}
              alt="Binance Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-gray-800/40 rounded-full px-1 py-1 border border-gray-700/30">
          {/* Home */}
          <button
            onClick={() => onPageChange("home")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm ${
              currentPage === "home"
                ? "bg-gray-700/60 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Home</span>
          </button>

          {/* Transfer */}
          {/* <button
            onClick={() => onPageChange("transfer")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm ${
              currentPage === "transfer"
                ? "bg-gray-700/60 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>Transfer</span>
          </button> */}

          {/* Analytics */}
          {/* <button
            onClick={() => onPageChange("analytics")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm ${
              currentPage === "analytics"
                ? "bg-gray-700/60 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Analytics</span>
          </button> */}
        </nav>

        {/* Right: Mobile Burger + Desktop Connect Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Burger Menu Button */}
          {/* <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 bg-gray-800/60 rounded-full border border-gray-700/50 hover:bg-gray-800/80 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-400" />
            ) : (
              <Menu className="w-5 h-5 text-gray-400" />
            )}
          </button> */}

          {/* Connect Wallet Button */}
          <YourApp />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={toggleMobileMenu}>
          <div className="bg-gray-900/95 border-b border-gray-800/50 p-4" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handlePageChange("home")}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  currentPage === "home"
                    ? "bg-gray-700/60 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
                <span>Home</span>
              </button>

              {/* Transfer */}
              {/* <button
                onClick={() => handlePageChange("transfer")}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  currentPage === "transfer"
                    ? "bg-gray-700/60 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                }`}
              >
                <Gem className="w-5 h-5" />
                <span>Transfer</span>
              </button> */}

              {/* Analytics */}
              {/* <button
                onClick={() => handlePageChange("analytics")}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  currentPage === "analytics"
                    ? "bg-gray-700/60 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                }`}
              >
                <Database className="w-5 h-5" />
                <span>Analytics</span>
              </button> */}

              {/* Settings */}
              {/* <button
                onClick={() => handlePageChange("settings")}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  currentPage === "settings"
                    ? "bg-gray-700/60 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button> 

              <div className="flex items-center space-x-3 px-4 py-3 text-gray-400">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
                <div className="ml-auto">
                  <span className="text-xs text-white rounded-full px-2 py-0.5 border border-gray-700/50">
                    3
                  </span>
                </div>
             
      )} */}
    </>
  );
};

export default Header;