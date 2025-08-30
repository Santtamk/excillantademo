import React from "react";
import Carousel from "./Carousel/Carousel";

const BroadCastSolution = () => {
  return (
    <div className="justify-center items-center flex flex-col py-10">
      <div className="text-5xl text-center pb-7">
        End-to-End Broadcast Solutions
      </div>
      <div className="pb-5">
        Whether it’s a global live event or a complex election broadcast,we
        provide everything you need from crew to equipment to deliver a flawless
        production.
      </div>
      <div>
        <Carousel
          baseWidth={900}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </div>
  );
};

export default BroadCastSolution;
