import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Cog, Bot, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Discovery",
    description: "Understand your expertise and audience needs",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Cog,
    step: "Step 2",
    title: "System Design",
    description: "Build custom n8n workflows and AI integrations",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Bot,
    step: "Step 3",
    title: "Content Automation",
    description: "Set up automated curation and quality control",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
  {
    icon: Rocket,
    step: "Step 4",
    title: "Launch & Optimize",
    description: "Deploy and continuously improve performance",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          A proven 4-step process to transform your expertise into an automated newsletter system
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-all duration-300 border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
