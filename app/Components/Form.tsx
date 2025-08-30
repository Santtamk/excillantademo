// Excellenta Forms Stack — Edit‑Friendly (3 Individual Forms)
// Next.js + Tailwind + Framer Motion (icons optional)
// ----------------------------------------------------
// Renders ONLY the three forms (A/B/C) one under another so you can edit each later.
// Minimal wrappers; no hero copy. Swap, remove, or customize fields as needed.
// Usage: <ExcellentaFormsStack />

import * as React from "react";

const TEAL_FROM = "from-cyan-400";
const TEAL_TO = "to-emerald-400";

// Tiny input primitives (kept local for single‑file use)
const Input = ({ label, name, className = "", ...rest }: any) => {
  const id = React.useId();
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-100">
        {label}
      </label>
      <input
        id={id}
        name={name}
        {...rest}
        className={`h-12 rounded-xl bg-white/10 px-4 text-slate-100 placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-300/80 ${className}`}
      />
    </div>
  );
};

const Textarea = ({ label, name, className = "", ...rest }: any) => {
  const id = React.useId();
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-100">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        {...rest}
        className={`min-h-[132px] rounded-xl bg-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-300/70 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-300/80 ${className}`}
      />
    </div>
  );
};

const Submit = ({ children = "Submit" }) => (
  <button
    type="submit"
    className={`h-12 w-full rounded-2xl font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus-visible:ring-2  cursor-pointer bg-[#5227ff]`}
  >
    {children}
  </button>
);

function useDummySubmit() {
  const [state, set] = React.useState<{ loading: boolean; success?: boolean }>({
    loading: false,
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 400));
    set({ loading: false, success: true });
  };
  return { state, onSubmit };
}

export default function ExcellentaFormsStack() {
  const a = useDummySubmit();

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-5xl gap-10 ">
        {/* Form A — Two‑column structure */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <h3 className="mb-4 text-4xl font-semibold text-slate-50">
            Ready to take your production beyond ordinary?
          </h3>
          <form
            onSubmit={a.onSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <Input
              label="First Name"
              name="firstName"
              placeholder="Jane"
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Smith"
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
            />
            <Input label="Phone" name="phone" placeholder="+91 98765 43210" />
            <div className="md:col-span-2">
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell us about your production…"
              />
            </div>
            <div className="md:col-span-2 bg-[#5227ff] !cursor-pointer rounded-xl">
              <Submit>Submit</Submit>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
