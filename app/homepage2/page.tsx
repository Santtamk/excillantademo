"use client";

import React from "react";
import Dither from "../Components/Dither/Dither";
import NavBar from "../Components/NavBar";
import LogoComp from "../Components/logoLoop/LogoComp";
import OurExpertise from "../Components/OurExpertise";
import BroadCastSolution from "../Components/BroadCastSolution";
import TitleCardMap from "../Components/services/TitleCardMap";
import TeamCard from "../Components/Team/TeamCard";
import ExcellentaFormsStack from "../Components/Form";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <main className="relative h-screen bg-[#060010] overflow-x-hidden">
      {/* Background image/distortion (bottom layer) */}
      <div className="absolute inset-0 z-0 h-screen mx-auto">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* NavBar overlaid on top of the image */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto max-w-[1300px] px-4 pt-4">
          <NavBar />
        </div>
      </header>

      {/* Optional centered foreground content over the hero */}
      <section className="relative z-20 grid h-full place-items-center lg:place-items-center pointer-events-none">
        {/* put CTA/title here; remove pointer-events-none to make them clickable */}
        {/* <h1 className="text-white text-5xl font-bold">@1Stop</h1> */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center max-w-[950px] px-4">
          {" "}
          <span className="font-serif px-4">From Pixel to Audience</span>
          {/* Field to Screen<span className="font-serif px-6 italic ">—</span>
          As It Happens{" "} */}
          <br />
          <span className="text-xl ">
            Bridging technology and emotion, one broadcast at a time.
          </span>
        </h1>
      </section>

      <div className="bg-[#060010] py-5 md:py-10">
        <LogoComp />
      </div>
      <div className="bg-[#060010] max-w-[1300px] mx-auto px-4">
        <OurExpertise />
      </div>
      <div className="bg-[#060010] max-w-[1300px] mx-auto px-4">
        <BroadCastSolution />
      </div>

      <div className="bg-[#060010] py-5 md:py-10 max-w-[1300px] mx-auto px-4">
        <TitleCardMap />
      </div>
      <div className="bg-[#060010] py-5 md:py-10 max-w-[1300px] mx-auto px-4">
        <TeamCard />
      </div>
      <div className="bg-[#060010] py-5 md:py-10 max-w-[1300px] mx-auto px-4">
        <ExcellentaFormsStack />
      </div>
      <div className="max-w-[1300px] mx-auto px-4">
        <Footer />
      </div>
    </main>
  );
};

export default page;
