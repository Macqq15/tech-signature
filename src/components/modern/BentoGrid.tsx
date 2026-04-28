import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Mail, ShoppingCart, Brain, Workflow, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "LetterOperators",
    category: "AI SaaS",
    description: "End-to-end AI automation system reducing newsletter production by 92%.",
    stat: "250k+ Emails/Week",
    icon: Mail,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Amazon Ops",
    category: "E-commerce",
    description: "Automated compliance & operations for multi-account sellers.",
    stat: "100% Compliance",
    icon: ShoppingCart,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Sleep Tech",
    category: "Health App",
    description: "Science-backed sleep improvement for high-performers.",
    stat: "In Development",
    icon: Brain,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
  },
  {
    title: "E-commerce Email",
    category: "Revenue Systems",
    description: "Complete email marketing overhaul driving $10M+ in revenue.",
    stat: "$10M+ Generated",
    icon: TrendingUp,
    className: "md:col-span-2 md:row-span-1",
    bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    title: "TREBIT",
    category: "Content Intelligence",
    description: "Automated trend curation generating $60K across two sales windows.",
    stat: "$60K Revenue",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Workflow Core",
    category: "Infrastructure",
    description: "Custom n8n nodes and API integrations for enterprise clients.",
    stat: "500+ Workflows",
    icon: Workflow,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
];

export const BentoGrid = () => {
  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-lg">
              A collection of systems, products, and automations built for scale.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, i) => (
            <Card
              key={i}
              className={cn(
                "group relative overflow-hidden border-white/10 bg-white/5 hover:border-white/20 transition-all duration-500 p-6 flex flex-col justify-between",
                project.className
              )}
            >
              {/* Background Gradient Hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl",
                project.bg
              )} />

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-white">
                  <project.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="relative z-10 space-y-2">
                <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                <div className="pt-2 border-t border-white/10 mt-4">
                  <p className="text-xs font-mono text-white/80">{project.stat}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
