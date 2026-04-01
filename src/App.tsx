import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import PackConfigurator from "./pages/PackConfigurator";
import Passport from "./pages/Passport";
import Auth from "./pages/Auth";
import PartnerDashboard from "./pages/PartnerDashboard";
import NotFound from "./pages/NotFound";
import ConciergeWidget from "@/components/ConciergeWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <div style={{ background: 'red', color: 'white', padding: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '10px' }}>
          DEBUG: App Version 2.0 (HeritagePass Branding Active)
        </div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packs" element={<PackConfigurator />} />
            <Route path="/passport" element={<Passport />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/partner" element={<PartnerDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ConciergeWidget />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
