// C:\proyectos\prueba\pagina-curso\src\App.tsx
import { useEffect, useState } from "react";
import CardNav from "./components/CardNav/CardNav";
import logo from "./assets/logo.png";
import Hero from "./views/Hero";
import ProgramOverview from "./views/ProgramOverview";
import ProblemSolution from "./views/ProblemSolution";
import Curriculum from "./views/Curriculum";
import CTF from "./views/CTF";
import Certifications from "./views/Certifications";
import Graduates from "./views/Graduates";
import Team from "./views/Team";
import Footer from "./views/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Programa",
      bgColor: "#0D0716",
      textColor: "#00ff9d",
      links: [
        { label: "Overview", href: "#programa", ariaLabel: "Overview del Programa" },
        { label: "Plan de Formación", href: "#curriculum", ariaLabel: "Plan de Formación" },
        { label: "Certificaciones", href: "#certificaciones", ariaLabel: "Certificaciones" }
      ]
    },
    {
      label: "Problemática",
      bgColor: "#170D27",
      textColor: "#ff00ff",
      links: [
        { label: "Problema", href: "#problema", ariaLabel: "Problema" },
        { label: "Solución", href: "#solucion", ariaLabel: "Solución" },
        { label: "Impacto", href: "#impacto", ariaLabel: "Impacto" }
      ]
    },
    {
      label: "Comunidad",
      bgColor: "#271E37",
      textColor: "#00eeff",
      links: [
        { label: "CTF Final", href: "#ctf", ariaLabel: "CTF Final" },
        { label: "Equipo", href: "#equipo", ariaLabel: "Equipo Fundador" },
        { label: "Contacto", href: "#contacto", ariaLabel: "Contacto" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md' : ''}`}>
        <CardNav 
          items={navItems} 
          logo={logo} 
          baseColor="#0a0a0f" 
          menuColor="#00ff9d" 
          buttonBgColor="#fff"
          buttonTextColor="#000"
        />
      </div>
      
      <main>
        <Hero />
        <ProgramOverview />
        <ProblemSolution />
        <Curriculum />
        <CTF />
        <Certifications />
        <Graduates />

        <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;