import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Workflow className="w-16 h-16 text-white" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Zap className="w-12 h-12 text-white" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Mail className="w-14 h-14 text-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="text-white animate-fade-in-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I Turn Your Expertise Into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-pink-300">
                Automated Newsletter Systems
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              AI-powered automation that sends 250,000+ emails weekly for 20+ clients. 
              From content curation to delivery—fully automated.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("how-it-works")}
                className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                See How It Works
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-ruby-gold rounded-full blur-2xl opacity-30 animate-glow" />
              
              {/* Photo Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Maciek Zawadzki"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 animate-float">
                <Workflow className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 animate-float" style={{ animationDelay: "1.5s" }}>
                <Zap className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
