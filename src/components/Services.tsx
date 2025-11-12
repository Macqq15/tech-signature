import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Bot, FileText, Settings } from "lucide-react";

const services = [
  {
    icon: Bot,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    title: "Newsletter Automation & AI Agents",
    description: "Complete newsletter systems from content curation to delivery. AI-powered processing with quality control and multi-platform publishing.",
  },
  {
    icon: Workflow,
    iconBg: "bg-accent-orange/10",
    iconColor: "text-accent-orange",
    title: "n8n Workflow Development",
    description: "Complex automation workflows and API integrations. Building scalable systems that handle high-volume operations reliably.",
  },
  {
    icon: FileText,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Content Automation Systems",
    description: "AI-powered content processing, curation, and quality control. Semantic search, RAG systems, and intelligent content routing.",
  },
  {
    icon: Settings,
    iconBg: "bg-muted",
    iconColor: "text-foreground",
    title: "Technical Operations",
    description: "Full-stack automation and system optimization. Streamlining workflows, building enablers, and eliminating manual processes.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          What I Offer
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Technical expertise focused on automation, AI integration, and operational excellence
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition-all duration-300 border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
