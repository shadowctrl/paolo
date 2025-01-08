import CrystalStats from "@/components/crystalstats";
import HeroSection from "@/components/hero";
import NexusLinks from "@/components/nexuslinks";
import NFTChamber from "@/components/nftchamber";
import TimelineSection from "@/components/timeline";
import XronIdentity from "@/components/xronIdentity";
import BackgroundAnimation from "@/components/BackgroundAnimation"; // Import the background animation

const Page = () => {
  return (
    <>
      {/* Black Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black"
        style={{
          zIndex: -1, // Black background layer
        }}
      ></div>

      {/* Green Animated Background */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative">
        <HeroSection />
        <section id="XRON" className="scroll-mt-16">
          <XronIdentity />
        </section>
        <section id="timeline" className="scroll-mt-16">
          <TimelineSection />
        </section>
        <section id="stats" className="scroll-mt-16">
          <CrystalStats />
        </section>
        <section id="nft" className="scroll-mt-16">
          <NFTChamber />
        </section>
        <section id="links" className="scroll-mt-16">
          <NexusLinks />
        </section>
      </div>
    </>
  );
};

export default Page;
