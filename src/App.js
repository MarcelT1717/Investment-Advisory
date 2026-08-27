import "@/App.css";
import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Insights from "@/pages/Insights";
import BlogLibrary from "@/pages/BlogLibrary";
import MarketIntelligence from "@/pages/MarketIntelligence";
import Perspectives from "@/pages/Perspectives";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Disclosures from "@/pages/Disclosures";
import ConsultationModal from "@/components/ConsultationModal";
import { ConsultationProvider, useConsultation } from "@/context/ConsultationContext";

// React Router doesn't manage scroll position on its own. Cross-page links
// with a hash (e.g. the header's "Our Approach" dropdown, /services#some-id)
// need to land on that section; plain navigations (e.g. one service detail
// page to another, both long pages) need to land at the top instead of
// carrying over the previous page's scroll offset.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const { isModalOpen, closeConsultationModal } = useConsultation();

  return (
    <div className="App">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/library" element={<BlogLibrary />} />
          <Route path="/insights/market-intelligence" element={<MarketIntelligence />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclosures" element={<Disclosures />} />
        </Routes>
      </main>
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={closeConsultationModal} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ConsultationProvider>
        <AppContent />
      </ConsultationProvider>
    </BrowserRouter>
  );
}

export default App;

