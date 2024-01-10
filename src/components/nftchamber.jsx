import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const NFTCard = ({ number, rarity, type, resonance = "CRYSTAL RESONANCE" }) => {
  const getImageUrl = (number) => {
    return "/High Res KORV MAIN No BG.png"; // Replace with actual images if necessary
  };

  const getCardGradient = (number) => {
    return "from-purple-600 via-pink-500 to-purple-600";
  };

  return (
    <div className="relative group">
      <Card className="bg-gradient-to-b from-gray-900 to-black border-0 overflow-hidden transition-all duration-300 hover:scale-105">
        <CardContent className="p-0">
          <div className={`aspect-square bg-gradient-to-br ${getCardGradient(number)} relative`}>
            <img
              src={getImageUrl(number)}
              alt={`KORV #${number}`}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-pink-500 text-sm font-medium">
                KORV #{number}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="text-gray-400">RARITY</div>
                <div className="text-white">{rarity}</div>
              </div>
              <div>
                <div className="text-gray-400">TYPE</div>
                <div className="text-white">{type}</div>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-xs text-gray-400">{resonance}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const NFTChamber = () => {
  const nfts = [
    { number: "564", rarity: "Dimensional", type: "Crystal" },
    { number: "431", rarity: "Ethereal", type: "Prism" },
    { number: "222", rarity: "Astral", type: "Shard" },
    { number: "800", rarity: "Ethereal", type: "Crystal" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center mb-8">
        NFT Chamber
      </h2>
      <p className="text-center text-gray-300 mb-8 text-lg">
        Unlock the secrets of the KORVERSE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Coming Q1 2025...</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <NFTCard
            key={nft.number}
            number={nft.number}
            rarity={nft.rarity}
            type={nft.type}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTChamber;
