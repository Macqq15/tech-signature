import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-accent-dark text-primary-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Maciek Zawadzki</h3>
            <p className="text-white/70 mb-4">
              Building AI-powered automation systems that transform expertise into scalable newsletter operations.
            </p>
            <p className="text-white/60 text-sm">
              Based in Rzeszów, Poland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("case-studies")} className="hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/maciekzawadzki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/maciekzawadzki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:maciek@letteroperators.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Maciek Zawadzki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
