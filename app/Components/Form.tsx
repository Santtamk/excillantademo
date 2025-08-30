// Excellenta Forms Stack — Edit-Friendly (3 Individual Forms)
// Next.js + Tailwind
// ----------------------------------------------------
// Renders ONLY a single form block here (A). Add B/C similarly if needed.
// Usage: <ExcellentaFormsStack />

import * as React from "react";



type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id"
> & {
  label: string;
  name: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({ label, name, className = "", ...rest }) => {
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

type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  label: string;
  name: string;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  className = "",
  ...rest
}) => {
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

type SubmitProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Submit: React.FC<SubmitProps> = ({ children = "Submit", ...rest }) => (
  <button
    type="submit"
    {...rest}
    className={`h-12 w-full rounded-2xl font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus-visible:ring-2 cursor-pointer bg-[#5227ff]`}
  >
    {children}
  </button>
);

/* ===========================
 * Demo submit handler
 * =========================== */

function useDummySubmit() {
  const [state, set] = React.useState<{ loading: boolean; success?: boolean }>({
    loading: false,
  });

  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      set({ loading: true });
      await new Promise((r) => setTimeout(r, 400));
      set({ loading: false, success: true });
    },
    []
  );

  return { state, onSubmit };
}

/* ===========================
 * Main component
 * =========================== */

export default function ExcellentaFormsStack() {
  const a = useDummySubmit();

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-5xl gap-10">
        {/* Form A — Two-column structure */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <h3 className="mb-4 text-4xl font-semibold text-slate-50">
            Ready to take your production beyond ordinary?
          </h3>

          <form
            onSubmit={a.onSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-busy={a.state.loading}
          >
            <Input
              label="First Name"
              name="firstName"
              placeholder="Jane"
              required
              autoComplete="given-name"
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Smith"
              required
              autoComplete="family-name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              autoComplete="email"
              inputMode="email"
            />
            <Input
              label="Phone"
              name="phone"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              inputMode="tel"
            />
            <div className="md:col-span-2">
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell us about your production…"
              />
            </div>

            <div className="md:col-span-2 rounded-xl">
              <Submit disabled={a.state.loading}>
                {a.state.loading ? "Submitting…" : "Submit"}
              </Submit>
            </div>

            {a.state.success && (
              <p className="md:col-span-2 text-emerald-300 text-sm mt-1">
                Thanks! We’ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
