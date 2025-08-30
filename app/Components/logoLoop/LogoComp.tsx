import LogoLoop from "./LogoLoop";
import React from "react";

const LogoComp = () => {
  return (
    <div>
      <LogoLoop
        logos={imageLogos}
        speed={1200}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default LogoComp;

const imageLogos = [
  {
    src: "/sportsChannel/ABPNews_logo.webp",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/sportsChannel/CNN-Logo.webp",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/sportsChannel/Daco4440151.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/sportsChannel/ESPNlogos.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/sportsChannel/FanCode-Logo-2022.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/sportsChannel/SonySports_Network.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/sportsChannel/Sports18logo.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
];
