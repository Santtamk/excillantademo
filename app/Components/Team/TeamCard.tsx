import React from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "/users/user5.webp",
    title: "Anjali Gupta",
    subtitle: "Executive Producer, National News Network",
    handle:
      "Excellenta transformed our election night coverage with seamless live data integration. Their team made complex results look simple and engaging on air.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },
  {
    image: "/users/user2.webp",
    title: "Ravi Patel",
    subtitle: "Managing Director, ProVision Broadcast Solutions",
    handle:
      "Excellenta is the definition of reliability. Their technical crew knows every detail, from cameras to switchers, and they never compromise on quality.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },
  {
    image: "/users/user3.webp",
    title: "Michael Tan",
    subtitle: "Director of Events, TechCorp Summit",
    handle:
      "We wanted a polished, futuristic look for our annual summit. Excellenta’s virtual production team built an XR environment that wowed our executives and clients alike.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },
  {
    image: "/users/user4.webp",
    title: "Vinit Bakshi",
    subtitle: "Senior Producer, Global Sports Channel",
    handle:
      "Working with Excellenta felt effortless. Their graphics crew delivered real-time sports visuals that kept millions of fans glued to the screen.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },

  {
    image: "/users/user6.webp",
    title: "Neeraj Sethi",
    subtitle: "Event Director, Global Beats Festival",
    handle:
      "From stage to stream, Excellenta handled everything flawlessly. The AR visuals added a whole new layer of energy for our global audience.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },
];

const TeamCard = () => {
  return (
    <div>
      <div className="text-5xl text-center pb-7 !bg-[#060010]">
        Let&apos;s see what does our client tells about us
      </div>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default TeamCard;
