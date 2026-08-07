import type { ReactNode } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CircleDollarSign,
  Clock,
  Megaphone,
  MousePointerClick,
  Package,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  XCircle,
} from "lucide-react";
import HeroApprovalAnimation from "@/components/HeroApprovalAnimation";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendar.app.google/fFWpKufRhdUsmRkp6";

const ecommerceLoops = [
  {
    area: "Operations",
    icon: Package,
    promise: "Keeps store operations moving",
    examples: [
      "Inventory and stockout risk checks",
      "Order, support, and fulfillment routing",
      "Product page and launch QA",
      "Margin and exception escalations",
    ],
  },
  {
    area: "Marketing",
    icon: Megaphone,
    promise: "Turns signals into campaign action",
    examples: [
      "Campaign and creative checks",
      "Email and SMS draft preparation",
      "Offer, audience, and product research",
      "Performance anomaly follow-through",
    ],
  },
  {
    area: "Sales & Retention",
    icon: ShoppingCart,
    promise: "Moves revenue loops without manual chasing",
    examples: [
      "Abandoned cart and replenishment moves",
      "High-intent customer follow-up",
      "Upsell and cross-sell opportunities",
      "Churn, LTV, and win-back signals",
    ],
  },
];

const ecommercePains = [
  {
    title: "Revenue leaks before the dashboard catches up",
    desc: "A bestseller runs low, a promo underperforms, a flow breaks, CAC jumps, or a product page issue quietly costs sales before anyone acts.",
    icon: Bell,
  },
  {
    title: "The founder or growth lead becomes the workflow",
    desc: "Shopify, Klaviyo, Meta, Amazon, Gorgias, sheets, Slack, and reports all contain pieces of the truth, but a human still has to connect the dots.",
    icon: MousePointerClick,
  },
  {
    title: "The stack gets bigger, but decisions stay slow",
    desc: "More tools create more alerts and more tabs. They do not automatically decide what to draft, update, pause, launch, or escalate.",
    icon: CircleDollarSign,
  },
];

const mechanism = [
  {
    step: "01",
    title: "Map ecommerce loops",
    desc: "We identify the repetitive operating loops across store ops, marketing, and sales where late action costs revenue, margin, or customer trust.",
  },
  {
    step: "02",
    title: "Connect or simplify the stack",
    desc: "We keep the tools worth keeping and replace the ones that only exist to move data, chase alerts, or prepare manual updates.",
  },
  {
    step: "03",
    title: "Run supervised work",
    desc: "AI watches real store signals, gathers context, drafts next actions, updates routine systems, and shows where approval is needed.",
  },
  {
    step: "04",
    title: "Escalate judgment",
    desc: "Margin, brand, customer experience, pricing, and campaign calls go to your team with context and a recommended next move.",
  },
];

const firstThreeDays = [
  {
    day: "Day 0",
    title: "Ecommerce Ops Map",
    desc: "We choose one high-leverage store, marketing, or revenue loop where automation can create a visible win fast.",
  },
  {
    day: "Day 1",
    title: "Stack, access, and rules",
    desc: "We connect the minimum viable systems, remove redundant handoffs, and define approval boundaries around customers, brand, and money.",
  },
  {
    day: "Day 2",
    title: "Supervised live store run",
    desc: "The system watches real ecommerce work, drafts actions, and shows exactly where it should act or ask for approval.",
  },
  {
    day: "Day 3",
    title: "First loop live",
    desc: "One ecommerce loop is live with logs, review flow, owner handoff, and a plan for the next loop.",
  },
];

const proofCards = [
  {
    label: "Built and sold",
    title: "AI-native service operations",
    result: "250K+ emails/week, 92% production time saved",
    desc: "A repeatable workflow turned into an AI-run operating system: source discovery, scoring, drafting, review, and delivery across 20+ publications.",
  },
  {
    label: "Ecommerce growth",
    title: "Automation around real revenue loops",
    result: "$10M+ in client revenue influenced",
    desc: "Lifecycle email, inventory alerts, campaign checks, and growth workflows for brands where missed signals directly hit revenue.",
  },
  {
    label: "Operator background",
    title: "Systems that cannot casually fail",
    result: "Enterprise ops experience at HP and Akamai",
    desc: "The point is not another prompt pack. It is an operating layer with boundaries, approvals, logs, and maintenance.",
  },
];

const fit = [
  "You run a DTC, Shopify, Amazon, marketplace, or ecommerce brand with repeatable weekly ops and growth work.",
  "Your team still depends on manual checking across storefront, ad, lifecycle, support, inventory, sheets, or reporting tools.",
  "You want AI to move routine work forward while humans approve margin, brand, customer, and campaign decisions.",
];

const notFit = [
  "You want a generic chatbot, prompt pack, or another dashboard.",
  "The store is too early and there is no repeatable order, campaign, inventory, or lifecycle loop yet.",
  "Nobody can own access, approvals, and feedback during the first rollout.",
];

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl border border-[hsl(40,12%,89%)] bg-[hsl(48,25%,97%)]", className)}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider", className)}>
    {children}
  </span>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}) => {
  const styles =
    variant === "primary"
      ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200"
      : "border-2 border-[hsl(40,12%,89%)] bg-white/60 hover:border-emerald-500 text-slate-800";

  return (
    <button
      onClick={onClick}
      className={cn("inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-[1.02] active:scale-[0.98]", styles, className)}
    >
      {children}
    </button>
  );
};

export default function RunItSelfEcommerce() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[hsl(50,33%,98%)] text-slate-900 selection:bg-emerald-100">
      <style>{`
        @keyframes ris-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ris-fade-up { animation: ris-fade-up 0.7s ease-out both; }
      `}</style>

      <nav className="fixed left-1/2 top-5 z-40 hidden w-[95%] max-w-5xl -translate-x-1/2 md:block">
        <div className="flex items-center justify-between rounded-full border border-[hsl(40,12%,89%)] bg-white/85 px-4 py-2 shadow-xl backdrop-blur-md">
          <a href="/" className="flex items-center gap-3 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white">
              RIS
            </div>
            <span className="font-extrabold">RunItSelf</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo("ecommerce-layer")} className="transition-colors hover:text-emerald-600">
              Ecommerce Layer
            </button>
            <button onClick={() => scrollTo("control")} className="transition-colors hover:text-emerald-600">
              Control
            </button>
            <button onClick={() => scrollTo("proof")} className="transition-colors hover:text-emerald-600">
              Proof
            </button>
            <button onClick={() => scrollTo("fit")} className="transition-colors hover:text-emerald-600">
              Fit
            </button>
          </div>
          <Button className="px-5 py-2 text-sm" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Book Ecommerce Ops Map
          </Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-2 lg:pt-36">
        <div className="space-y-8 ris-fade-up">
          <Badge className="bg-emerald-100 text-emerald-700">AI operating layer for ecommerce brands</Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              Want your store to move before your team starts checking dashboards?
            </h1>
            <div className="space-y-4 text-xl leading-relaxed text-slate-600">
              <p>
                RunItSelf keeps the tools worth keeping, replaces tools that only move ecommerce work around, and runs repetitive loops across operations, marketing, and sales.
              </p>
              <p>
                Your team stops reacting late to stockouts, campaign drops, stale customers, and missed follow-ups. You approve the moves that affect margin, customers, and brand.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => window.open(BOOKING_URL, "_blank")}>
              Book Your Ecommerce Ops Map <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => scrollTo("ecommerce-layer")}>
              See What Can Run Itself
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-5 border-t border-[hsl(40,12%,89%)] pt-8">
            {[
              ["3 days", "first live loop"],
              ["3 areas", "ops, marketing, sales"],
              ["Approval-first", "margin control"],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="text-2xl font-black text-emerald-600">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroApprovalAnimation />
        </div>
      </section>

      <section className="border-y border-[hsl(40,12%,89%)] bg-white px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            ["Not another reporting tool", "The point is to move work before the weekly dashboard explains what already went wrong."],
            ["Built around margin and brand control", "Routine work can run. Customer, brand, campaign, and margin decisions stay with your team."],
            ["Reduces tool sprawl", "Keep the stack that creates leverage. Replace the parts that only create tabs, alerts, and manual checking."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl bg-[hsl(48,25%,97%)] p-5">
              <p className="font-black">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge className="mb-4 bg-red-50 text-red-600">The ecommerce problem</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Your brand is not missing more alerts. It is missing faster follow-through.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Ecommerce teams rarely lose money because nobody made a report. They lose it because inventory, campaigns, lifecycle, and customer issues depend on humans noticing everything on time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ecommercePains.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="p-8 transition-all hover:border-red-200 hover:shadow-xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{card.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="ecommerce-layer" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">What RunItSelf runs for ecommerce</Badge>
            <h2 className="text-4xl font-black md:text-5xl">One operating layer across store ops, marketing, and revenue loops.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              The system handles the repeatable ecommerce loops that create lost sales, margin leakage, and founder dependency, then escalates decisions that need judgment.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ecommerceLoops.map((loop) => {
              const Icon = loop.icon;
              return (
                <Card key={loop.area} className="p-8 transition-all hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">{loop.area}</p>
                  <h3 className="mt-2 text-2xl font-black">{loop.promise}</h3>
                  <ul className="mt-6 space-y-3">
                    {loop.examples.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-600">How it works</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Map the loop. Run the work. Escalate the judgment.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            The goal is not an autonomous store fantasy. It is an operating layer where AI handles repeatable work and your team keeps control over customers, brand, margin, and strategy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {mechanism.map((item) => (
            <Card key={item.step} className="p-6">
              <p className="font-mono text-sm font-black text-emerald-600">{item.step}</p>
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="control" className="bg-emerald-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ShieldCheck className="mb-6 h-12 w-12 text-emerald-300" />
            <h2 className="text-4xl font-black md:text-5xl">AI moves routine ecommerce work. Your team approves what touches margin, customers, or brand.</h2>
            <p className="mt-5 text-lg leading-relaxed text-emerald-100/80">
              Every rollout starts with approval-first boundaries. Routine checks, drafts, and updates can run. Pricing, campaign changes, customer-sensitive moves, and brand calls stay in human hands.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Run automatically", "Routine checks, context gathering, handoff updates, low-risk reminders, and data movement between systems."],
              ["Prepare for approval", "Campaign recommendations, customer messages, lifecycle drafts, product updates, and margin-sensitive moves."],
              ["Escalate with context", "When the system is uncertain, it sends the signal, evidence, and recommended next step."],
            ].map(([title, desc], index) => (
              <div key={title} className={cn("rounded-2xl border p-6", index === 0 ? "border-emerald-400 bg-emerald-900" : "border-emerald-800 bg-emerald-950")}>
                <p className="font-black">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">First live ecommerce loop in 3 days</Badge>
            <h2 className="text-4xl font-black md:text-5xl">Start where revenue leaks. Prove it. Expand from there.</h2>
          </div>
          <div className="space-y-5">
            {firstThreeDays.map((item, index) => (
              <div key={item.day} className="relative flex gap-6">
                {index < firstThreeDays.length - 1 && (
                  <div className="absolute left-[23px] top-12 h-[calc(100%-16px)] w-0.5 bg-gradient-to-b from-emerald-300 to-transparent" />
                )}
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-200 bg-white font-black text-emerald-600">
                  {index + 1}
                </div>
                <Card className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-slate-100 text-slate-600">{item.day}</Badge>
                    <h3 className="text-xl font-black">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-600">Proof of systems thinking</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Built from real operating work, not AI theater.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {proofCards.map((card) => (
            <Card key={card.title} className="overflow-hidden transition-all hover:shadow-xl">
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="p-8">
                <Badge className="mb-5 bg-emerald-100 text-emerald-700">{card.label}</Badge>
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-4 text-2xl font-black text-emerald-600">{card.result}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{card.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="fit" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Card className="p-8">
            <CheckCircle2 className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">Good fit if...</h2>
            <ul className="mt-6 space-y-4">
              {fit.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <XCircle className="mb-5 h-10 w-10 text-red-500" />
            <h2 className="text-3xl font-black">Not a fit if...</h2>
            <ul className="mt-6 space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <Clock className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">The Ecommerce Ops Map has one job.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Find the first ecommerce loop that should stop depending on manual human checking.
            </p>
            <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm font-semibold leading-relaxed text-emerald-800">
              If there is no credible path to a useful first loop, you leave with the map. No build pitch.
            </div>
          </Card>
          <Card className="p-8">
            <BarChart3 className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">What you leave with</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Your top 2-3 automatable ecommerce loops",
                "The first loop to deploy",
                "What tools to keep, replace, or connect",
                "Customer and margin approval boundaries",
                "Expected revenue protected or time freed",
                "A 3-day rollout path",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="cta" className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-800 p-10 text-center text-white md:p-20">
          <Sparkles className="mx-auto mb-8 h-16 w-16 text-emerald-100/40" />
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Find the first ecommerce loop your team should stop checking manually.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">
            Leave with the first loop to automate, the systems it needs, and the approval rules around margin, customers, and brand-sensitive work.
          </p>
          <Button className="mt-8 bg-white px-10 py-5 text-lg text-emerald-900 shadow-none hover:bg-slate-100" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Book Your Ecommerce Ops Map <ArrowUpRight size={20} />
          </Button>
          <p className="mt-5 text-sm font-medium text-emerald-100/80">30 minutes. We map the first store, marketing, or revenue loop AI can run for your ecommerce brand in 3 days.</p>
        </div>
      </section>

      <footer className="border-t border-[hsl(40,12%,89%)] bg-[hsl(50,33%,96%)] px-6 py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-[10px] font-black text-white">
              RIS
            </div>
            <span className="font-bold text-slate-700">RunItSelf for Ecommerce by Maciej Marek</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="transition-colors hover:text-emerald-600">Main Page</a>
            <a href="/agencies" className="transition-colors hover:text-emerald-600">Agencies</a>
            <a href="/privacy" className="transition-colors hover:text-emerald-600">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-emerald-600">Terms of Service</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[hsl(40,12%,89%)] bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
        <Button className="w-full py-3" onClick={() => window.open(BOOKING_URL, "_blank")}>
          Book Ecommerce Ops Map <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
