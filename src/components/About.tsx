export const About = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Technical expertise meets entrepreneurial drive
          </p>
          
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                31-year-old entrepreneur specializing in automation and AI agents, with deep expertise in building operational systems that scale. I focus on creating efficient, partnership-driven solutions that bridge technical excellence with business pragmatism.
              </p>
              <p>
                As co-founder of <span className="font-semibold text-primary">LetterOperators</span>, I lead operations and full-stack automation, building AI-powered newsletter systems that handle 250,000+ emails weekly. My technical expertise spans n8n workflows, API integrations, and content automation—always focused on creating systems that work reliably at scale.
              </p>
              <p>
                I operate with a disciplined approach: 2-hour daily work blocks optimized for maximum impact, building enablers that free up time for deeper exploration into areas like space economy and deep tech. My work ethic centers on efficiency over perfection, with a strong preference for partnerships over cold outreach.
              </p>
              <p>
                Currently working with a 6-month runway, I'm focused on high-impact projects that leverage my operational expertise while creating space to explore emerging technologies in the space and deep tech sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
