import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Bot, FileText, Settings } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Newsletter Automation & AI Agents",
    description: "Complete automation setup from content curation to delivery with AI-powered quality control.",
    deliverables: [
      "Complete automation setup",
      "AI-powered content curation",
      "Quality control systems",
      "Multi-platform publishing",
    ],
    timeline: "2-4 weeks",
  },
  {
    icon: Workflow,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "n8n Workflow Development",
    description: "Custom workflow design with complex API integrations and monitoring systems.",
    deliverables: [
      "Custom workflow design",
      "API integrations",
      "Error handling & monitoring",
      "Complete documentation",
    ],
    timeline: "1-3 weeks",
  },
  {
    icon: FileText,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    title: "Content Automation Systems",
    description: "AI-powered content processing with semantic search and intelligent routing.",
    deliverables: [
      "Content curation pipeline",
      "AI processing integration",
      "Quality assurance systems",
      "Performance analytics",
    ],
    timeline: "2-3 weeks",
  },
  {
    icon: Settings,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    title: "Technical Operations",
    description: "Full-stack automation and system optimization for operational excellence.",
    deliverables: [
      "Workflow optimization",
      "System integration",
      "Process automation",
      "Ongoing support",
    ],
    timeline: "1-4 weeks",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          What I Offer
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Comprehensive automation services with clear deliverables and timelines
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-sm">DELIVERABLES</h4>
                    <div className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <Badge variant="secondary" className="text-sm">
                      Timeline: {service.timeline}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
