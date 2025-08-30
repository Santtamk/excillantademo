// Excellenta Hero — Unified (Aurora + Liquid Glass + Icons, 3 Layouts)
// Next.js + Tailwind + lucide-react (Framer Motion optional)
// ------------------------------------------------------------------
// Single component that combines:
//  • Layout A (two‑column), Layout B (stats + form), Layout C (centered card)
//  • Aurora gradients OR Apple‑style Liquid Glass blobs (toggle via prop)
//  • Professional Lucide icons for Form C (and usable on A/B if desired)
// Usage:
//   <ExcellentaHeroUnified layout="c" liquidGlass />
//   <ExcellentaHeroUnified layout="a" auroraStyle="diagonal" />
//   <ExcellentaHeroUnified layout="b" liquidGlass showIcons />

import * as React from "react";
import {
  ShieldCheck,
  Camera,
  Cpu,
  Sparkles,
  PhoneCall,
  UsersRound,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import ExcellentaFormsStack from "./Form";

// ---------------------------
// Props
// ---------------------------
export type ExHeroLayout = "a" | "b" | "c";
export type AuroraStyle = "radial" | "conic" | "diagonal";

export type ExcellentaHeroUnifiedProps = {
  layout?: ExHeroLayout;
  auroraStyle?: AuroraStyle;
  liquidGlass?: boolean;
  showIcons?: boolean; // shows field icons inside labels for all layouts
};

export default function ExcellentaHeroUnified({
  layout = "a",
  auroraStyle,
  liquidGlass = false,
  showIcons = false,
}: ExcellentaHeroUnifiedProps) {
  // Palette (refined teal mix)
  const TEAL_FROM = "from-cyan-400";
  const TEAL_TO = "to-emerald-400";
  const TEAL_TEXT = "text-emerald-300";

  // Inputs (inline for single-file use)
  const Input = ({ label, name, icon: Icon, className = "", ...rest }: any) => {
    const id = React.useId();
    return (
      <div className="grid gap-1">
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-100 flex items-center gap-2"
        >
          {Icon ? <Icon className="h-4 w-4 text-emerald-300" /> : null} {label}
        </label>
        <input
          id={id}
          name={name}
          {...rest}
          className={`h-12 rounded-2xl bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-300/80 ${className}`}
        />
      </div>
    );
  };
  const Textarea = ({
    label,
    name,
    icon: Icon,
    className = "",
    ...rest
  }: any) => {
    const id = React.useId();
    return (
      <div className="grid gap-1">
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-100 flex items-center gap-2"
        >
          {Icon ? <Icon className="h-4 w-4 text-emerald-300" /> : null} {label}
        </label>
        <textarea
          id={id}
          name={name}
          {...rest}
          className={`min-h-[132px] rounded-2xl bg-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-300/80 ${className}`}
        />
      </div>
    );
  };
  const Submit = ({ children = "Submit" }) => (
    <button
      type="submit"
      className={`h-12 w-full rounded-2xl bg-gradient-to-r ${TEAL_FROM} ${TEAL_TO} font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-emerald-300`}
    >
      {children}
    </button>
  );

  // simple demo submit
  const [state, set] = React.useState<{
    loading: boolean;
    success?: boolean;
    error?: string;
  }>({ loading: false });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 650));
    set({ loading: false, success: true });
    (e.currentTarget as HTMLFormElement).reset();
  };

  // Background selectors
  const auroraMap: Record<AuroraStyle, string> = {
    radial:
      "bg-[radial-gradient(ellipse_at_center,_#0b1220_0%,_#0e2a4a_32%,_#0891b2_62%,_#10b981_88%)]",
    conic:
      "bg-[conic-gradient(at_top_right,_#0b1220,_#0891b2,_#22d3ee,_#10b981,_#0b1220)]",
    diagonal:
      "bg-[linear-gradient(135deg,_#0b1220_0%,_#0e2a4a_18%,_#0891b2_54%,_#10b981_100%)]",
  };
  const chosenAurora =
    auroraMap[
      auroraStyle ||
        (layout === "a" ? "radial" : layout === "b" ? "conic" : "diagonal")
    ];

  // Liquid blob layer (conditionally rendered)
  const LiquidLayer = () => (
    <>
      <svg
        className="absolute pointer-events-none"
        width="0"
        height="0"
        aria-hidden
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -15"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ filter: "url(#goo)" }}
      >
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl animate-[float1_16s_ease-in-out_infinite]" />
        <div className="absolute right-[-8%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-emerald-400/30 blur-3xl animate-[float2_18s_ease-in-out_infinite]" />
        <div className="absolute left-[20%] bottom-[-12%] h-[22rem] w-[22rem] rounded-full bg-sky-300/25 blur-3xl animate-[float3_20s_ease-in-out_infinite]" />
      </div>
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(8%, 6%) scale(1.08);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-6%, -4%) scale(1.05);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(4%, -6%) scale(1.06);
          }
        }
      `}</style>
    </>
  );

  // Card wrapper for forms
  const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
    className = "",
    children,
  }) => (
    <div
      className={`relative rounded-[28px] border border-white/15 bg-white/10 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-white/15 to-transparent opacity-60" />
      {children}
    </div>
  );

  // Form icons toggle
  const maybeIcon = (Icon: any) => (showIcons ? Icon : undefined);

  // Render
  return (
    <section className={`relative overflow-hidden ${chosenAurora}`}>
      {liquidGlass ? <LiquidLayer /> : null}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%,transparent_60%,rgba(255,255,255,0.05))]" /> */}

      {/* Layouts */}
      {layout === "a" && (
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="grid content-start gap-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
              Ready to take your production beyond ordinary?
            </h1>
            <p className="text-slate-200/85">
              When you reach out, here’s what you can expect.
            </p>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${TEAL_FROM} ${TEAL_TO} text-slate-900`}
                >
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-[15px] text-slate-100/95">
                  Custom solutions — tailored for your event or brand.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${TEAL_FROM} ${TEAL_TO} text-slate-900`}
                >
                  <Cpu className="h-5 w-5" />
                </span>
                <p className="text-[15px] text-slate-100/95">
                  Next‑gen tech — AR, VR, XR, broadcast graphics.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${TEAL_FROM} ${TEAL_TO} text-slate-900`}
                >
                  <Camera className="h-5 w-5" />
                </span>
                <p className="text-[15px] text-slate-100/95">
                  Expert crew — directors, camera & tech specialists.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${TEAL_FROM} ${TEAL_TO} text-slate-900`}
                >
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="text-[15px] text-slate-100/95">
                  Flawless delivery — from setup to live broadcast.
                </p>
              </div>
            </div>
            <p className="max-w-prose text-sm text-slate-200/70">
              No matter the size of your event, our team is here to make it
              unforgettable.
            </p>
          </div>

          <ExcellentaFormsStack />
        </div>
      )}
    </section>
  );
}
