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
import Training from "./views/Training";
import Cases from "./views/Cases";

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
      label: "Inicio",
      bgColor: "#7C3AED",
      textColor: "#FFFFFF",
      links: [
        { label: "Inicio", href: "#inicio", ariaLabel: "Ir al inicio" },
        { label: "Servicios", href: "#servicios", ariaLabel: "Nuestros servicios" },
        { label: "Egresados", href: "#egresados", ariaLabel: "Perfil del egresado" }
      ]
    },
    {
      label: "Programa",
      bgColor: "#6C2BD7", // Morado profundo
      textColor: "#FFFFFF", // Blanco
      links: [
        { label: "Overview", href: "#programa", ariaLabel: "Overview del Programa" },
        { label: "Plan de Formación", href: "#curriculum", ariaLabel: "Plan de Formación" },
        { label: "Certificaciones", href: "#certificaciones", ariaLabel: "Certificaciones" }
      ]
    },
    {
      label: "Comunidad",
      bgColor: "#00BFFF", // Azul eléctrico
      textColor: "#181824", // Gris oscuro
      links: [
        { label: "CTF Final", href: "#ctf", ariaLabel: "CTF Final" },
        { label: "Equipo", href: "#equipo", ariaLabel: "Equipo Fundador" },
        { label: "Contacto", href: "#contacto", ariaLabel: "Contacto" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#181824] text-white overflow-x-hidden">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#181824]/90 backdrop-blur-md' : ''}`}>
        <CardNav 
          items={navItems} 
          logo={logo} 
          baseColor="#181824" // Fondo gris oscuro
          menuColor="#fff" // Blanco para menú hamburguesa
          buttonBgColor="#fff" // Blanco para botón CTA
          buttonTextColor="#000" // Negro para texto de botón
          buttonText="Empezar"
        />
      </div>
      <main>
          <Hero />
          <ProblemSolution />
          <Training />
          <Cases />
          <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;