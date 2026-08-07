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
  "Gdzie jest ta aktualna wersja?",
  "Sprawdź na Slacku. Albo w mailu.",
  "Kto to zmienił?",
  "To jest jeszcze aktualne?",
  "Przecież mieliśmy na to proces.",
  "Muszę to tylko przekleić do Excela.",
];

const dataSources = [
  "Gmail",
  "Excel",
  "CRM",
  "Slack",
  "Fakturownia",
  "Dysk",
  "BaseLinker",
  "kartka na biurku",
];

const differentiators = [
  {
    title: "Zaczynam od danych, nie od AI",
    desc: "Agent postawiony na bałaganie tylko szybciej powiela bałagan. Najpierw jedno miejsce, w którym wszystko się zgadza.",
  },
  {
    title: "Dane osobowe nie idą do AI",
    desc: "Zanim cokolwiek trafi do modelu, nazwiska, maile, telefony i numery umów są podmieniane. Model widzi proces, nie Twoich klientów.",
  },
  {
    title: "Stack robi się chudszy, nie grubszy",
    desc: "Zostaje to, co pracuje. Wypada to, co istnieje tylko po to, żeby ktoś przenosił dane z jednego miejsca w drugie.",
  },
];

const painCards = [
  {
    title: "Te same dane w pięciu miejscach",
    desc: "CRM mówi co innego niż Excel, Excel co innego niż skrzynka. Zanim ktokolwiek podejmie decyzję, najpierw musi sprawdzić, której wersji wierzyć.",
    icon: Database,
  },
  {
    title: "Firma stoi na jednej osobie",
    desc: "Ty albo Twój najlepszy człowiek ciągle przypominacie, sprawdzacie i poprawiacie to samo. Jak ta osoba idzie na urlop, proces staje.",
    icon: Users,
  },
  {
    title: "Kolejna osoba to nie jest rozwiązanie",
    desc: "Nowy koordynator kupuje trochę czasu. Model dalej stoi na tym, że ktoś musi pamiętać i klikać.",
    icon: Clock,
  },
];

const mechanism = [
  {
    step: "01",
    title: "Warsztat operacyjny, 90 minut",
    desc: "Siadamy razem nad Twoimi narzędziami i szukamy miejsc, w których dane się rozjeżdżają. Bez opłaty.",
  },
  {
    step: "02",
    title: "Jedna baza zamiast pięciu",
    desc: "Zostaje to, co pracuje. Reszta zaczyna pisać do jednego miejsca. Excel przestaje być bazą danych.",
  },
  {
    step: "03",
    title: "Anonimizacja przed AI",
    desc: "Nazwiska, maile, telefony i numery umów są podmieniane, zanim cokolwiek trafi do modelu. Zostaje procedura na piśmie.",
  },
  {
    step: "04",
    title: "Dopiero teraz automatyzacja",
    desc: "Na uporządkowanym procesie stawiam automatyzację i agentów. Decyzje o pieniądzach i klientach zostają u Ciebie.",
  },
];

const privacyCards = [
  {
    icon: UserRoundX,
    title: "Co jest podmieniane",
    desc: "Imiona, nazwiska, maile, telefony, adresy, numery umów i faktur. Model widzi „Klient 41\", nie Jana Kowalskiego.",
  },
  {
    icon: ShieldCheck,
    title: "Gdzie to się dzieje",
    desc: "Podmiana następuje u Ciebie, zanim cokolwiek pójdzie dalej. Oryginały zostają tam, gdzie były.",
  },
  {
    icon: FileLock2,
    title: "Co dostajesz na piśmie",
    desc: "Spis, jakie dane gdzie krążą i co jest anonimizowane. Dokument, który pokazujesz przy kontroli albo klientowi, który zapyta.",
  },
];

const workshopSteps = [
  {
    phase: "Narzędzia",
    title: "Czym firma pracuje naprawdę",
    desc: "Nie to, za co płacisz licencje. Razem z Excelami i skrzynkami, w których siedzi połowa procesu.",
  },
  {
    phase: "Praca",
    title: "Gdzie praca czeka na człowieka",
    desc: "Przekazania, które stoją, dopóki ktoś nie kliknie, i sygnały zauważane za późno.",
  },
  {
    phase: "Dane",
    title: "Gdzie dane się rozjeżdżają",
    desc: "Trzy miejsca, w których dwa systemy mówią co innego, i jedno z nich trzeba naprawić pierwsze.",
  },
  {
    phase: "RODO",
    title: "Co wymaga anonimizacji",
    desc: "Które dane osobowe krążą po tych procesach i co trzeba podmienić, zanim dotknie tego AI.",
  },
];

const workshopOutput = [
  "Lista narzędzi, w których naprawdę siedzą Twoje dane",
  "Trzy miejsca, w których te dane rozjeżdżają się najbardziej",
  "Szacunek godzin tygodniowo traconych na ręczne przenoszenie",
  "Które dane osobowe wymagają anonimizacji przed AI",
  "Pierwszy proces do automatyzacji i co trzeba zrobić przed nim",
];

const proofCards = [
  {
    label: "Zbudowane i sprzedane",
    title: "Operacje newsletterowe na automatyzacji",
    result: "250 tys. maili tygodniowo, 2 osoby obsługi",
    desc: "Agencja newsletterowa zamieniona w system, który działał sam. Wyszukiwanie źródeł, ocena, pisanie, review i wysyłka dla ponad 20 tytułów. Sprzedana w lutym 2026.",
  },
  {
    label: "Systemy wzrostu",
    title: "Automatyzacja w e-commerce",
    result: "Ponad 10 mln USD przychodu klientów",
    desc: "Maile cyklu życia, alerty magazynowe i procesy wzrostu dla marek, w których przegapiony sygnał od razu widać w przychodzie.",
  },
  {
    label: "Skąd bierze się kolejność",
    title: "Uzgadnianie danych w HP i Akamai",
    result: "Lata na fakturach, umowach i dostawcach",
    desc: "Tam rozjazd między dwoma systemami kosztuje realne pieniądze i ktoś musi go znaleźć. Robiłem to zawodowo. Stąd zasada, że najpierw dane mają się zgadzać, a dopiero potem cokolwiek automatyzujemy.",
  },
  {
    label: "Szczerze",
    title: "Jestem jedną osobą, nie agencją",
    result: "Biorę 2-3 wdrożenia naraz",
    desc: "Nie mam działu sprzedaży ani konsultantów, którzy przekażą robotę juniorowi. Rozmawiasz ze mną i to ja siedzę w Twoich danych. Jeśli nie mam czasu, mówię to na pierwszej rozmowie, zamiast Cię trzymać.",
  },
];

const fit = [
  "Prowadzisz firmę usługową albo handlową na 10 do 200 osób i te same dane trzymasz w kilku miejscach.",
  "Ktoś u Ciebie codziennie przekleja dane z jednego narzędzia do drugiego.",
  "Myślałeś o AI, ale odłożyłeś to przez dane osobowe.",
];

const notFit = [
  "Szukasz chatbota, paczki promptów albo kolejnego dashboardu.",
  "Nie masz jeszcze procesu, który da się opisać. Wtedy nie ma czego porządkować.",
  "Nikt u Ciebie nie może przez dwa tygodnie odpowiadać na pytania i dawać dostępów.",
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

  // No cleanup on purpose: every sibling page sets these on mount, and with
  // lazy routes an unmount-time restore can land after the next page's effect.
  useEffect(() => {
    document.documentElement.lang = "pl";
    document.title = "RunItSelf | Porządek w danych, potem automatyzacja";
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
            <button onClick={() => scrollTo("rodo")} className="transition-colors hover:text-emerald-600">
              RODO
            </button>
            <button onClick={() => scrollTo("warsztat")} className="transition-colors hover:text-emerald-600">
              Warsztat
            </button>
            <button onClick={() => scrollTo("proof")} className="transition-colors hover:text-emerald-600">
              Dowody
            </button>
            <a href="/" className="text-slate-400 transition-colors hover:text-emerald-600" hrefLang="en">
              EN
            </a>
          </div>
          <Button className="px-5 py-2 text-sm" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Umów warsztat
          </Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-2 lg:pt-36">
        <div className="space-y-8 ris-fade-up">
          <Badge className="bg-emerald-100 text-emerald-700">Porządek w danych, potem automatyzacja. Zgodnie z RODO.</Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              „Gdzie jest ta aktualna wersja? Sprawdź na Slacku. Albo w mailu."
            </h1>
            <div className="space-y-4 text-xl leading-relaxed text-slate-600">
              <p>
                Twoja firma traci na to kilka godzin tygodniowo i nikt tego nie liczy.
              </p>
              <p>
                Zanim wpuścisz do niej AI, dane muszą leżeć w jednym miejscu i muszą być bezpieczne w użyciu. Tym się zajmuję.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => window.open(BOOKING_URL, "_blank")}>
              Umów warsztat <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => scrollTo("warsztat")}>
              Zobacz, co z niego wychodzi
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-5 border-t border-[hsl(40,12%,89%)] pt-8">
            {[
              ["90 minut", "warsztat, bez opłaty"],
              ["Jedna baza", "zamiast Excela, skrzynki i CRM-u osobno"],
              ["Bez danych osobowych", "model nigdy nie widzi prawdziwego nazwiska"],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="text-2xl font-black text-emerald-600">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroApprovalAnimation lang="pl" />
        </div>
      </section>

      <section className="border-y border-[hsl(40,12%,89%)] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black md:text-4xl">To słyszysz u siebie co tydzień.</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {mondayQuotes.map((quote, index) => (
              <p
                key={quote}
                className={cn(
                  "rounded-xl bg-[hsl(48,25%,97%)] px-5 py-4 text-lg text-slate-700",
                  index % 2 === 1 && "sm:translate-x-4"
                )}
              >
                „{quote}"
              </p>
            ))}
          </div>
          <p className="mt-10 text-center text-lg leading-relaxed text-slate-500">
            Każde z tych zdań kosztuje kilka minut. Kilkanaście razy dziennie, przez rok, to jest etat, którego nikt nie zatrudnił.
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
            jedno źródło prawdy
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-500">
          Buduję warstwę danych, która to spina. Dopiero na niej automatyzacja i AI mają się o co oprzeć.
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
          <Badge className="mb-4 bg-red-50 text-red-600">Prawdziwy problem</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Firmie nie brakuje narzędzi. Brakuje jednego miejsca, w którym wszystko się zgadza.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Masz CRM, Excela, skrzynkę, Slacka i system do faktur. Każde z nich zna kawałek prawdy. Nikt nie zna całej, więc ktoś składa ją codziennie ręcznie.
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
          <Badge className="mb-4 bg-slate-100 text-slate-600">Jak to działa</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Fundament, potem automatyzacja, potem AI. W tej kolejności.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Większość wdrożeń AI kończy się źle, bo zaczyna od narzędzia. Ja zaczynam od tego, żeby system w ogóle wiedział, co się dzieje w firmie.
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

      <section id="rodo" className="bg-emerald-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <ShieldCheck className="mb-6 h-12 w-12 text-emerald-300" />
            <h2 className="text-4xl font-black md:text-5xl">Twoje dane nie wychodzą z firmy w postaci, po której da się kogoś rozpoznać.</h2>
            <p className="mt-5 text-lg leading-relaxed text-emerald-100/80">
              To jest najczęstsze pytanie i najczęstszy powód, dla którego firmy odkładają AI o rok. Dlatego jest osobnym krokiem, a nie przypisem w umowie.
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
              Jeśli dane nie mogą wyjść z firmy nawet w formie zanonimizowanej, da się postawić model lokalnie, na Twoim sprzęcie. To osobny projekt i osobny budżet, więc schodzimy tam tylko wtedy, kiedy naprawdę trzeba.
            </p>
          </div>
        </div>
      </section>

      <section id="warsztat" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Krok pierwszy, bez opłaty</Badge>
            <h2 className="text-4xl font-black md:text-5xl">Zaczynamy od 90 minut wspólnej roboty, nie od wdrożenia.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Wychodzisz z konkretem, nawet jeśli nic potem nie zamówisz.
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
            <h2 className="text-3xl font-black">Warsztat ma jedno zadanie.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Pokazać, gdzie firma traci czas na ręczne przenoszenie danych, i co naprawić najpierw.
            </p>
            <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm font-semibold leading-relaxed text-emerald-800">
              Jeśli po warsztacie okaże się, że u Ciebie nie ma czego automatyzować, mówię to wprost i na tym kończymy.
            </div>
          </Card>
          <Card className="p-8">
            <BarChart3 className="mb-5 h-10 w-10 text-emerald-500" />
            <h2 className="text-3xl font-black">Z czym wychodzisz</h2>
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
          <Badge className="mb-4 bg-slate-100 text-slate-600">Dowody</Badge>
          <h2 className="text-4xl font-black md:text-5xl">Skąd wiem, jak to wygląda od środka.</h2>
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
            <h2 className="text-3xl font-black">Pasuje, jeśli...</h2>
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
            <h2 className="text-3xl font-black">Nie pasuje, jeśli...</h2>
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
            Zobaczmy, gdzie Twoje dane się rozjeżdżają.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">
            Wychodzisz z listą narzędzi, szacunkiem straconych godzin, wskazaniem danych do anonimizacji i pierwszym procesem do naprawy.
          </p>
          <Button className="mt-8 bg-white px-10 py-5 text-lg text-emerald-900 shadow-none hover:bg-slate-100" onClick={() => window.open(BOOKING_URL, "_blank")}>
            Umów warsztat <ArrowUpRight size={20} />
          </Button>
          <p className="mt-5 text-sm font-medium text-emerald-100/80">
            90 minut, online. Przed warsztatem proszę o listę narzędzi, których używacie, żeby nie zjeść na to połowy czasu.
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
            <a href="/privacy" className="transition-colors hover:text-emerald-600">Polityka prywatności</a>
            <a href="/terms" className="transition-colors hover:text-emerald-600">Regulamin</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[hsl(40,12%,89%)] bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
        <Button className="w-full py-3" onClick={() => window.open(BOOKING_URL, "_blank")}>
          Umów warsztat <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
