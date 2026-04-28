import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AgenticEngineering from "./pages/AgenticEngineering";
import AgencyStarterLTO from "./pages/AgencyStarterLTO";
import AgencyOTO1 from "./pages/AgencyOTO1";
import AgencyOTO2 from "./pages/AgencyOTO2";
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
            <Route path="/old" element={<Index />} />
            <Route path="/agentic-engineering" element={<AgenticEngineering />} />
            <Route path="/agency-starter-lto" element={<AgencyStarterLTO />} />
            <Route path="/agency-oto1" element={<AgencyOTO1 />} />
            <Route path="/agency-oto2" element={<AgencyOTO2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
