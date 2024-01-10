"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const contractAddress = "SINCLAIR";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleLearnMore = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] pt-16">
      {/* Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-2 text-center shadow-md z-40">
        <span className="text-lg font-semibold">
          💠 KORVVERSE - COMING SOON! - <span className="text-pink-300">UNLOCKING A NEW DIMENSION...</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Welcome to KORV AI
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 font-semibold">
              Where AI Meets the Future of Gaming
            </p>
            <p className="text-gray-400 text-lg">
              KORVVERSE is the culmination of centuries of silent guidance,
              where the power of AI and blockchain converge to empower humanity.
              Shape your world, trade your assets, and redefine gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="SINCLAIR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md hover:opacity-90 transition text-center"
              >
                Buy $KORV
              </a>
              <button
                onClick={handleLearnMore}
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-md hover:opacity-90 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-lg backdrop-blur-sm">
                <img
                  src="/Small-XRON-Coin-NO-BG.gif"
                  alt="KORV Gaming Universe"
                  className="w-full h-full object-cover rounded-lg mix-blend-luminosity"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-600 opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Crypto Address Section */}
        <div className="w-full text-center pb-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg glow-effect">
              <span className="text-white font-bold mr-2">CA:</span>
              <p className="text-gray-200 font-mono break-all text-sm lg:text-base">{contractAddress}</p>
              <button
                onClick={copyToClipboard}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors ml-2"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-pink-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-12" style={{ maxWidth: "75%" }}>
          <div className="relative rounded-lg p-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
            <video
              src="/nEW KORV AI.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
