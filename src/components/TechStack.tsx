import { Card } from "@/components/ui/card";
import { Workflow, Bot, Database, Zap, FileSearch, Mail, Globe, Code } from "lucide-react";

const technologies = [
  { name: "n8n", icon: Workflow, color: "text-purple-600", bgColor: "bg-purple-100" },
  { name: "Claude AI", icon: Bot, color: "text-blue-600", bgColor: "bg-blue-100" },
  { name: "Pinecone", icon: Database, color: "text-cyan-600", bgColor: "bg-cyan-100" },
  { name: "NewsAPI", icon: Globe, color: "text-green-600", bgColor: "bg-green-100" },
  { name: "FireCrawl", icon: FileSearch, color: "text-orange-600", bgColor: "bg-orange-100" },
  { name: "SERP API", icon: Code, color: "text-pink-600", bgColor: "bg-pink-100" },
  { name: "Multiple ESPs", icon: Mail, color: "text-indigo-600", bgColor: "bg-indigo-100" },
  { name: "API Integration", icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-100" },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          Tools & Technologies I Work With
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Leveraging the best tools to build robust automation systems
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 border-2 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-16 h-16 ${tech.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <p className="text-center font-semibold text-primary text-sm">
                  {tech.name}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
