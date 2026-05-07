import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { CurrentStatus, FormSubmission } from "@/lib/temultuous/types";

interface Props {
  onSubmit: (data: FormSubmission) => void;
}

const STATUS_OPTIONS: Array<{ value: CurrentStatus; label: string }> = [
  { value: "never_sold", label: "Never sold on Temu" },
  { value: "tried_didnt_work", label: "Tried it, didn't work" },
  { value: "already_selling", label: "Already selling, want to scale" },
  { value: "looking_into_it", label: "Looking into it now" },
];

const TRUST_BULLETS = [
  { icon: Zap, text: "Live data. We pull Temu UK in front of you." },
  { icon: Globe, text: "Built for UK manufacturers. Hazmat. Furniture. Anything Chinese sellers can't ship." },
  { icon: ShieldCheck, text: "Free until you've sold £5,000. Then we take a cut. Aligned." },
];

export default function LandingForm({ onSubmit }: Props) {
  const [productType, setProductType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus | "">("");
  const [touched, setTouched] = useState(false);

  const isValid = productType.trim().length > 1 && businessName.trim().length > 1 && /.+@.+\..+/.test(email) && currentStatus !== "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onSubmit({
      productType: productType.trim(),
      businessName: businessName.trim(),
      email: email.trim(),
      currentStatus: currentStatus as CurrentStatus,
    });
  };

  return (
    <section className="min-h-[100svh] bg-background text-foreground">
      <div className="container max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Temu UK · Live opportunity scanner
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Britain's manufacturers are missing the easiest{" "}
            <span className="text-primary">£20M opportunity</span> of 2026.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Temu UK promised the government 50% of sales would come from UK sellers. Right now? Nowhere near. Especially in your category.
            Tell us what you make. We'll show you live what's selling, what's missing, and where you fit.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-xl shadow-primary/5"
        >
          <div className="grid gap-6">
            <div>
              <Label htmlFor="productType" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                What do you make?
              </Label>
              <Input
                id="productType"
                placeholder="e.g. aerosol cleaners, garden furniture, mattresses"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="mt-2 h-12 text-base bg-background border-border focus-visible:ring-primary"
                autoComplete="off"
              />
              {touched && productType.trim().length < 2 && (
                <p className="mt-1 text-xs text-destructive">Tell us what you make — even one product line is fine.</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Business name
                </Label>
                <Input
                  id="businessName"
                  placeholder="Your company"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-2 h-12 text-base bg-background border-border focus-visible:ring-primary"
                />
                {touched && businessName.trim().length < 2 && (
                  <p className="mt-1 text-xs text-destructive">We'll need a name on the report.</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 text-base bg-background border-border focus-visible:ring-primary"
                  autoComplete="email"
                />
                {touched && !/.+@.+\..+/.test(email) && (
                  <p className="mt-1 text-xs text-destructive">Real email please — that's where we'll send the report.</p>
                )}
              </div>
            </div>

            <div>
              <Label className="text-sm font-bold uppercase tracking-wider text-foreground/80">Where are you with Temu right now?</Label>
              <RadioGroup
                value={currentStatus}
                onValueChange={(v) => setCurrentStatus(v as CurrentStatus)}
                className="mt-3 grid sm:grid-cols-2 gap-3"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    htmlFor={`status-${opt.value}`}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      currentStatus === opt.value
                        ? "border-primary bg-[hsl(var(--accent))]"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <RadioGroupItem value={opt.value} id={`status-${opt.value}`} className="border-primary text-primary" />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                ))}
              </RadioGroup>
              {touched && currentStatus === "" && (
                <p className="mt-1 text-xs text-destructive">Pick one — it shapes how we run the analysis.</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-14 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Show me my Temu opportunity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We'll pull Temu UK live data for your category. Takes about 90 seconds. No card needed. No spam.
            </p>
          </div>
        </motion.form>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {TRUST_BULLETS.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--accent))] grid place-items-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
