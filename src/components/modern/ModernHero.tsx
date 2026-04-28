import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const ModernHero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-4 text-center">
        <div className="animate-fade-in-up">
          <Badge variant="outline" className="mb-6 py-1.5 px-4 border-white/10 bg-white/5 text-white/80 backdrop-blur-md text-sm uppercase tracking-wider hover:bg-white/10 transition-colors cursor-default">
            Available for new projects
          </Badge>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="text-gradient">Architecting</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
              Digital Velocity
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I build high-performance digital products and automation systems.
            <span className="text-white font-medium block mt-2">
              $10M+ Revenue Generated • 250k+ Weekly Emails • 100% Automated
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center gap-2 group"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
