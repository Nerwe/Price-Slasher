import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("email") && localStorage.getItem("username") && localStorage.getItem("password");
  
  return (
    <nav className="bg-slate-700 dark:bg-neutral-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/favicon.ico" className="w-8 h-8 object-contain" alt="Logo" />
              </div>
              <span className="ml-2 text-xl font-bold text-white dark:text-white">Price Slasher</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/giveaways" className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors">
                Giveaways
              </Link>
              <Link to="/about" className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors">
                About
              </Link>
              <Link to="https://nullyarcv.vercel.app/" className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors">
                Contacts
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <ThemeToggle />
                <Link
                  to="/profile"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md text-md font-medium hover:bg-orange-600 transition-colors"
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <ThemeToggle />
                <Link
                  to="/login"
                  className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/giveaways"
              className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Giveaways
            </Link>
            <Link
              to="/about"
              className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="https://nullyarcv.vercel.app/"
              className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </Link>
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="bg-orange-500 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="bg-orange-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
