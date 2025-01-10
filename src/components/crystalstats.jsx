import React from "react";

const CrystalStats = () => {
  const stats = [
    {
      title: "Crystal Matrix Supply",
      value: "1B $KORV",
      description: "Maximum Dimensional Capacity",
    },
    {
      title: "Dimensional Stability",
      value: "SECURED",
      description: "Crystalline network fully synchronized",
    },
    {
      title: "Crystal Transfer",
      value: "INSTANT",
      description: "Zero-latency dimensional bridging",
    },
    {
      title: "Crystal Governance",
      value: "DECENTRALIZED",
      description: "Autonomous dimensional consensus",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-center py-10 text-4xl">
        Crystal Stats
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Card Container */}
              <div className="relative rounded-lg p-8 border border-transparent hover:border-purple-500 transition-all duration-300 z-10">
                {/* Top left corner border */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-top-left"></div>
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transform origin-top-left"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-purple-500"></div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold">
                      {stat.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      {stat.value}
                    </h2>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sentence */}
      <p className="text-center text-gray-300 text-2xl mt-10 font-semibold">
        💠 Get ready for the launch of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          KORVERSE
        </span>
        , coming in Q1 2025! 💠
      </p>
    </div>
  );
};

export default CrystalStats;
