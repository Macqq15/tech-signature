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
      whatYouGet: "What you get:",
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
      badge: "Dostępny do projektów",
      titleLine1: "Buduję systemy, które zamieniają",
      titleLine2: "ręczną pracę w skalowalne produkty",
      desc: "Od newsletterów wysyłających ponad 250 tys. maili tygodniowo po aplikacje, które produktyzują wiedzę ekspercką. Pomagam founderom, twórcom i firmom deep tech budować infrastrukturę, która działa bez nich.",
      ctaPrimary: "Zobacz projekty",
      ctaSecondary: "Kontakt",
    },
    logos: "Systemy, które zbudowałem dla marek i platform, m.in.",
    whySection: {
      title: "Dlaczego to robię",
      p1: "Większość founderów i ekspertów, których spotykam, ma ten sam problem. Robią wartościową rzecz ręcznie, czyli konsulting, treści, analizy, i wiedzą, że to powinno się skalować. Tylko nie wiedzą, od czego zacząć technicznie, albo próbowali już automatyzacji i im się rozsypała.",
      p2: "Byłem po obu stronach. Zakupy i operacje w HP oraz Akamai, gdzie system nie ma prawa się wywrócić. Potem startupy i biznesy oparte na treściach, gdzie tempo liczy się bardziej niż dopracowanie.",
      p3: "Współtworzyłem LetterOperators, silnik newsletterowy wysyłający ponad 250 tys. maili tygodniowo, i sprzedałem ten biznes w 2026. Pomagałem ekspertom zamienić ich metodę pracy w oprogramowanie. Budowałem systemy treści dla firm technologicznych, które musiały tłumaczyć trudne rzeczy na dużą skalę.",
      p4: "Wzorzec jest zawsze ten sam. Ktoś ma wartościową wiedzę albo proces uwięziony w ręcznej pracy. Ja buduję system, który to uwalnia.",
      listTitle: "Jak pomagam:",
      listItems: [
        "Skalowalne produkty. Zamiana wiedzy eksperckiej w aplikacje i platformy.",
        "Systemy treści. Zautomatyzowany research, pisanie i publikacja dla firm deep tech.",
        "Infrastruktura wzrostu. Systemy, które pozwalają rosnąć bez zatrudniania kolejnych osób."
      ]
    },
    work: {
      title: "Wybrane projekty",
      subtitle: "Systemy, które zbudowałem i które dziś działają beze mnie.",
    },
    partners: {
      title: "Z kim pracuję",
    },
    engagement: {
      title: "Jak współpracujemy",
      subtitle: "Trzy sposoby na współpracę, zależnie od tego, na jakim jesteś etapie.",
      whatYouGet: "Co dostajesz:",
    },
    testimonials: {
      title: "Co mówią klienci",
    },
    about: {
      label: "Historia",
      title: "Dlaczego buduję systemy",
      p1: "Zaczynałem w zakupach korporacyjnych w HP i Akamai, czyli tam, gdzie system nie ma prawa się wywrócić, a proces musi wytrzymać skalę.",
      p2: "Potem poszedłem w drugą stronę. Startupy, biznesy oparte na treściach, creator economy. Miejsca, gdzie tempo liczy się bardziej niż dopracowanie i budujesz z tego, co akurat działa.",
      p3: "Budowałem automatyzację marketingu i systemy mailowe dla marek e-commerce, m.in. JewelryLab, Monumo i Cameron Hair, co przełożyło się na ponad 10 mln USD sprzedaży. Prowadziłem operacje i treści w Trebit, gdzie raporty o trendach dały 60 tys. USD przychodu. Współtworzyłem LetterOperators, silnik newsletterowy na ponad 250 tys. maili tygodniowo, i sprzedałem ten biznes w 2026. Pomogłem twórcy z branży tech urosnąć z 10 tys. do 50 tys. obserwujących, pisząc za niego.",
      p4: "Dziś pomagam founderom, ekspertom i firmom deep tech budować systemy, dzięki którym przestają robić wszystko ręcznie.",
    },
    comingSoon: {
      title: "New Space Medium",
      desc: "Mój następny projekt. Publikacja o Space 2.0, czyli o firmach, technologiach i okazjach, które budują nową gospodarkę kosmiczną.",
      status: "Wkrótce start."
    },
    contact: {
      badge: "Kontakt",
      title: "Porozmawiajmy",
      subtitle: "Napisz, nad czym pracujesz. Powiem ci, czy mogę pomóc.",
      name: "Imię",
      namePlaceholder: "Twoje imię",
      email: "E-mail",
      emailPlaceholder: "twoj@email.pl",
      message: "W czym mogę pomóc?",
      messagePlaceholder: "Napisz kilka zdań o projekcie...",
      submit: "Wyślij wiadomość",
      responseTime: "Zwykle odpowiadam w ciągu 24 godzin.",
      footer: "Zbudowane w React i Tailwind.",
    },
    engagementModels: [
      {
        title: "Audyt operacyjny",
        price: "Stała cena",
        desc: "Utknąłeś. Wiesz, że coś trzeba zmienić, ale nie wiesz, co zbudować najpierw. Przeglądam twoje obecne operacje, pokazuję, gdzie ręczna praca kosztuje cię najwięcej, i rozpisuję architekturę systemu, której potrzebujesz, w kolejności od najważniejszego.",
        features: [
          "Mapa architektury systemu",
          "Wąskie gardła z szacunkiem zwrotu",
          "Rekomendacje narzędzi",
          "Jasna odpowiedź, co zbudować najpierw"
        ],
      },
      {
        title: "System na zamówienie",
        price: "Wycena projektowa",
        desc: "Wiesz, czego potrzebujesz. Teraz potrzebujesz kogoś, kto to zbuduje. Projektuję i wdrażam cały system, czy to aplikację produktyzującą twoją wiedzę, silnik do treści, czy proces operacyjny. Dostajesz rozwiązanie pod klucz, z dokumentacją i szkoleniem, żeby zespół umiał je obsługiwać.",
        features: [
          "Programowanie full-stack",
          "Wdrożenie n8n i AI",
          "Integracja z twoimi narzędziami",
          "Przekazanie i szkolenie"
        ],
      },
      {
        title: "Partner wzrostu",
        price: "Miesięczny abonament",
        desc: "Potrzebujesz stałego wsparcia, a nie jednorazowego projektu. Wchodzę jako twój partner techniczny na część etatu. Optymalizujemy to, co już działa, budujemy nowe rzeczy w miarę wzrostu i pilnujemy, żeby infrastruktura nadążała za przychodem.",
        features: [
          "Wsparcie priorytetowe",
          "Stała optymalizacja",
          "Miesięczne rozmowy o strategii",
          "Nowe systemy w miarę potrzeb"
        ],
      },
    ],
    sectors: [
      {
        title: "Eksperci i twórcy",
        range: "Wiedza, która się nie skaluje",
        desc: "Prowadzisz konsulting za 200 do 500 USD za godzinę albo tworzysz treści ręcznie. Masz metodę, która działa. Chcesz zamienić ją w produkt: aplikację, platformę, system, który dotrze do tysięcy ludzi, podczas gdy ty zajmujesz się najdroższymi zleceniami.",
      },
      {
        title: "Firmy deep tech",
        range: "Trudna technologia",
        desc: "Budujesz coś skomplikowanego: kosmos, biotech, AI, hardware. Potrzebujesz systemu treści, który przyciąga finansowanie i sprzedaż: raporty o trendach, analizy, aktualizacje dla inwestorów, automatyczna publikacja. Robię to wyłącznie dla deep tech.",
      },
      {
        title: "Małe firmy",
        range: "Szybki wzrost",
        desc: "Rośniesz, ale toniesz w ręcznej robocie. Potrzebujesz automatyzacji, która się zwraca: procesy marketingowe, systemy mailowe, integracje, które oddają ci czas bez zatrudniania kolejnych osób.",
      },
    ],
    projects: [
      {
        title: "LetterOperators",
        tag: "Automatyzacja newsletterów",
        exited: true,
        desc: "Współzałożyłem i zbudowałem silnik automatyzacji stojący za LetterOperators, usługą newsletterową done for you. Od zera do ponad 20 publikacji klientów i ponad 250 tys. maili tygodniowo, przy czasie produkcji skróconym z 12 godzin do 45 minut. Biznes sprzedany w 2026.",
        link: "letteroperators.com"
      },
      {
        title: "WeAreFastTrack",
        tag: "Compliance na Amazonie",
        desc: "Budowa automatycznych systemów compliance dla sprzedawców Amazona razem z Rogerem Percym. Karty charakterystyki, klasyfikacja materiałów niebezpiecznych i procesy przywracania zablokowanych kont.",
        link: "wearefasttrack.com"
      },
      {
        title: "Systemy wzrostu w e-commerce",
        tag: "Automatyzacja marketingu",
        desc: "Automatyzacja marketingu, systemy mailowe i procesy analityczne dla globalnych marek e-commerce, m.in. JewelryLab, Monumo i Cameron Hair. Maile cyklu życia, alerty magazynowe i obsługa kampanii. Łączny wpływ na sprzedaż: ponad 10 mln USD.",
        link: null
      },
      {
        title: "Produkty Expert-Tech",
        tag: "Produktyzacja wiedzy",
        desc: "Praca z ekspertami nad zamianą ich ręcznych metod konsultingowych w skalowalne produkty. Buduję dziś z partnerami w health tech i compliance. Model jest prosty: znajdź eksperta, który ręcznie robi robotę wartą 200 do 500 USD za godzinę, i zautomatyzuj 60 procent jego metody w produkt, który dotrze do tysięcy.",
        link: "W budowie"
      },
      {
        title: "Trebit",
        tag: "Operacje i treści",
        desc: "Prowadziłem operacje i pisałem pogłębione raporty o trendach w branżach technologicznych: creator economy, voice AI, kosmos, niszowe modele językowe. Budowałem systemy treści, prowadziłem marketing i premiery produktów. Przychód: 60 tys. USD.",
        link: null
      },
      {
        title: "Wzrost twórcy",
        tag: "Ghostwriting",
        desc: "Pisałem za twórcę z branży tech i pomogłem mu urosnąć z 10 tys. do 50 tys. obserwujących w ciągu dwóch lat.",
        link: null
      },
    ],
    testimonials_list: [
      {
        quote: "Richard i Maciej przenieśli naszą listę na beehiiv i uruchomili newsletter Smart Seller, który od razu zaczął zarabiać przez Ad Network. Polecam ich z całego serca.",
        author: "Nate Ginsburg",
        company: "SellerPlex.com"
      },
      {
        quote: "Współpraca z Letter Operators przy naszym newsletterze Franzy Five była świetna. Poświęcili czas, żeby naprawdę zrozumieć charakter naszej marki, i błyskawicznie reagowali na każdą uwagę o treści, przekazie i tonie.",
        author: "Chris Wright",
        company: "Franzy"
      },
      {
        quote: "Bardzo dobrze wspominamy współpracę z Richardem i zespołem Letter Operators przy uruchomieniu naszego newslettera o AI. Czytelnicy zareagowali świetnie, a dbałość zespołu o szczegóły sprawiła, że wszystko poszło gładko.",
        author: "Nick La Maina",
        company: "Guiding Tech Media"
      }
    ]
  },
};
