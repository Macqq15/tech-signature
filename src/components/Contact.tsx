import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Open to partnerships and technical collaborations
          </p>
          
          <Card className="border border-border shadow-sm bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Working with 6-month runway, focused on high-impact projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4 p-5 rounded-xl bg-section-alt border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">Email</p>
                  <a
                    href="mailto:contact@maciekzawadzki.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    contact@maciekzawadzki.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 rounded-xl bg-section-alt border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">Rzeszów, Poland</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 rounded-xl bg-section-alt border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/maciekzawadzki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    linkedin.com/in/maciekzawadzki
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  variant="hero"
                  className="w-full"
                  size="lg"
                  onClick={() => window.location.href = "mailto:contact@maciekzawadzki.com"}
                >
                  Send an Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
