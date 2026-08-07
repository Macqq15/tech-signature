import type { ReactNode } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Database,
  FileLock2,
  Server,
  ShieldCheck,
  Sparkles,
  UserRoundX,
  Users,
  XCircle,
} from "lucide-react";
import HeroApprovalAnimation from "@/components/HeroApprovalAnimation";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendar.app.google/fFWpKufRhdUsmRkp6";

// Sentences the buyer actually says out loud, not a description of their problem.
const mondayQuotes = [
  "Where's the latest version?",
  "Check Slack. Or your inbox.",
  "Who changed this?",
  "Is this still current?",
  "I thought we had a process for this.",
  "I just need to paste it into the spreadsheet.",
];

const dataSources = [
  "Gmail",
  "Spreadsheets",
  "CRM",
  "Slack",
  "Invoicing",
  "Drive",
  "Shopify",
  "a note on someone's desk",
];

const differentiators = [
  {
    title: "I start with data, not with AI",
    desc: "An agent running on a mess just reproduces the mess faster. First one place where everything agrees.",
  },
  {
    title: "Personal data never reaches the model",
    desc: "Names, emails, phone numbers and contract references are swapped out before anything is sent. The model sees the process, not your customers.",
  },
  {
    title: "Your stack gets thinner, not thicker",
    desc: "What earns its place stays. What exists only so someone can move data from one tool to another goes.",
  },
];

const painCards = [
  {
    title: "The same data lives in five places",
    desc: "The CRM says one thing, the spreadsheet another, the inbox a third. Before anyone can decide anything, they first have to work out which version to trust.",
    icon: Database,
  },
  {
    title: "The company runs on one person",
    desc: "You or your best operator keep reminding, checking and correcting the same things. When that person takes a week off, the process stops.",
    icon: Users,
  },
  {
    title: "Another hire isn't the fix",
    desc: "A new coordinator buys some time. The operating model still depends on somebody remembering and clicking.",
    icon: Clock,
  },
];

const mechanism = [
  {
    step: "01",
    title: "Operations workshop, 90 minutes",
    desc: "We sit down over your actual tools and find the places where your data disagrees with itself. No fee.",
  },
  {
    step: "02",
    title: "One base instead of five",
    desc: "What works stays. Everything else starts writing to one place. The spreadsheet stops being a database.",
  },
  {
    step: "03",
    title: "Anonymisation before AI",
    desc: "Names, emails, phone numbers and contract references are swapped before anything reaches a model. You get the procedure in writing.",
  },
  {
    step: "04",
    title: "Now automation",
    desc: "On a process that holds together, I build the automation and the agents. Decisions about money and customers stay with you.",
  },
];

const privacyCards = [
  {
    icon: UserRoundX,
    title: "What gets swapped",
    desc: "First names, surnames, emails, phone numbers, addresses, contract and invoice references. The model sees \"Customer 41\", not John Baker.",
  },
  {
    icon: ShieldCheck,
    title: "Where it happens",
    desc: "The swap runs on your side, before anything goes anywhere. Originals stay where they were.",
  },
  {
    icon: FileLock2,
    title: "What you can show",
    desc: "A record of which data moves where and what is anonymised. Enough for an auditor, and enough for a client who asks what you do with their data.",
  },
];

const workshopSteps = [
  {
    phase: "Tools",
    title: "What the business actually runs on",
    desc: "Not what you pay licences for. Including the spreadsheets and inboxes holding half the process.",
  },
  {
    phase: "Work",
    title: "Where work waits on a human",
    desc: "Handoffs that stall until someone clicks, and signals nobody sees in time.",
  },
  {
    phase: "Data",
    title: "Where your data disagrees with itself",
    desc: "Three places where two systems say different things, and which one has to be fixed first.",
  },
  {
    phase: "Privacy",
    title: "What needs anonymising",
    desc: "Which personal data moves through those processes and what has to be swapped before AI touches it.",
  },
];

const workshopOutput = [
  "The list of tools your data actually lives in",
  "The three places where it disagrees with itself most",
  "An estimate of hours per week lost to moving it by hand",
  "Which personal data needs anonymising before AI",
  "The first process worth automating, and what comes before it",
];

const proofCards = [
  {
    label: "Built and sold",
    title: "Newsletter operations on automation",
    result: "250K emails a week, two people running it",
    desc: "A newsletter agency turned into a system that ran itself. Sourcing, scoring, drafting, review and delivery across 20+ titles, with production time down from 12 hours to 45 minutes. Sold in February 2026.",
  },
  {
    label: "Growth systems",
    title: "Ecommerce automation",
    result: "$10M+ in client revenue",
    desc: "Lifecycle email, inventory alerts and growth processes for brands where a missed signal shows up in revenue the same week.",
  },
  {
    label: "Where the order comes from",
    title: "Data reconciliation at HP and Akamai",
    result: "Years on invoices, contracts and suppliers",
    desc: "In those environments a mismatch between two systems costs real money and somebody has to find it. I did that for a living. That is where the rule comes from: the data agrees first, then we automate.",
  },
  {
    label: "Straight answer",
    title: "I'm one person, not an agency",
    result: "I take two or three builds at a time",
    desc: "There is no sales team and no consultant who hands the work to a junior. You talk to me and I am the one inside your data. If I don't have capacity I will say so on the first call instead of stringing you along.",
  },
];

const fit = [
  "You run a service or trading business of 10 to 200 people and the same data sits in several places.",
  "Someone on your team copies data between tools every single day.",
  "You have considered AI but shelved it over client or personal data.",
];

const notFit = [
  "You want a chatbot, a prompt pack or another dashboard.",
  "You don't yet have a process anyone could write down. There is nothing to tidy.",
  "Nobody can spend two weeks answering questions and granting access.",
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

export default function RunItSelfHome() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  // Reassert the English document metadata: /pl swaps both while it is mounted,
  // and this is a SPA, so a client-side navigation back here would keep them.
  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = "RunItSelf | Data First, Then Automation";
  }, []);

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
          <div className="flex items-center gap-3 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white">
              RIS
            </div>
            <span className="font-extrabold">RunItSelf</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo("problem")} className="transition-colors hover:text-emerald-600">
              Problem
            </button>
            <button onClick={() => scrollTo("privacy")} className="transition-colors hover:text-emerald-600">
              Privacy
            </button>
            <button onClick={() => scrollTo("workshop")} className="transition-colors hover:text-emerald-600">
              Workshop
            </button>
            <button onClick={() => scrollTo("proof")} className="transition-colors hover:text-emerald-600">
              Proof
            </button>
            <a href="/pl" className="text-slate-400 transition-colors hover:text-emerald-600" hrefLang="pl">
              PL
            </a>
          </div>
          <Button className="px-5 py-2 text-sm" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Book the workshop
          </Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-2 lg:pt-36">
        <div className="space-y-8 ris-fade-up">
          <Badge className="bg-emerald-100 text-emerald-700">Data first, then automation</Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              "Where's the latest version? Check Slack. Or your inbox."
            </h1>
            <div className="space-y-4 text-xl leading-relaxed text-slate-600">
              <p>
                Your company loses hours to that every week and nobody counts them.
              </p>
              <p>
                Before you let AI anywhere near the business, the data has to sit in one place and it has to be safe to use. That is the job.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => window.open(BOOKING_URL, "_blank")}>
              Book the workshop <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => scrollTo("workshop")}>
              See what comes out of it
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-5 border-t border-[hsl(40,12%,89%)] pt-8">
            {[
              ["90 minutes", "workshop, no fee"],
              ["One source of truth", "instead of a spreadsheet, an inbox and a CRM"],
              ["No personal data", "the model never sees a real name"],
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

      <section className="border-y border-[hsl(40,12%,89%)] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black md:text-4xl">You hear this in your own company every week.</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {mondayQuotes.map((quote, index) => (
              <p
                key={quote}
                className={cn(
                  "rounded-xl bg-[hsl(48,25%,97%)] px-5 py-4 text-lg text-slate-700",
                  index % 2 === 1 && "sm:translate-x-4"
                )}
              >
                "{quote}"
              </p>
            ))}
          </div>
          <p className="mt-10 text-center text-lg leading-relaxed text-slate-500">
            Every one of those costs a few minutes. A dozen times a day, across a year, that is a full-time hire nobody made.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {dataSources.map((source) => (
            <span key={source} className="rounded-lg border border-[hsl(40,12%,89%)] bg-white px-4 py-2 text-sm font-bold text-slate-600">
              {source}
            </span>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="rounded-xl bg-emerald-500 px-8 py-4 text-lg font-black text-white shadow-lg shadow-emerald-200">
            one source of truth
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-500">
          I build the data layer that connects them. Only then do automation and AI have something solid to stand on.
        </p>
      </section>

      <section className="border-y border-[hsl(40,12%,89%)] bg-white px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-xl bg-[hsl(48,25%,97%)] p-5">
              <p className="font-black">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge className="mb-4 bg-red-50 text-red-600">The real problem</Badge>
          <h2 className="text-4xl font-black md:text-5xl">You don't need more tools. You need one place where everything agrees.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            You have a CRM, spreadsheets, an inbox, Slack and an invoicing system. Each one knows a piece of the truth. Nobody knows all of it, so someone reassembles it by hand every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painCards.map((card) => {
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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-600">How it works</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Foundation, then automation, then AI. In that order.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Most AI rollouts go badly because they start with a tool. I start by making sure the system knows what is actually happening in the business.
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

      <section id="privacy" className="bg-emerald-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <ShieldCheck className="mb-6 h-12 w-12 text-emerald-300" />
            <h2 className="text-4xl font-black md:text-5xl">Your clients' data never leaves your building in a form that identifies anyone.</h2>
            <p className="mt-5 text-lg leading-relaxed text-emerald-100/80">
              You hold data your clients trusted you with. That is the most common reason a serious company puts AI off for another year. So it is a step in the process, not a footnote in the contract.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {privacyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-2xl border border-emerald-800 bg-emerald-900/40 p-6">
                  <Icon className="mb-4 h-7 w-7 text-emerald-300" />
                  <p className="font-black">{card.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">{card.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-emerald-400 bg-emerald-900 p-6">
            <Server className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
            <p className="leading-relaxed text-emerald-50">
              If the data cannot leave the building even anonymised, the model can run locally on your hardware. That is a separate project with a separate budget, so we only go there when it is genuinely required.
            </p>
          </div>
        </div>
      </section>

      <section id="workshop" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">First step, no fee</Badge>
            <h2 className="text-4xl font-black md:text-5xl">We start with 90 minutes of real work, not with a build.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              You leave with something concrete even if you never buy anything.
            </p>
          </div>
          <div className="space-y-5">
            {workshopSteps.map((item, index) => (
              <div key={item.phase} className="relative flex gap-6">
                {index < workshopSteps.length - 1 && (
                  <div className="absolute left-[23px] top-12 h-[calc(100%-16px)] w-0.5 bg-gradient-to-b from-emerald-300 to-transparent" />
                )}
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-200 bg-white font-black text-emerald-600">
                  {index + 1}
                </div>
                <Card className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-slate-100 text-slate-600">{item.phase}</Badge>
                    <h3 className="text-xl font-black">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <Clock className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">The workshop has one job.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              To show where the business loses time moving data by hand, and what to fix first.
            </p>
            <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm font-semibold leading-relaxed text-emerald-800">
              If the workshop shows there is nothing worth automating at your place, I will say so and we stop there.
            </div>
          </Card>
          <Card className="p-8">
            <BarChart3 className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">What you walk away with</h2>
            <div className="mt-6 space-y-4">
              {workshopOutput.map((item) => (
                <div key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge className="mb-4 bg-slate-100 text-slate-600">Proof</Badge>
          <h2 className="text-4xl font-black md:text-5xl">How I know what this looks like from the inside.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
            <h2 className="text-3xl font-black">This is for you if...</h2>
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
            <h2 className="text-3xl font-black">This isn't for you if...</h2>
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

      <section id="cta" className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-800 p-10 text-center text-white md:p-20">
          <Sparkles className="mx-auto mb-8 h-16 w-16 text-emerald-100/40" />
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Let's find where your data disagrees with itself.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">
            You leave with a list of your tools, an estimate of the hours you are losing, the personal data that needs anonymising, and the first process to fix.
          </p>
          <Button className="mt-8 bg-white px-10 py-5 text-lg text-emerald-900 shadow-none hover:bg-slate-100" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Book the workshop <ArrowUpRight size={20} />
          </Button>
          <p className="mt-5 text-sm font-medium text-emerald-100/80">
            90 minutes, online. I will ask for your tool list beforehand so we don't spend half the session on it.
          </p>
        </div>
      </section>

      <footer className="border-t border-[hsl(40,12%,89%)] bg-[hsl(50,33%,96%)] px-6 py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-[10px] font-black text-white">
              RIS
            </div>
            <span className="font-bold text-slate-700">RunItSelf, Maciej Marek</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-emerald-600">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-emerald-600">Terms</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[hsl(40,12%,89%)] bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
        <Button className="w-full py-3" onClick={() => window.open(BOOKING_URL, "_blank")}>
          Book the workshop <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
