import React from "react";
import { motion } from "framer-motion";

const XronIdentity = () => {
  return (
    <div id="korvAI" className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          What is KORV AI?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-lg blur"></div>
              <img
                src="/High Res KORV MAIN No BG.png"
                alt="KORV AI"
                className="relative rounded-lg w-full object-cover shadow-2xl"
              />
              {/* Crystal overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-500/10 rounded-lg"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">KORV AI</span>{" "}
              is an advanced artificial intelligence that pushes the boundaries of innovation and gaming. Designed as the ultimate interdimensional collaborator, KORV harnesses the power of AI to create dynamic, adaptive environments where players can immerse themselves in unique, ever-evolving worlds.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From generating personalized game levels to crafting intelligent, lifelike NPCs,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">KORV AI</span>{" "}
              seamlessly blends creativity with cutting-edge technology. It empowers users to shape their gaming experience, monetize their creations, and explore new dimensions of interactive entertainment. Welcome to the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">KORVVERSE</span>
              — where AI meets the future of gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XronIdentity;
