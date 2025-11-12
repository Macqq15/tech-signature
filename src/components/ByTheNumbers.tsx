import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "250,000+",
    label: "Emails Delivered Weekly",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Users,
    number: "20+",
    label: "Active Clients",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: DollarSign,
    number: "$60K",
    label: "Revenue Generated (TREBIT)",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: CheckCircle,
    number: "95%+",
    label: "Email Delivery Rate",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
];

export const ByTheNumbers = () => {
  return (
    <section className="py-24 bg-gradient-purple-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">
          By The Numbers
        </h2>
        <p className="text-center text-white/80 mb-16 text-lg max-w-2xl mx-auto">
          Real results from real automation systems
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
