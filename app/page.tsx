"use client";

import NavBar from "./Components/NavBar";

import RippleGrid from "./Components/RippleGrid";
import FlowingMenu from "./Components/FlowingMenu";
import OurExpertise from "./Components/OurExpertise";
import BroadCastSolution from "./Components/BroadCastSolution";
import Footer from "./Components/Footer";
import TeamCard from "./Components/Team/TeamCard";
import TitleCardMap from "./Components/services/TitleCardMap";
import ExcellentaFormsStack from "./Components/Form";
import LogoComp from "./Components/logoLoop/LogoComp";
// import TitleCardMap from "./Components/services/TitleCardMap";

export default function Home() {
  return (
    <main className="relative h-screen bg-[#060010]">
      {/* Background image/distortion (bottom layer) */}
      <div className="absolute inset-0 z-0 h-screen max-w-[1300px] mx-auto">
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227ff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      {/* NavBar overlaid on top of the image */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto max-w-[1300px] px-4 pt-4">
          <NavBar />
        </div>
      </header>

      {/* Optional centered foreground content over the hero */}
      <section className="relative z-20 grid h-full lg:place-items-center pointer-events-none ">
        {/* put CTA/title here; remove pointer-events-none to make them clickable */}
        {/* <h1 className="text-white text-5xl font-bold">@1Stop</h1> */}
        <h1 className="text-8xl font-bold text-center max-w-[950px]">
          {" "}
          <span className="font-serif italic   px-6">from</span>
          Field to Screen<span className="font-serif px-6 italic ">—</span>
          As It Happens{" "}
        </h1>
      </section>

      <div className="bg-[#060010] py-10 ">
        <LogoComp />
      </div>
      <div className="bg-[#060010] !max-w-[1300px] mx-auto">
        <OurExpertise />
      </div>
      <div className="bg-[#060010] !max-w-[1300px] mx-auto">
        <BroadCastSolution />
      </div>

      <div className="bg-[#060010] py-10 !max-w-[1300px] mx-auto">
        <TitleCardMap />
      </div>
      <div className="!bg-[#060010] py-10 !max-w-[1300px] mx-auto">
        <TeamCard />
      </div>
      <div className="bg-[#060010] py-10 !max-w-[1300px] mx-auto">
        <ExcellentaFormsStack />
      </div>
      <div className="!max-w-[1300px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
