import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Maciek transformed our newsletter operations. What used to take our team 12 hours now takes less than an hour, and the quality has actually improved.",
    author: "Client Name",
    company: "Company Name",
    role: "CEO",
  },
  {
    quote: "The automation system Maciek built for us handles 50,000+ emails per week flawlessly. Best investment we've made in our content operations.",
    author: "Partner Name",
    company: "LetterOperators",
    role: "Co-founder",
  },
  {
    quote: "From idea to fully automated system in just 3 weeks. Maciek's technical expertise and understanding of newsletter operations is exceptional.",
    author: "Client Name",
    company: "Tech Company",
    role: "Marketing Director",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-teal-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white">
          What Clients Say
        </h2>
        <p className="text-center text-white/80 mb-16 text-lg max-w-2xl mx-auto">
          Real feedback from real partnerships
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8">
                <Quote className="w-10 h-10 text-white/40 mb-4" />
                <p className="text-white/90 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                  <p className="text-white/70 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
