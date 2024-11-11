import React, { useState } from "react";
import { Link } from "react-router-dom";

const Submenu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Состояние для управления подменю
  const isLoggedIn =
    localStorage.getItem("email") &&
    localStorage.getItem("username") &&
    localStorage.getItem("password");

  return (
    <div className="bg-neutral-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="md:hidden flex justify-between items-center h-12">
          <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-white">
                Menu
              </span>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="text-gray-200 hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSubMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isSubMenuOpen && (
        <div className="md:hidden bg-neutral-800">
          <ul className="space-y-1 px-2 pt-2 pb-3">
            <li>
              <Link
                to="/giveaways/steam"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                Steam
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/epic-games-store"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                Epic Games
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/itchio"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                Itch.io
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/gog"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                GOG
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/xbox-one"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                Xbox One
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/ps4"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                PS4
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/android"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                Android
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/ios"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                IOS
              </Link>
            </li>
            <li>
              <Link
                to="/giveaways/drm-free"
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-lg"
              >
                DRM-Free
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Меню для десктопа */}
      <div className="hidden md:flex justify-center p-0.5 bg-neutral-800">
        <ul className="flex m-0 p-0 gap-5">
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/steam"
              className="text-gray-500 hover:text-white text-lg"
            >
              Steam
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/epic-games-store"
              className="text-gray-500 hover:text-white text-lg"
            >
              Epic Games
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/itchio"
              className="text-gray-500 hover:text-white text-lg"
            >
              Itch.io
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/gog"
              className="text-gray-500 hover:text-white text-lg"
            >
              GOG
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/xbox-one"
              className="text-gray-500 hover:text-white text-lg"
            >
              Xbox One
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/ps4"
              className="text-gray-500 hover:text-white text-lg"
            >
              PS4
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/android"
              className="text-gray-500 hover:text-white text-lg"
            >
              Android
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/ios"
              className="text-gray-500 hover:text-white text-lg"
            >
              IOS
            </Link>
          </li>
          <li className="mr-4 last:mr-0">
            <Link
              to="/giveaways/drm-free"
              className="text-gray-500 hover:text-white text-lg"
            >
              DRM-Free
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
