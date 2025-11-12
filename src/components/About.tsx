export const About = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            What I Do
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Transforming expertise into scalable automation systems
          </p>
          
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border">
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                I help companies transform their expertise into automated newsletter systems. As co-founder of <span className="font-semibold text-primary">LetterOperators</span>, I've built AI-powered workflows that handle everything from content curation to delivery—eliminating hours of manual work while maintaining quality.
              </p>
              <p>
                My expertise spans n8n automation, API integrations, and content systems that scale. I focus on creating reliable operations that work consistently, allowing businesses to focus on their expertise rather than newsletter logistics.
              </p>
              <p>
                Based in <span className="font-medium">Rzeszów, Poland</span>, working with clients globally through partnership-driven approach. Every system I build is designed for scale, reliability, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
