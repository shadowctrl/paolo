"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 border-b bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                width="50px"
                src="/High Res Coin No BG.png"
                alt="Logo"
                className="text-xl font-bold text-white"
              />
            </Link>
          </div>
          {/* Desktop Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {[
                ["KORV AI", "#korvAI"],
                ["Timeline", "#timeline"],
                ["Crystal Stats", "#stats"],
                ["NFT Chamber", "#nft"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-colors hover:opacity-90 group"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Portal Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="SINCLAIR"
              target="_blank"
            >
              <Button className="ml-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-bold px-4 py-2 rounded-full hover:opacity-90 shadow-md transition">
                Buy $KORV
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              ["KORV AI", "#korvAI"],
              ["Timeline", "#timeline"],
              ["Crystal Stats", "#stats"],
              ["NFT Chamber", "#nft"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-pink-500"
              >
                {label}
              </a>
            ))}
            <Link
              href="SINCLAIR"
              target="_blank"
            >
              <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-bold px-4 py-2 rounded-full hover:opacity-90 shadow-md transition">
                Buy $KORV
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
