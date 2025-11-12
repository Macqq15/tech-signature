import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Efficiency over perfection",
  "Partnership-driven, not cold outreach",
  "Technical excellence with business pragmatism",
  "2-hour daily work blocks (optimized for maximum impact)",
  "Building enablers for deeper tech exploration",
];

export const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            Approach & Philosophy
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            How I work and what drives my approach to building systems
          </p>
          
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="pt-10 pb-10">
              <div className="space-y-5">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-lg text-foreground">{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
