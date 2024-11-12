import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 mt-auto text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto pt-12 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/help"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Link to="/" className="flex flex-col md:flex-row items-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/favicon.ico"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="mt-2 md:mt-0 md:ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Price Slasher
              </span>
            </Link>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-200 text-center">
              Your ultimate destination for game giveaways and deals.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-2">
          <p className="text-base text-gray-600 dark:text-gray-300 text-center">
            © {new Date().getFullYear()} Price Slasher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
