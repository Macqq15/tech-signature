import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudy {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  metrics: string[];
  technologies: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "LetterOperators",
    tagline: "Expertise-Driven Newsletter Service",
    problem: "Companies spend 8-12 hours weekly creating newsletters manually",
    solution: "Built end-to-end automated system with AI curation and quality control",
    result: "Reduced production time to 45 minutes. Now sending 250K+ emails weekly",
    metrics: ["250,000+ emails/week", "20+ clients", "12K PLN MRR", "92% time savings"],
    technologies: ["n8n workflows", "Claude API", "FireCrawl", "Multi-platform publishing"],
  },
  {
    title: "TREBIT",
    tagline: "Premium Trends Intelligence",
    problem: "Manual trend curation taking 15+ hours per week with inconsistent quality",
    solution: "Automated research and content curation pipeline with AI-powered analysis",
    result: "$60K revenue generated across two sales windows with engaged community",
    metrics: ["$60K revenue", "2 sales windows", "Engaged community"],
    technologies: ["Content curation", "Trend analysis", "Community management"],
  },
  {
    title: "Wearefasttrack",
    tagline: "E-commerce Operations Excellence",
    problem: "Amazon sellers struggling with complex compliance and operational workflows",
    solution: "Built automated compliance checking and workflow optimization systems",
    result: "Streamlined operations for multiple seller accounts with zero compliance issues",
    metrics: ["Multiple accounts managed", "100% compliance rate"],
    technologies: ["Process automation", "Compliance systems", "Amazon Seller Central"],
  },
  {
    title: "Space Tech Newsletter",
    tagline: "Deep Tech & Space Economy Insights",
    problem: "Lack of curated, technical content for space economy professionals",
    solution: "Building automated curation system for deep tech and space industry news",
    result: "In Development - Creating high-signal newsletter for tech-forward audience",
    metrics: ["In Development", "High-tech focus"],
    technologies: ["Research automation", "Tech analysis", "Curation systems"],
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Real problems solved with automated systems that deliver measurable results
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-2 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-accent">
                  {study.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Problem */}
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">PROBLEM</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">SOLUTION</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">RESULT</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-primary mb-3 text-sm">KEY METRICS</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="text-sm font-medium">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm">TECHNOLOGY STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
