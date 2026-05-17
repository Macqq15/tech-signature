import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Lazy-load every page so each route ships in its own chunk.
// Initial bundle = React + Router + shell only — pages load on demand.
const Index = lazy(() => import("./pages/Index"));
const ModernIndex = lazy(() => import("./pages/ModernIndex"));
const LetterOperators = lazy(() => import("./pages/LetterOperators"));
const AgenticEngineering = lazy(() => import("./pages/AgenticEngineering"));
const AgenticEngineeringV2 = lazy(() => import("./pages/AgenticEngineeringV2"));
const AgenticEngineeringV3 = lazy(() => import("./pages/AgenticEngineeringV3"));
const AgencyStarter = lazy(() => import("./pages/AgencyStarter"));
const AgencyStarterLTO = lazy(() => import("./pages/AgencyStarterLTO"));
const AgencyOTO1 = lazy(() => import("./pages/AgencyOTO1"));
const AgencyOTO2 = lazy(() => import("./pages/AgencyOTO2"));
const AgencyOTO3 = lazy(() => import("./pages/AgencyOTO3"));
const AgencyThankYou = lazy(() => import("./pages/AgencyThankYou"));
const Temultuous = lazy(() => import("./pages/Temultuous"));
const TikTokFlowPrivacy = lazy(() => import("./pages/TikTokFlowPrivacy"));
const TikTokFlowTerms = lazy(() => import("./pages/TikTokFlowTerms"));
const TikTokFlowCallback = lazy(() => import("./pages/TikTokFlowCallback"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RootRoute = () => {
  const isMaciejmarek = typeof window !== "undefined" && window.location.hostname.includes("maciejmarek");
  return isMaciejmarek ? <ModernIndex /> : <AgenticEngineering />;
};

// Minimal fallback while a route chunk loads. Intentionally invisible at first
// so the page transition stays clean — only shows after 200ms if loading is slow.
const RouteFallback = () => (
  <div className="min-h-[100svh] grid place-items-center bg-background" aria-busy="true" aria-live="polite">
    <div className="opacity-0 animate-[fade-in_0.3s_ease-out_0.2s_forwards]">
      <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<RootRoute />} />
              <Route path="/modern" element={<ModernIndex />} />
              <Route path="/old" element={<Index />} />
              <Route path="/letter-operators" element={<LetterOperators />} />
              <Route path="/agentic-engineering" element={<AgenticEngineering />} />
              <Route path="/agentic-engineering-v2" element={<AgenticEngineeringV2 />} />
              <Route path="/agentic-engineering-v3" element={<AgenticEngineeringV3 />} />
              <Route path="/agency-starter" element={<AgencyStarter />} />
              <Route path="/agency-starter-lto" element={<AgencyStarterLTO />} />
              <Route path="/agency-oto1" element={<AgencyOTO1 />} />
              <Route path="/agency-oto2" element={<AgencyOTO2 />} />
              <Route path="/agency-oto3" element={<AgencyOTO3 />} />
              <Route path="/agency-thank-you" element={<AgencyThankYou />} />
              <Route path="/temultuous" element={<Temultuous />} />
              <Route path="/tiktokflow/privacy" element={<TikTokFlowPrivacy />} />
              <Route path="/tiktokflow/terms" element={<TikTokFlowTerms />} />
              <Route path="/tiktokflow/callback" element={<TikTokFlowCallback />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/terms-of-service" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
