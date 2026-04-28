import { TopControls } from "@/components/TopControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Mail, ShoppingCart, Brain, Workflow, Linkedin, Github, Server, Globe, Building2, CheckCircle2, Quote, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/my photo-Photoroom.png";
import akamaiLogo from "@/assets/Akamai_logo.svg.png";
import hpLogo from "@/assets/HP-Logo.webp";
import trebitLogo from "@/assets/trebit.webp";
import monumoLogo from "@/assets/monumo logo.svg";
import cameronHairLogo from "@/assets/Cameron_hair_logo_sklep(3).svg";
import { useState } from "react";
import { translations, Language } from "@/lib/translations";

// --- DATA ---

const logos = [
  { name: "HP", image: hpLogo },
  { name: "Akamai", image: akamaiLogo },
  { name: "Trebit", image: trebitLogo },
  { name: "Monumo", image: monumoLogo },
  { name: "Cameron Hair", image: cameronHairLogo },
];

// Icons for dynamic mapping
const projectIcons = [Mail, Server, ShoppingCart, Brain, Building2, Workflow];

// Engagement Model Icons
const modelIcons = [Brain, Workflow, Server];

const ModernIndex = () => {
  const [lang, setLang] = useState<Language>("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === "en" ? "Thanks! I'll be in touch shortly." : "Dzięki! Odezwę się wkrótce.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden font-sans selection:bg-blue-900/30 dark:selection:bg-blue-900/30">

      <TopControls lang={lang} setLang={setLang} />

      <main className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 animate-gradient">
                {t.hero.titleLine2}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105" onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}>
                {t.hero.ctaPrimary}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-border text-foreground hover:bg-accent" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="flex gap-6 pt-2 opacity-60">
              <a href="https://www.linkedin.com/in/maciej-marek/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Linkedin className="w-6 h-6"/></a>
            </div>
          </div>

          {/* Hero Photo */}
          <div className="relative flex justify-center md:justify-end animate-fade-in-up delay-100">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-900 rounded-[2rem] rotate-6 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src={profilePhoto}
                alt="Maciek Marek"
                className="relative w-full h-full object-contain rounded-[1.8rem] border-4 border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-[1.01] bg-background"
              />
            </div>
          </div>
        </section>

        {/* LOGO BAR (ANIMATED CARD MARQUEE) */}
        <section className="mb-32 overflow-hidden">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-12">
            {t.logos}
          </p>

          <div className="relative w-full">
            {/* Gradient masks for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-scroll">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="mx-4 w-64 h-32 relative group">
                  <div className="absolute inset-0 bg-card rounded-xl border border-border group-hover:border-blue-500/30 transition-colors duration-500"></div>

                  {/* Corner Brackets */}
                  <div className="corner-bracket corner-tl opacity-0 group-hover:opacity-100 border-blue-500"></div>
                  <div className="corner-bracket corner-tr opacity-0 group-hover:opacity-100 border-blue-500"></div>
                  <div className="corner-bracket corner-bl opacity-0 group-hover:opacity-100 border-blue-500"></div>
                  <div className="corner-bracket corner-br opacity-0 group-hover:opacity-100 border-blue-500"></div>

                  <div className="relative h-full flex flex-col items-center justify-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className={cn(
                          "w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity",
                          logo.name === "Monumo" ? "h-8" : logo.name === "Trebit" || logo.name === "Cameron Hair" ? "h-10" : "h-16",
                          (logo.name === "Monumo" || logo.name === "Cameron Hair") && "dark:invert"
                        )}
                      />
                    ) : (
                      <>
                        <logo.icon className="w-8 h-8" />
                        <span className="text-xl font-bold tracking-tight">{logo.name}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY I DO THIS SECTION */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">{t.whySection.title}</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t.whySection.p1}</p>
              <p>{t.whySection.p2}</p>
              <p>{t.whySection.p3}</p>
              <p className="text-foreground font-medium">{t.whySection.p4}</p>

              <div className="pt-6">
                <p className="text-foreground font-semibold mb-4">{t.whySection.listTitle}</p>
                <div className="space-y-3">
                  {t.whySection.listItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowUpRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO I WORK WITH */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.partners.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.sectors.map((sector, i) => {
              const Icon = [Brain, Rocket, Building2][i];
              return (
                <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-blue-500/20 hover:bg-accent transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 shadow-sm text-blue-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{sector.title}</h3>
                  <p className="text-sm font-medium text-blue-400 mb-4">{sector.range}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW WE WORK TOGETHER (ENGAGEMENT MODELS) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.engagement.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.engagement.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.engagementModels.map((model, i) => {
              const Icon = modelIcons[i];
              return (
                <Card key={i} className="relative bg-card border-border hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                  {/* Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{model.title}</CardTitle>
                    <CardDescription className="font-mono text-blue-400 font-bold tracking-wider text-xs uppercase mt-2">
                      {model.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {model.desc}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">What you get:</p>
                      <div className="space-y-2">
                        {model.features.map((feature, k) => (
                          <div key={k} className="flex items-start gap-3 text-sm text-foreground/90">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">{t.work.title}</h2>
            <p className="text-muted-foreground">
              {t.work.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.projects.map((project, i) => {
              const Icon = projectIcons[i];
              return (
                <Card
                  key={i}
                  className="group relative overflow-hidden border-border bg-card hover:border-border/80 transition-all duration-500"
                >
                  <CardHeader className="relative z-10 pb-2">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-accent backdrop-blur-md rounded-xl border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex gap-2">
                        {project.exited && (
                          <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 font-bold tracking-wider text-[10px] uppercase">
                            Exited
                          </Badge>
                        )}
                        <Badge variant="outline" className="bg-accent border-border text-foreground/90">{project.tag}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {project.desc}
                    </p>
                    {project.link && (
                      <p className="text-blue-400 text-sm font-mono">→ {project.link}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section className="mb-32">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-3xl p-12 border border-blue-500/20 text-center">
            <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.comingSoon.title}</h3>
            <p className="text-foreground/90 max-w-2xl mx-auto mb-4 leading-relaxed">
              {t.comingSoon.desc}
            </p>
            <p className="text-blue-400 font-semibold">{t.comingSoon.status}</p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t.testimonials.title}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials_list.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border hover:border-border/80 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <Quote className="w-10 h-10 text-blue-900/50 mb-6 group-hover:text-blue-600/50 transition-colors" />
                  <p className="text-lg text-foreground/90 mb-8 leading-relaxed font-light">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-accent border border-border flex items-center justify-center text-foreground font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-blue-400 uppercase tracking-wider font-mono">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BACKSTORY */}
        <section id="about" className="mb-32 relative rounded-3xl bg-card border border-border overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-6 bg-blue-500/5 text-blue-400 border-blue-500/20">{t.about.label}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
            </div>

            <div className="relative min-h-[400px] bg-background">
              <img
                src={profilePhoto}
                alt="Maciek working"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="max-w-2xl mx-auto mb-24">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 bg-blue-900/10">{t.contact.badge}</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.contact.title}</h2>
            <p className="text-muted-foreground">{t.contact.subtitle}</p>
          </div>

          <Card className="bg-card border-border shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/90">{t.contact.name}</Label>
                    <Input
                      id="name"
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="bg-background border-border focus:border-blue-500/50 text-foreground"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/90">{t.contact.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="bg-background border-border focus:border-blue-500/50 text-foreground"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/90">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.messagePlaceholder}
                    className="min-h-[120px] bg-background border-border focus:border-blue-500/50 text-foreground"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg h-12 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:scale-[1.02]">
                  {t.contact.submit}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  {t.contact.responseTime}
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground mt-24 pt-8 border-t border-border">
          <p>&copy; {new Date().getFullYear()} Maciej Marek. {t.contact.footer}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/maciej-marek/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default ModernIndex;
