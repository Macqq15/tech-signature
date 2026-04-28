import { Home, User, Briefcase, Mail, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: Cpu, label: "Stack", href: "#stack" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const FloatingNav = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            onClick={() => scrollTo(item.href)}
            className="rounded-full hover:bg-white/10 hover:text-white text-muted-foreground transition-all duration-300 w-12 h-12"
          >
            <item.icon className="w-5 h-5" />
            <span className="sr-only">{item.label}</span>
          </Button>
        ))}
        <div className="w-px h-6 bg-white/10 mx-2" />
        <Button
          className="rounded-full bg-white text-black hover:bg-white/90 px-6"
          onClick={() => scrollTo("#contact")}
        >
          Book Call
        </Button>
      </div>
    </div>
  );
};
