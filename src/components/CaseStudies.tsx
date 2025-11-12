import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  role: string;
  technologies: string[];
  highlight?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "LetterOperators",
    tagline: "Expertise-Driven Newsletter Service",
    description: "Co-founder with Richard Patey. Productized AI service helping companies create professional newsletters with complete automation from content curation to delivery.",
    metrics: ["250,000+ emails/week", "20+ clients", "12K PLN MRR"],
    role: "Operations lead, full-stack automation, AI integration",
    technologies: ["n8n workflows", "Claude API", "FireCrawl", "NewsAPI", "SERP API", "Multi-platform publishing"],
    highlight: "Complete automation from content curation to delivery",
  },
  {
    title: "TREBIT",
    tagline: "Premium Trends Intelligence",
    description: "Trends-focused community and curated newsletter delivering premium insights to engaged audience.",
    metrics: ["$60K revenue", "Two sales windows"],
    role: "Operations management, content creation, marketing support",
    technologies: ["Community management", "Content curation", "Trend analysis"],
  },
  {
    title: "Wearefasttrack",
    tagline: "E-commerce Operations Excellence",
    description: "Amazon seller operations and optimization agency focused on streamlining workflows and compliance.",
    metrics: ["Multiple seller accounts managed"],
    role: "Operational systems and process automation",
    technologies: ["Amazon Seller Central", "Process automation", "Compliance systems"],
  },
  {
    title: "Space Tech Newsletter",
    tagline: "Deep Tech & Space Economy Insights",
    description: "In development: Exploring emerging space economy and deep tech trends with high-quality curation and analysis for tech-forward audience.",
    metrics: ["In Development"],
    role: "Personal passion project bridging current work with future interests",
    technologies: ["Research", "Curation systems", "Tech analysis"],
  },
  {
    title: "Health Tech for Transportation",
    tagline: "Health Monitoring for Logistics",
    description: "Health tech startup focused on transportation and logistics sector, innovating in driver health and safety monitoring where operational efficiency meets workforce wellbeing.",
    metrics: ["Startup phase"],
    role: "Technical operations",
    technologies: ["Health monitoring", "IoT integration", "Data analytics"],
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          A selection of ventures showcasing automation expertise, operational excellence, and entrepreneurial drive
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {study.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-lg font-semibold text-accent">
                  {study.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {study.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">METRICS</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="text-sm font-medium">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">MY ROLE</h4>
                  <p className="text-muted-foreground text-sm">{study.role}</p>
                </div>
                
                {study.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-sm">TECHNOLOGY STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {study.highlight && (
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-accent font-medium">
                      ✨ {study.highlight}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
