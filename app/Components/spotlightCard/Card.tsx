// ServiceCards — Lucide Icons (Responsive, Glass/Blue)
// Next.js + Tailwind + lucide-react
// --------------------------------------------------
// Drop this into /app/components/ServiceCards.tsx and render <ServiceCards />
// Cards are responsive, accessible, and themed to your blue/teal palette.

import * as React from "react";
import { Radio, RectangleGoggles, Boxes, Volleyball } from "lucide-react";
import SpotlightCard from "./SpotlightCardStarter";

export type Service = {
  title: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string }>;
};

const services: Service[] = [
  {
    title: "Live Streaming",
    blurb: "complete live event execution for sports, news and entertainment",
    icon: Radio,
  },
  {
    title: "Virtual & Extended Reality",
    blurb: "immersive visuals built for on‑air and in‑studio environments",
    icon: RectangleGoggles,
  },
  {
    title: "Mixed Reality (MR) and AR/VR GFX",
    blurb: "3D data‑driven overlays and in‑field graphics",
    icon: Boxes,
  },
  {
    title: "Sports & News Graphics",
    blurb: "real‑time scoreboards, interactive stats and studio graphics",
    icon: Volleyball,
  },
];

function Card({
  title,
  blurb,
  Icon,
}: {
  title: string;
  blurb: string;
  Icon: Service["icon"];
}) {
  return (
    <article className=" relative flex flex-col overflow-hidden  shadow-sm justify-between items-between p-5 h-70">
      {/* Top icon band */}
      <div className="relative grid place-items-center">
        <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br ">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent " />

      {/* Text block */}
      <div className="flex flex-1 flex-col justify-between  items-stretch text-center pt-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white">{blurb}</p>

        <div className="mt-auto pt-6">
          <button
            className="inline-flex items-center rounded-xl bg-[#5227ff] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 cursor-pointer"
            type="button"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Ambient hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-400/10 to-teal-400/10" />
      </div>
    </article>
  );
}

export default function ServiceCards() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(82, 39, 255, 1)"
              key={s.title}
            >
              <Card title={s.title} blurb={s.blurb} Icon={s.icon} />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
