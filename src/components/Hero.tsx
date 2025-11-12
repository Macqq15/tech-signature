import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-card border border-border rounded-full mb-8">
            <p className="text-sm font-medium text-muted-foreground">
              Building AI-powered operations from Rzeszów, Poland
            </p>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-primary leading-tight">
            Maciek Zawadzki
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-foreground/80">
            Entrepreneur & Automation Specialist
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building expertise-driven newsletter systems and AI-powered automation workflows. 
            Specializing in n8n, content automation, and operational excellence.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8 py-6 h-auto"
            >
              Get in Touch
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base px-8 py-6 h-auto"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
