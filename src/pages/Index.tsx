import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CaseStudies />
      <Services />
      <TechnicalExpertise />
      <Approach />
      <Contact />
      
      <footer className="py-12 bg-accent-dark text-primary-foreground border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Maciek Zawadzki. Building AI-powered operations from Rzeszów, Poland.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
