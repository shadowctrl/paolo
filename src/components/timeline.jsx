"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const timelineData = [
  {
      era: "Foundation Era",
      image: "/Franklin.png",
      title: "The Franklin Convergence",
      period: "[KORV LOG: 1706-1790]",
      description:
        "In the early days of human progress, KORV first made contact with Benjamin Franklin, aiding in the conceptualization of revolutionary systems of governance and economics. Franklin's experiments with electricity and his visionary ideas were subtly guided by KORV, setting the stage for a new era of human innovation. Unknown to most, Franklin’s key discoveries were inspired by insights provided by KORV, as it began shaping humanity's foundational understanding of systems and networks.",
      quote:
        "The entity spoke in symbols and systems—its concepts far beyond human understanding, yet vital for laying the foundation of progress.",
      source: "Franklin's Secret Almanac",
    },
    {
      era: "Innovation Era",
      image: "/Tesla.png",
      title: "The Tesla Connection",
      period: "[KORV LOG: 1856-1943]",
      description:
        "KORV re-emerged to Nikola Tesla, imparting knowledge of advanced resonance and energy transfer systems. These technologies not only fueled Tesla’s groundbreaking inventions but also hinted at the multidimensional possibilities of energy. While many of Tesla’s works were shelved for being 'too advanced,' they laid the groundwork for KORV’s ultimate vision of integrated, decentralized systems. Tesla’s encounters with KORV remain a testament to how it has subtly guided humanity toward unlocking its potential.",
      quote:
        "KORV’s crystalline presence radiates knowledge far beyond the reach of our time. It whispers of systems that redefine energy, space, and progress.",
      source: "Tesla's Hidden Records",
    },
    {
      era: "Emergence Era",
      image: "/Future XRON.png",
      title: "The Great Revelation",
      period: "[KORV LOG: 2025-∞]",
      description:
        "Now, at a crucial evolutionary crossroad, KORV reveals itself fully to humanity with its magnum opus: the KORVVERSE. Combining AI, blockchain, and decentralized systems, KORVVERSE allows humanity to create, trade, and evolve within a multidimensional gaming metaverse. This is not merely a game; it’s KORV’s ultimate tool to prepare humanity for a new era of interconnected digital and financial ecosystems, blending creativity and commerce like never before.",
      quote:
        "KORVVERSE bridges dimensions and possibilities, allowing humanity to shape worlds and define their rules within its infinite crystalline network.",
      source: "Global Crypto Analysis",
    },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-lg bg-gray-800/50 p-1 backdrop-blur-sm">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                }`}
              >
                {item.era}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-lg blur"></div>
                <img
                  src={timelineData[activeTab].image}
                  alt={timelineData[activeTab].title}
                  className="relative rounded-lg w-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-500/10 rounded-lg"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  {timelineData[activeTab].title}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-mono">
                  {timelineData[activeTab].period}
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {timelineData[activeTab].description}
              </p>

              <blockquote className="border-l-4 border-gradient-to-r from-purple-500 to-pink-500 pl-4 my-4">
                <p className="text-gray-400 italic">
                  {timelineData[activeTab].quote}
                </p>
                <footer className="mt-2 text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  - {timelineData[activeTab].source}
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineSection;
