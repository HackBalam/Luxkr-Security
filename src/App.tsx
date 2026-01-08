// C:\Users\Andrea\Documents\GitHub\Luxkr-Security\src\App.tsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./views/Hero";
import ProblemSolution from "./views/ProblemSolution";
import Team from "./views/Team";
import Footer from "./components/Footer";
import Training from "./views/Training";
import Cases from "./views/Cases";
import Academy from './pages/Academy';

// Componente que envuelve toda la app y maneja el navbar global
const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Throttle del scroll para mejor performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Determinar si mostrar el footer (no mostrar en academia)
  const showFooter = location.pathname !== '/academia';

  return (
    <div className="min-h-screen bg-[#181824] text-white overflow-x-hidden">
      {/* Navbar fijo que aparece en TODAS las páginas */}
      <Navbar isScrolled={isScrolled} />
      
      <main className="pt-16"> {/* Añade padding-top para compensar navbar fijo */}
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero />
              <ProblemSolution />
              <Training />
              <Cases />
              <Team />
            </>
          } />
          
          <Route path="/academia" element={<Academy />} />
        </Routes>
      </main>
      
      {/* Footer solo en página principal */}
      {showFooter && <Footer />}
    </div>
  );
};

// Componente para manejar scroll al cambiar de página
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;