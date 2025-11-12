import { Hero } from "@/components/Hero";
import { ByTheNumbers } from "@/components/ByTheNumbers";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { Testimonials } from "@/components/Testimonials";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ByTheNumbers />
      <About />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <TechnicalExpertise />
      <Testimonials />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
