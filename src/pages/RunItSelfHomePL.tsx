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
  Handshake,
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Workflow,
  XCircle,
} from "lucide-react";
import HeroApprovalAnimation from "@/components/HeroApprovalAnimation";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendar.app.google/fFWpKufRhdUsmRkp6";

const operatingLoops = [
  {
    area: "Operacje",
    icon: Workflow,
    promise: "Pilnuje, zeby robota szla dalej",
    examples: [
      "Przypomnienia i przekazywanie zadan",
      "Wychwytywanie ryzyka u klienta",
      "Kroki wdrozenia nowego klienta",
      "Eskalacja zanim praca stanie",
    ],
  },
  {
    area: "Marketing",
    icon: Megaphone,
    promise: "Lapie sygnaly i przygotowuje ruch",
    examples: [
      "Kontrola kampanii i kreacji",
      "Research grup i ofert",
      "Szkice tresci i maili",
      "Anomalie w wynikach",
    ],
  },
  {
    area: "Sprzedaz",
    icon: Handshake,
    promise: "Przesuwa pipeline bez reczneego pilnowania",
    examples: [
      "Research leadow",
      "Spersonalizowany outreach",
      "Szkice ofert",
      "Alerty o stojacych dealach",
    ],
  },
];

const painCards = [
  {
    title: "Praca czeka, az ktos zauwazy",
    desc: "Ryzyko u klienta, spadek kampanii, lead bez odpowiedzi, zgubione przekazanie. Szkoda zaczyna sie zanim cokolwiek zaswieci na czerwono.",
    icon: Bell,
  },
  {
    title: "Najlepsi ludzie staja sie procesem",
    desc: "Wlasciciel albo najlepszy operator ciagle akceptuje, przypomina, sprawdza, poprawia i ratuje te same petle.",
    icon: MousePointerClick,
  },
  {
    title: "Rekrutacja dodaje rak, nie dzwigni",
    desc: "Kolejny koordynator kupuje czas, ale model dalej stoi na tym, ze czlowiek popycha kazdy krok.",
    icon: CircleDollarSign,
  },
];

const mechanism = [
  {
    step: "01",
    title: "Mapujemy petle",
    desc: "Znajdujemy powtarzalne petle w operacjach, marketingu i sprzedazy, gdzie spoznione dzialanie kosztuje czas albo pieniadze.",
  },
  {
    step: "02",
    title: "Podlaczamy albo wymieniamy narzedzia",
    desc: "Agenci wpinaja sie w systemy warte zostawienia i zastepuja te, ktore istnieja tylko po to, zeby przeklejac dane i pilnowac statusow.",
  },
  {
    step: "03",
    title: "Wykonuja robote",
    desc: "Obserwuja sygnaly, zbieraja kontekst, przygotowuja nastepny ruch, aktualizuja systemy i popychaja bezpieczne petle do przodu.",
  },
  {
    step: "04",
    title: "Oddaja decyzje",
    desc: "Pieniadze, klienci, strategia, ceny i wrazliwe sprawy trafiaja do Pana z kontekstem i rekomendacja.",
  },
];

const proofCards = [
  {
    label: "Zbudowane i sprzedane",
    title: "Operacje newsletterowe oparte na AI",
    result: "250 tys. maili tygodniowo, 2 osoby obslugi",
    desc: "Agencja newsletterowa zamieniona w system, ktory dzialal sam. Wyszukiwanie zrodel, ocena, pisanie, review i wysylka dla ponad 20 tytulow. Sprzedana w lutym 2026.",
  },
  {
    label: "Systemy wzrostu",
    title: "Automatyzacja w e-commerce",
    result: "Ponad 10 mln USD przychodu klientow",
    desc: "Maile cyklu zycia, alerty magazynowe, kontrola kampanii i procesy wzrostu dla marek, w ktorych przegapiony sygnal od razu widac w przychodzie.",
  },
  {
    label: "Doswiadczenie operacyjne",
    title: "Systemy, ktore nie moga po prostu paść",
    result: "Operacje i zakupy w HP oraz Akamai",
    desc: "Nie chodzi o kolejny sprytny prompt, tylko o warstwe operacyjna z granicami, akceptacjami i utrzymaniem.",
  },
];

const firstThreeDays = [
  {
    day: "Dzien 0",
    title: "Mapa operacyjna AI",
    desc: "Wybieramy jedna petle, w ktorej automatyzacja da widoczny efekt szybko.",
  },
  {
    day: "Dzien 1",
    title: "Narzedzia, dostepy i kontekst",
    desc: "Podlaczamy tylko to, co konieczne, upraszczamy zbedne przekazania i uczymy agenta Panskich zasad, tonu i granic akceptacji.",
  },
  {
    day: "Dzien 2",
    title: "Agent pracuje pod nadzorem",
    desc: "Agent obserwuje prawdziwa prace, przygotowuje dzialania i pokazuje dokladnie, gdzie potrzebuje zgody czlowieka.",
  },
  {
    day: "Dzien 3",
    title: "Pierwsza petla na produkcji",
    desc: "Jeden agent dziala na prawdziwej petli, z logami, sciezka review i planem rozszerzenia.",
  },
];

const fit = [
  "Prowadzi Pan firme uslugowa, w ktorej operacje, marketing albo sprzedaz stoja na recznym pilnowaniu.",
  "Ma Pan powtarzalne procesy i dostep do narzedzi, albo jest gotow uproscic stack wokol pracy.",
  "Chce Pan automatyzacji z akceptacja czlowieka, a nie czarnej skrzynki podejmujacej ryzykowne decyzje sama.",
];

const notFit = [
  "Szuka Pan chatbota, paczki promptow albo kolejnego dashboardu.",
  "Nie ma jeszcze powtarzalnego procesu, ktory da sie zautomatyzowac.",
  "Nikt w zespole nie moze wziac na siebie dostepow, akceptacji i feedbacku przy pierwszym wdrozeniu.",
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

export default function RunItSelfHomePL() {
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
          <div className="flex items-center gap-3 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white">
              RIS
            </div>
            <span className="font-extrabold">RunItSelf</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo("operating-layer")} className="transition-colors hover:text-emerald-600">
              Warstwa
            </button>
            <button onClick={() => scrollTo("control")} className="transition-colors hover:text-emerald-600">
              Kontrola
            </button>
            <button onClick={() => scrollTo("proof")} className="transition-colors hover:text-emerald-600">
              Dowody
            </button>
            <button onClick={() => scrollTo("fit")} className="transition-colors hover:text-emerald-600">
              Dopasowanie
            </button>
          </div>
          <Button className="px-5 py-2 text-sm" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Umow mape operacyjna
          </Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-2 lg:pt-36">
        <div className="space-y-8 ris-fade-up">
          <Badge className="bg-emerald-100 text-emerald-700">Warstwa operacyjna AI dla firm uslugowych</Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              Chce Pan, zeby firma dzialala, zanim Pan sie zaloguje?
            </h1>
            <div className="space-y-4 text-xl leading-relaxed text-slate-600">
              <p>
                RunItSelf podlacza sie do narzedzi wartych zostawienia, zastepuje te, ktore tylko przesuwaja prace, i prowadzi powtarzalne petle w operacjach, marketingu i sprzedazy.
              </p>
              <p>
                Zespol przestaje reagowac za pozno. Pan akceptuje gotowe, lepsze ruchy.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => window.open(BOOKING_URL, "_blank")}>
              Umow mape operacyjna <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => scrollTo("operating-layer")}>
              Zobacz, co moze dzialac samo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-5 border-t border-[hsl(40,12%,89%)] pt-8">
            {[
              ["3 dni", "pierwszy agent na produkcji"],
              ["3 petle", "operacje, marketing, sprzedaz"],
              ["Akceptacja", "kontrola domyslnie po Panskiej stronie"],
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
            ["To nie kolejny dashboard", "Agenci popychaja prace do przodu, nie tylko streszczaja, co juz sie stalo."],
            ["Zbudowane wokol akceptacji", "AI prowadzi bezpieczne petle, a decyzje o pieniadzach, klientach i strategii oddaje Panu."],
            ["Trzyma stack chudy", "Zostaje to, co dziala. Wypada to, co istnieje tylko dlatego, ze ktos musi przeklejac i raportowac."],
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
          <Badge className="mb-4 bg-red-50 text-red-600">Prawdziwy problem</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Firmie nie brakuje raportow. Brakuje dzialania.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Dashboardy sa juz wszedzie. Drogie jest to, co dzieje sie po pojawieniu sie sygnalu, kiedy nikt nie rusza odpowiednio szybko.
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

      <section id="operating-layer" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Co prowadzi RunItSelf</Badge>
            <h2 className="text-4xl font-black md:text-5xl">Jedna warstwa operacyjna w operacjach, marketingu i sprzedazy.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Agenci robia powtarzalne petle, ktore dzis goni zespol, a decyzje wymagajace oceny oddaja czlowiekowi.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {operatingLoops.map((loop) => {
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
          <Badge className="mb-4 bg-slate-100 text-slate-600">Jak to dziala</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Agenci obserwuja, dzialaja i eskaluja.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Celem nie jest fantazja o pelnej autonomii, tylko system, w ktorym AI robi powtarzalne rzeczy, a czlowiek podejmuje decyzje, ktore maja znaczenie.
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
            <h2 className="text-4xl font-black md:text-5xl">AI prowadzi petle. Pan akceptuje to, co wazne.</h2>
            <p className="mt-5 text-lg leading-relaxed text-emerald-100/80">
              Kazde wdrozenie zaczyna sie od granic akceptacji. Agent robi rutyne, przygotowuje rekomendacje i oddaje decyzje, zanim zrobia sie drogie.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Robi automatycznie", "Przypomnienia, zbieranie kontekstu, aktualizacje, kontrole i bezpieczne follow-upy."],
              ["Przygotowuje do akceptacji", "Ceny, wiadomosci do klientow, zmiany w kampaniach, oferty i wszystko, co dotyka pieniedzy."],
              ["Eskaluje z kontekstem", "Kiedy agent nie jest pewien, podaje sygnal, dowody i rekomendowany nastepny krok."],
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Pierwszy agent w 3 dni</Badge>
            <h2 className="text-4xl font-black md:text-5xl">Zaczynamy od jednej petli. Sprawdzamy, ze dziala. Potem rozszerzamy.</h2>
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
          <Badge className="mb-4 bg-slate-100 text-slate-600">Dowody</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Zbudowane na prawdziwej pracy operacyjnej, nie na teatrze z AI.</h2>
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
            <h2 className="text-3xl font-black">Pasuje, jesli...</h2>
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
            <h2 className="text-3xl font-black">Nie pasuje, jesli...</h2>
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
            <h2 className="text-3xl font-black">Mapa ma jedno zadanie.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Znalezc pierwsza powtarzalna petle, ktora powinna przestac zalezec od recznego pilnowania.
            </p>
            <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm font-semibold leading-relaxed text-emerald-800">
              Jesli nie ma sensownej drogi do pierwszego agenta, wychodzi Pan z mapa i tyle. Zadnej sprzedazy wdrozenia.
            </div>
          </Card>
          <Card className="p-8">
            <BarChart3 className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">Z czym Pan wychodzi</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "2-3 petle najlatwiejsze do automatyzacji",
                "Pierwszy agent do wdrozenia",
                "Ktore narzedzia zostawic, wymienic, podlaczyc",
                "Granice akceptacji",
                "Spodziewany zysk czasu albo mniejsze ryzyko",
                "Sciezka wdrozenia w 3 dni",
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
            Znajdzmy pierwsza petle, ktorej Panska firma nie powinna juz robic recznie.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">
            Wychodzi Pan z pierwsza petla do automatyzacji, agentem do zbudowania i zasadami akceptacji wokol niego.
          </p>
          <Button className="mt-8 bg-white px-10 py-5 text-lg text-emerald-900 shadow-none hover:bg-slate-100" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Umow mape operacyjna <ArrowUpRight size={20} />
          </Button>
          <p className="mt-5 text-sm font-medium text-emerald-100/80">30 minut. Mapujemy pierwsza petle, ktora AI moze przejac w 3 dni.</p>
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
            <a href="/privacy" className="transition-colors hover:text-emerald-600">Polityka prywatnosci</a>
            <a href="/terms" className="transition-colors hover:text-emerald-600">Regulamin</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[hsl(40,12%,89%)] bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
        <Button className="w-full py-3" onClick={() => window.open(BOOKING_URL, "_blank")}>
          Umow mape operacyjna <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
