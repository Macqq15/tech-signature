import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ready to automate your newsletter? Let's talk about your project
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 border-border shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Tell me about your project and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newsletter">Newsletter Automation</SelectItem>
                        <SelectItem value="n8n">n8n Workflow</SelectItem>
                        <SelectItem value="content">Content Automation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Email</p>
                      <a
                        href="mailto:maciek@letteroperators.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        maciek@letteroperators.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/maciekzawadzki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        linkedin.com/in/maciekzawadzki
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Schedule a Call</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Book on Calendly
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 bg-gradient-purple-blue text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Quick Response Time</h3>
                  <p className="text-white/90">
                    I typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to reach out via LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
