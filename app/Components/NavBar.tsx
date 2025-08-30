// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// const navLinks = [
//   { title: "About Us", link: "/aboutUs" },
//   { title: "Our Work", link: "/ourWork" },
//   { title: "Get Involved", link: "/getInvolved" },
//   { title: "Media", link: "/media" },
//   { title: "Contact Us", link: "/contactUs" },
// ];

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div
//       className="
//      max-w-[940px] mx-auto
//     rounded-4xl pl-10
//     border border-teal-300/30
//     bg-white/10 backdrop-blur-lg shadow-lg
//     text-white dark:text-slate-900

//     "
//     >
//       {/* Fixed Header */}
//       <header
//         className={` w-full z-50 flex justify-between items-center px-3 py-3  xl:py-1 ${
//           isMenuOpen ? "bg-background text-white fixed top-0 left-0" : ""
//         }

//         `}
//       >
//         {/* Logo */}
//         <div className="cursor-pointer flex justify-center items-center text-white ">
//           <Link href="/">
//             Ex
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex">
//           <ul className="flex">
//             {navLinks.map((navLink, i) => (
//               <li key={i}>
//                 <Link
//                   href={navLink.link}
//                   className="group relative inline-block text-lg font-medium"
//                 >
//                   <span className="relative text-background/80 z-10 inline-block hover:bg-primary hover:text-white px-7 py-[0.9375rem] rounded-[2rem]">
//                     {navLink.title}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Hamburger for Mobile */}
//         <div className="lg:hidden z-50 pr-2">
//           <div
//             className={`flex flex-col gap-1 cursor-pointer transition-transform duration-300 p-3 ${
//               isMenuOpen
//                 ? "rotate-90 text-white bg-black rounded-full"
//                 : "text-background/80"
//             }`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <GiHamburgerMenu size={27} />
//           </div>
//         </div>
//       </header>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div
//           className="fixed top-[74px] left-0 w-full h-[calc(100vh-74px)]
//                bg-background/80 z-40 px-5 pb-4 lg:hidden overflow-y-auto
//                backdrop-blur-md transition-transform duration-300 ease-in-out animate-slideDown"
//         >
//           <ul className="flex flex-col justify-center items-center gap-5 py-5">
//             {navLinks.map((navLink, i) => (
//               <li key={i} className="w-full text-center">
//                 <Link
//                   href={navLink.link}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block text-sm font-medium py-2 transition-transform duration-200 hover:scale-110 hover:text-yellow-300"
//                 >
//                   <div className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-2">
//                     {navLink.title}
//                   </div>
//                 </Link>
//                 {i < navLinks.length - 1 && (
//                   <div className="w-1/2 mx-auto border-b border-white/20 mt-2"></div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { title: "About Us", link: "/aboutUs" },
  { title: "Our Work", link: "/ourWork" },
  { title: "Get Involved", link: "/getInvolved" },
  { title: "Media", link: "/media" },
  { title: "Contact Us", link: "/contactUs" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-[940px] mx-auto rounded-[28px] relative overflow-hidden border">
      {/* Glassy background with liquid glass layers */}
      {/* <div className="absolute inset-0 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"> */}
      {/* Gloss highlight */}
      {/* <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/15 to-transparent opacity-50 pointer-events-none" /> */}
      {/* Dark vignette */}
      {/* <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/20 via-transparent to-black/5 opacity-60 pointer-events-none" /> */}
      {/* </div> */}

      {/* Header Content */}
      <header className="relative z-10 w-full flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div className="cursor-pointer flex justify-center items-center text-white font-semibold text-xl">
          <Link href="/">Ex</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={navLink.link}
                  className="group relative inline-block text-lg font-medium"
                >
                  <span className="relative z-10 inline-block px-6 py-2 rounded-full text-slate-100 hover:bg-[#5227ff] hover:text-slate-900 transition">
                    {navLink.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden z-50 pr-2">
          <div
            className={`flex flex-col gap-1 cursor-pointer transition-transform duration-300 p-3 rounded-full ${
              isMenuOpen
                ? "rotate-90 text-white bg-black/40 backdrop-blur-md"
                : "text-slate-200 bg-white/5 backdrop-blur-sm"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu size={24} />
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-[74px] left-0 w-full h-[calc(100vh-74px)] bg-white/10 backdrop-blur-2xl border-t border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)] z-40 px-5 pb-4 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out animate-slideDown">
          <ul className="flex flex-col justify-center items-center gap-5 py-5">
            {navLinks.map((navLink, i) => (
              <li key={i} className="w-full text-center">
                <Link
                  href={navLink.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium py-2 transition-transform duration-200 hover:scale-110 hover:text-emerald-300"
                >
                  {navLink.title}
                </Link>
                {i < navLinks.length - 1 && (
                  <div className="w-1/2 mx-auto border-b border-white/20 mt-2"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
