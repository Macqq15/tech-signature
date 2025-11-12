import { Badge } from "@/components/ui/badge";

const expertiseCategories = [
  {
    category: "Automation & Integration",
    skills: ["n8n workflow automation", "Complex integrations", "REST APIs", "Webhooks", "Multi-platform publishing"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Claude API", "GPT integration", "Custom AI implementations", "RAG systems", "Semantic search"],
  },
  {
    category: "Newsletter & Publishing",
    skills: ["Multiple ESP integrations", "Content automation", "Email delivery systems", "Platform management"],
  },
  {
    category: "Data & Processing",
    skills: ["FireCrawl", "Web scraping", "NewsAPI", "SERP API", "Pinecone", "Data pipelines"],
  },
];

export const TechnicalExpertise = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          Technical Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Deep technical knowledge across automation, AI, and content systems
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
