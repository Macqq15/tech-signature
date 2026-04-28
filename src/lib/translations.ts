export type Language = "en" | "pl";

export const translations = {
  en: {
    hero: {
      badge: "Available for Projects",
      titleLine1: "I Build Systems That Turn",
      titleLine2: "Manual Work Into Scalable Products",
      desc: "From newsletters sending 250k+ weekly emails to apps that productize expert knowledge - I help founders, creators, and deep tech companies build infrastructure that runs without them.",
      ctaPrimary: "See My Work",
      ctaSecondary: "Contact Me",
    },
    logos: "Built systems for brands and platforms including",
    whySection: {
      title: "Why I Do This",
      p1: "Most founders and experts I meet have the same problem: they're doing valuable work manually - consulting, content, analysis - and they know it should scale. But they don't know where to start technically, or they've tried automation before and it broke.",
      p2: "I've been on both sides. Enterprise procurement at HP and Akamai, where systems cannot fail. Then startups and creator businesses, where speed beats perfection.",
      p3: "I co-built LetterOperators into a newsletter engine sending 250k+ emails weekly - then successfully sold the business in 2026. I've helped experts turn their methodology into software. I've built content systems for tech companies that needed to communicate complex ideas at scale.",
      p4: "The pattern is always the same: someone has valuable expertise or processes trapped in manual work. I build the system that sets it free.",
      listTitle: "Here's how I help:",
      listItems: [
        "Scalable Products - Turning expert knowledge into apps and platforms",
        "Content Systems - Automated research, writing, and publishing for deep tech companies",
        "Growth Infrastructure - Systems that let you scale without adding headcount"
      ]
    },
    work: {
      title: "Selected Work",
      subtitle: "Systems I've built that now run without me.",
    },
    partners: {
      title: "Who I Work With",
    },
    engagement: {
      title: "How We Work Together",
      subtitle: "Three ways to partner, depending on where you are.",
    },
    testimonials: {
      title: "What People Say",
    },
    about: {
      label: "The Backstory",
      title: "Why I Build Systems",
      p1: "I started in enterprise procurement at HP and Akamai - environments where systems cannot fail and processes need to survive scale.",
      p2: "Then I went the opposite direction. Startups, content businesses, creator economy. Places where speed matters more than perfection and you build with whatever works.",
      p3: "I built marketing automation and email systems for e-commerce brands like JewelryLab, Monumo, and Cameron Hair - driving $10M+ in combined sales. I ran operations and content at Trebit, generating $60K from trend intelligence reports. I co-built LetterOperators into a newsletter engine sending 250k+ emails weekly - and successfully exited (sold the business) in 2026. I helped a tech creator grow from 10K to 50K followers through ghostwriting.",
      p4: "Now I help founders, experts, and deep tech companies build the systems that let them stop doing everything manually.",
    },
    comingSoon: {
      title: "New Space Medium",
      desc: "My next project: a publication diving deep into Space 2.0 - the companies, technologies, and opportunities shaping the new space economy.",
      status: "Launching soon."
    },
    contact: {
      badge: "Contact",
      title: "Let's Talk",
      subtitle: "Tell me what you're working on. I'll tell you if I can help.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "What do you need help with?",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      responseTime: "I usually respond within 24 hours.",
      footer: "Built with React & Tailwind.",
    },
    engagementModels: [
      {
        title: "Deep-Dive Audit",
        price: "Fixed Price",
        desc: "You're stuck. You know something needs to change but you're not sure what to build first. I analyze your current operations, identify where manual work is costing you the most, and map out the exact system architecture you need - in priority order.",
        features: [
          "System architecture map",
          "Bottleneck analysis with ROI estimates",
          "Tool stack recommendations",
          "Clear \"build this first\" action plan"
        ],
      },
      {
        title: "Custom System Build",
        price: "Project Based",
        desc: "You know what you need. Now you need someone to build it. I design and deploy the complete system - whether it's a productized expertise app, content automation engine, or operational workflow. You get a turnkey solution, fully documented, with training so your team can run it.",
        features: [
          "Full-stack development",
          "n8n / AI implementation",
          "Integration with your existing tools",
          "Handover and training"
        ],
      },
      {
        title: "Growth Partner",
        price: "Monthly Retainer",
        desc: "You need ongoing support, not a one-off project. I become your fractional technical partner. We continuously optimize existing systems, build new ones as you grow, and make sure your infrastructure scales with your revenue.",
        features: [
          "Priority support",
          "Continuous optimization",
          "Monthly strategy calls",
          "New system builds as needed"
        ],
      },
    ],
    sectors: [
      {
        title: "Experts & Creators",
        range: "Unscalable Expertise",
        desc: "You're doing $200-500/hr consulting or creating content manually. You have a methodology that works. You want to turn it into a product that scales - an app, a platform, a system that reaches thousands while you focus on high-ticket work.",
      },
      {
        title: "Deep Tech Companies",
        range: "Complex Tech",
        desc: "You're building something complex - space, biotech, AI, hardware. You need content systems that drive funding and sales: trend reports, deep-dives, investor updates, automated publishing. I build these for deep tech only.",
      },
      {
        title: "Small Businesses",
        range: "Growing Fast",
        desc: "You're growing but buried in manual operations. You need automation that pays for itself - marketing workflows, email systems, integrations that free your time without hiring.",
      },
    ],
    projects: [
      {
        title: "LetterOperators",
        tag: "Newsletter Automation",
        exited: true,
        desc: "Co-founded and built the automation engine behind LetterOperators - a done-for-you newsletter service. Grew from zero to 20+ client publications, 250k+ emails sent weekly, production time cut from 12 hours to 45 minutes. Successfully exited (acquired) in 2026.",
        link: "letteroperators.com"
      },
      {
        title: "WeAreFastTrack",
        tag: "Amazon Compliance",
        desc: "Building automated compliance systems for Amazon sellers with Roger Percy - handling Safety Data Sheets, hazmat classifications, and reinstatement workflows.",
        link: "wearefasttrack.com"
      },
      {
        title: "E-commerce Growth Systems",
        tag: "Marketing Automation",
        desc: "Built marketing automation, email systems, and analytics workflows for global e-commerce brands including JewelryLab, Monumo, and Cameron Hair. Automated lifecycle marketing, inventory alerts, and campaign workflows. Combined revenue impact: $10M+ in sales.",
        link: null
      },
      {
        title: "Expert-Tech Products",
        tag: "Productized Expertise",
        desc: "Working with subject matter experts to turn their manual consulting methodologies into scalable software products. Currently building with partners in health tech and compliance. The model: Find experts doing $200-500/hr manual work. Automate 60% of their methodology into a product that reaches thousands.",
        link: "In development"
      },
      {
        title: "Trebit",
        tag: "Content Operations",
        desc: "Managed operations and created deep-dive trend reports on tech verticals - creator economy, voice AI, space tech, niche LLMs. Built content systems, handled marketing, and led product launches. Generated $60K in revenue.",
        link: null
      },
      {
        title: "Content Creator Growth",
        tag: "Ghostwriting",
        desc: "Ghostwrote for a tech creator, helping grow their audience from 10K to 50K followers over two years.",
        link: null
      },
    ],
    testimonials_list: [
      {
        quote: "Richard & Maciej got our list over to beehiiv and launched our Smart Seller newsletter where it was immediately monetized through the Ad Network. I can't recommend these guys enough.",
        author: "Nate Ginsburg",
        company: "SellerPlex.com"
      },
      {
        quote: "Letter Operators has been fantastic to work with on our Franzy Five newsletter. They took the time to really get our brand's personality and have been super responsive to all our feedback about content, messaging, and voice.",
        author: "Chris Wright",
        company: "Franzy"
      },
      {
        quote: "We had a great experience working with Richard and the team at Letter Operators to launch our AI newsletter. We've received excellent feedback from our audience and their attention to detail made the process smooth and enjoyable.",
        author: "Nick La Maina",
        company: "Guiding Tech Media"
      }
    ]
  },
  pl: {
    hero: {
      badge: "Dostępny do Projektów",
      titleLine1: "Buduję Systemy, Które Zamieniają",
      titleLine2: "Ręczną Pracę w Skalowalne Produkty",
      desc: "Od newsletterów wysyłających 250k+ maili tygodniowo po aplikacje produktyzujące wiedzę ekspercką - pomagam founderom, twórcom i firmom deep tech budować infrastrukturę, która działa bez nich.",
      ctaPrimary: "Zobacz Projekty",
      ctaSecondary: "Kontakt",
    },
    logos: "Zbudowałem systemy dla marek i platform m.in.",
    whySection: {
      title: "Dlaczego To Robię",
      p1: "Większość founderów i ekspertów, których spotykam, ma ten sam problem: wykonują wartościową pracę ręcznie - konsulting, content, analiza - i wiedzą, że powinna się skalować. Ale nie wiedzą, od czego zacząć technicznie, albo próbowali automatyzacji i się zepsuła.",
      p2: "Byłem po obu stronach. Enterprise procurement w HP i Akamai, gdzie systemy nie mogą zawodzić. Potem startupy i biznesy twórców, gdzie prędkość bije perfekcję.",
      p3: "Współtworzyłem LetterOperators w silnik newsletterowy wysyłający 250k+ maili tygodniowo - a następnie pomyślnie sprzedałem biznes w 2026. Pomagałem ekspertom zamienić ich metodologię w oprogramowanie. Budowałem systemy contentowe dla firm technologicznych, które musiały komunikować złożone idee na skalę.",
      p4: "Wzorzec jest zawsze taki sam: ktoś ma wartościową wiedzę lub procesy uwięzione w ręcznej pracy. Buduję system, który to uwalnia.",
      listTitle: "Jak pomagam:",
      listItems: [
        "Skalowalne Produkty - Zamiana wiedzy eksperckiej w aplikacje i platformy",
        "Systemy Contentowe - Zautomatyzowane badania, pisanie i publikowanie dla firm deep tech",
        "Infrastruktura Wzrostu - Systemy pozwalające skalować bez zwiększania headcount"
      ]
    },
    work: {
      title: "Wybrane Projekty",
      subtitle: "Systemy, które zbudowałem i teraz działają beze mnie.",
    },
    partners: {
      title: "Z Kim Pracuję",
    },
    engagement: {
      title: "Jak Współpracujemy",
      subtitle: "Trzy sposoby na partnerstwo, w zależności od tego, gdzie jesteś.",
    },
    testimonials: {
      title: "Co Mówią Ludzie",
    },
    about: {
      label: "Historia",
      title: "Dlaczego Buduję Systemy",
      p1: "Zaczynałem w enterprise procurement w HP i Akamai - środowiskach, gdzie systemy nie mogą zawodzić, a procesy muszą przetrwać skalę.",
      p2: "Potem poszedłem w przeciwnym kierunku. Startupy, biznesy contentowe, creator economy. Miejsca, gdzie prędkość liczy się bardziej niż perfekcja i budujesz z czymkolwiek, co działa.",
      p3: "Budowałem automatyzację marketingu i systemy emailowe dla marek e-commerce jak JewelryLab, Monumo i Cameron Hair - napędzając $10M+ łącznej sprzedaży. Zarządzałem operacjami i contentem w Trebit, generując $60K z raportów trendów. Współtworzyłem LetterOperators w silnik newsletterowy wysyłający 250k+ maili tygodniowo - i pomyślnie sprzedałem biznes (exit) w 2026. Pomogłem twórcy tech rosnąć z 10K do 50K followersów poprzez ghostwriting.",
      p4: "Teraz pomagam founderom, ekspertom i firmom deep tech budować systemy, które pozwalają im przestać robić wszystko ręcznie.",
    },
    comingSoon: {
      title: "New Space Medium",
      desc: "Mój następny projekt: publikacja zagłębiająca się w Space 2.0 - firmy, technologie i możliwości kształtujące nową ekonomię kosmiczną.",
      status: "Wkrótce start."
    },
    contact: {
      badge: "Kontakt",
      title: "Porozmawiajmy",
      subtitle: "Powiedz mi, nad czym pracujesz. Powiem Ci, czy mogę pomóc.",
      name: "Imię",
      namePlaceholder: "Twoje imię",
      email: "Email",
      emailPlaceholder: "twoj@email.pl",
      message: "W czym potrzebujesz pomocy?",
      messagePlaceholder: "Opowiedz o swoim projekcie...",
      submit: "Wyślij Wiadomość",
      responseTime: "Zazwyczaj odpowiadam w ciągu 24 godzin.",
      footer: "Stworzone z React & Tailwind.",
    },
    engagementModels: [
      {
        title: "Audyt Głęboki",
        price: "Stała Cena",
        desc: "Utknąłeś. Wiesz, że coś trzeba zmienić, ale nie jesteś pewien, co zbudować najpierw. Analizuję Twoje obecne operacje, identyfikuję gdzie ręczna praca kosztuje Cię najwięcej i mapuję dokładną architekturę systemu, której potrzebujesz - w kolejności priorytetów.",
        features: [
          "Mapa architektury systemu",
          "Analiza wąskich gardeł z szacunkami ROI",
          "Rekomendacje stosu narzędzi",
          "Jasny plan działania \"zbuduj to najpierw\""
        ],
      },
      {
        title: "Budowa Systemu na Zamówienie",
        price: "Wycena Projektowa",
        desc: "Wiesz czego potrzebujesz. Teraz potrzebujesz kogoś, kto to zbuduje. Projektuję i wdrażam kompletny system - czy to aplikację produktyzującej ekspertyzy, silnik automatyzacji contentu czy workflow operacyjny. Otrzymujesz rozwiązanie pod klucz, w pełni udokumentowane, ze szkoleniem żeby Twój zespół mógł je obsługiwać.",
        features: [
          "Rozwój full-stack",
          "Wdrożenie n8n / AI",
          "Integracja z Twoimi istniejącymi narzędziami",
          "Przekazanie i szkolenie"
        ],
      },
      {
        title: "Partner Wzrostu",
        price: "Miesięczny Retainer",
        desc: "Potrzebujesz ciągłego wsparcia, nie jednorazowego projektu. Staję się Twoim frakcyjnym partnerem technicznym. Ciągle optymalizujemy istniejące systemy, budujemy nowe w miarę wzrostu i upewniamy się, że Twoja infrastruktura skaluje się z przychodami.",
        features: [
          "Priorytetowe wsparcie",
          "Ciągła optymalizacja",
          "Miesięczne rozmowy strategiczne",
          "Budowa nowych systemów w razie potrzeby"
        ],
      },
    ],
    sectors: [
      {
        title: "Eksperci i Twórcy",
        range: "Nieskalowalna Ekspertyza",
        desc: "Robisz konsulting za $200-500/godz lub tworzysz content ręcznie. Masz metodologię, która działa. Chcesz zamienić to w produkt, który skaluje - aplikację, platformę, system docierający do tysięcy, podczas gdy Ty skupiasz się na high-ticket pracy.",
      },
      {
        title: "Firmy Deep Tech",
        range: "Złożona Tech",
        desc: "Budujesz coś złożonego - space, biotech, AI, hardware. Potrzebujesz systemów contentowych napędzających fundusze i sprzedaż: raporty trendów, deep-dives, aktualizacje dla inwestorów, zautomatyzowane publikowanie. Buduję to tylko dla deep tech.",
      },
      {
        title: "Małe Firmy",
        range: "Szybki Wzrost",
        desc: "Rosniesz ale jesteś pogrzebany w ręcznych operacjach. Potrzebujesz automatyzacji, która się zwraca - workflow marketingowe, systemy emailowe, integracje zwalniające Twój czas bez zatrudniania.",
      },
    ],
    projects: [
      {
        title: "LetterOperators",
        tag: "Automatyzacja Newsletterów",
        exited: true,
        desc: "Współzałożyłem i zbudowałem silnik automatyzacji za LetterOperators - serwisem newsletterów done-for-you. Wzrost od zera do 20+ publikacji klientów, 250k+ maili tygodniowo, czas produkcji skrócony z 12 godzin do 45 minut. Pomyślny exit (przejęcie) w 2026.",
        link: "letteroperators.com"
      },
      {
        title: "WeAreFastTrack",
        tag: "Compliance Amazon",
        desc: "Budowa zautomatyzowanych systemów compliance dla sprzedawców Amazon z Rogerem Percy - obsługa Safety Data Sheets, klasyfikacje hazmat i workflow reinstatement.",
        link: "wearefasttrack.com"
      },
      {
        title: "Systemy Wzrostu E-commerce",
        tag: "Automatyzacja Marketingu",
        desc: "Budowałem automatyzację marketingu, systemy emailowe i workflow analityczne dla globalnych marek e-commerce w tym JewelryLab, Monumo i Cameron Hair. Zautomatyzowałem marketing lifecycle, alerty magazynowe i workflow kampanii. Łączny wpływ na przychody: $10M+ sprzedaży.",
        link: null
      },
      {
        title: "Produkty Expert-Tech",
        tag: "Produktyzowana Ekspertyza",
        desc: "Współpraca z ekspertami domenowymi w celu zamiany ich ręcznych metodologii konsultingowych w skalowalne produkty softwarowe. Obecnie buduję z partnerami w health tech i compliance. Model: Znajdź ekspertów robiących ręczną pracę za $200-500/godz. Zautomatyzuj 60% ich metodologii w produkt docierający do tysięcy.",
        link: "W rozwoju"
      },
      {
        title: "Trebit",
        tag: "Operacje Contentowe",
        desc: "Zarządzałem operacjami i tworzyłem głębokie raporty trendów o wertykalach tech - creator economy, voice AI, space tech, niszowe LLM. Budowałem systemy contentowe, obsługiwałem marketing i prowadziłem launchie produktów. Wygenerowano $60K przychodu.",
        link: null
      },
      {
        title: "Wzrost Twórcy Treści",
        tag: "Ghostwriting",
        desc: "Ghostwriting dla twórcy tech, pomagając rosnąć ich audytorium z 10K do 50K followersów w ciągu dwóch lat.",
        link: null
      },
    ],
    testimonials_list: [
      {
        quote: "Richard i Maciej przenieśli naszą listę do beehiiv i uruchomili newsletter Smart Seller, który natychmiast został zmonetyzowany przez Ad Network. Nie mogę ich wystarczająco polecić.",
        author: "Nate Ginsburg",
        company: "SellerPlex.com"
      },
      {
        quote: "Letter Operators to fantastyczna współpraca przy naszym newsletterze Franzy Five. Poświęcili czas, by naprawdę zrozumieć osobowość naszej marki i byli super responsywni na wszystkie nasze uwagi dotyczące contentu, przekazu i głosu.",
        author: "Chris Wright",
        company: "Franzy"
      },
      {
        quote: "Mieliśmy świetne doświadczenie współpracując z Richardem i zespołem Letter Operators przy uruchomieniu naszego newslettera AI. Otrzymaliśmy doskonałe opinie od naszej publiczności, a ich dbałość o szczegóły sprawiła, że proces był gładki i przyjemny.",
        author: "Nick La Maina",
        company: "Guiding Tech Media"
      }
    ]
  },
};
