import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Calendly embed.
 * Reads the booking URL from window.__TEMULTUOUS_CALENDLY_URL or import.meta.env.VITE_CALENDLY_URL.
 * Falls back to a CTA button that opens a placeholder mailto if no URL configured yet.
 *
 * Lazy-loads the Calendly inline-widget script only when this component mounts —
 * avoids loading 3rd-party JS for visitors who never reach the offer section.
 */
interface Props {
  onOpen?: () => void;
}

const CALENDLY_URL =
  typeof window !== "undefined" && (window as any).__TEMULTUOUS_CALENDLY_URL
    ? (window as any).__TEMULTUOUS_CALENDLY_URL
    : import.meta.env.VITE_CALENDLY_URL || "";

export default function CalendlyEmbed({ onOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!CALENDLY_URL) return;
    // Load Calendly script once
    if ((window as any).Calendly) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
    // Stylesheet
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  // Fire onOpen the first time the embed becomes visible
  useEffect(() => {
    if (!ref.current || !onOpen) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            onOpen();
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [onOpen]);

  if (!CALENDLY_URL) {
    // Calendly URL not yet wired — fall back to a real mailto so warm leads
    // never hit a dead end. Maciej forwards to Roger from this address.
    return (
      <div ref={ref} className="bg-card border-2 border-primary/30 rounded-2xl p-6 text-center">
        <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
        <p className="text-base font-bold mb-3">Ready to talk?</p>
        <p className="text-sm text-muted-foreground mb-5">
          Email Roger directly — he'll book you a 30-min call within 24 hours.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a
            href="mailto:maciej@maciejmarek.com?subject=Temu%20UK%20opportunity%20call&body=Hi%20Roger%2C%0A%0AI%20just%20ran%20a%20Temu%20UK%20scan%20for%20my%20category%20and%20I%27d%20like%20to%20talk%20about%20the%20%22free%20until%20%C2%A35K%22%20offer.%0A%0ABusiness%3A%20%0AProduct%20type%3A%20"
            onClick={() => onOpen?.()}
          >
            Email Roger <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden border border-border"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "660px" }}
      />
      <noscript>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a 30-minute call <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </noscript>
    </div>
  );
}
