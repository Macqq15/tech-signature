import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import ModernIndex from "./pages/ModernIndex";
import LetterOperators from "./pages/LetterOperators";
import AgenticEngineering from "./pages/AgenticEngineering";
import AgenticEngineeringV2 from "./pages/AgenticEngineeringV2";
import AgenticEngineeringV3 from "./pages/AgenticEngineeringV3";
import AgencyStarter from "./pages/AgencyStarter";
import AgencyStarterLTO from "./pages/AgencyStarterLTO";
import AgencyOTO1 from "./pages/AgencyOTO1";
import AgencyOTO2 from "./pages/AgencyOTO2";
import AgencyOTO3 from "./pages/AgencyOTO3";
import AgencyThankYou from "./pages/AgencyThankYou";
import TikTokFlowPrivacy from "./pages/TikTokFlowPrivacy";
import TikTokFlowTerms from "./pages/TikTokFlowTerms";
import TikTokFlowCallback from "./pages/TikTokFlowCallback";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RootRoute = () => {
  const isMaciejmarek = typeof window !== "undefined" && window.location.hostname.includes("maciejmarek");
  return isMaciejmarek ? <Index /> : <AgenticEngineering />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
