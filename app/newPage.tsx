"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GridDistortion from "./Components/GridDistortion";

export default function HeroComponent() {
  return (
    <div className="relative">
      <div className="absolute z-10 text-white text-5xl  font-bold top-2/10 left-1/2 -translate-x-1/2 -translate-y-1/2">
        @1Stop
      </div>
      <button
        className="text-[#5D7B00] border-1 border-[#556500] text-xl  px-8 py-2 rounded-3xl
bg-[linear-gradient(95deg,#FFF_0%,rgba(255,255,255,0.69)_89.35%)]
top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10 cursor-pointer hover:scale-102
"
      >
        Go Live Now →
      </button>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background distortion (always running) */}
        <div className="  w-50 h-50">
          <GridDistortion
            imageSrc={
              "/round-surface-patch-covered-with-green-grass-isolated.svg"
            }
            grid={10}
            mouse={0.1}
            strength={0.1}
            relaxation={0.1}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
