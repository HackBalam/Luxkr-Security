import compuHero from "../assets/compu-hero.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  
  // Handler para navegar a la página de Academia
  const handleAcademyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/academia');
  };

  // Handler para auditoría
  const handleAuditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfAaZURcneOSbE4eUK7_pYW8nVtFsxFshIfRn0VjMyRHfh2-w/viewform?usp=dialog",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Efecto para animaciones
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Fondo con la imagen de la MacBook */}
      <div className="absolute inset-0">
        {/* Gradiente superior para el título */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0" />
        
        {/* Gradiente inferior para el botón CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
        
        {/* Imagen de la MacBook con efectos de difuminado */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${compuHero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maskImage: 'radial-gradient(circle at center, white 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 70%)',
          }}
        />
        
        {/* Efectos de luces violetas adicionales */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-violet-800/5 mix-blend-overlay" />
        
        {/* Partículas sutiles para profundidad */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-500/10 animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 px-4 w-full max-w-4xl">
        {/* Título principal */}
        <div className="space-y-8">
          <h1
            className="
              text-[clamp(2.5rem,8vw,4.5rem)]
              font-bold
              tracking-tight
              text-white
              leading-[1.1]
              drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
              animate-fade-in
              opacity-0
              translate-y-8
              transition-all
              duration-700
            "
          >
            Auditorías Web2/Web3 y Capacitaciones
          </h1>
          
          {/* Subtítulo descriptivo */}
          <p className="max-w-2xl text-[1.25rem] md:text-[1.4rem] text-white/90 leading-relaxed font-light tracking-wide mx-auto animate-fade-in delay-100 opacity-0 translate-y-8 transition-all duration-700">
            Detectamos vulnerabilidades en tus sistemas y formamos equipos 
            para que puedan prevenir ataques cibernéticos.
          </p>
        </div>

        {/* Contenedor de botones CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in delay-200 opacity-0 translate-y-8 transition-all duration-700">
          {/* CTA 1 - Primario */}
          <button
            onClick={handleAuditClick}
            className="
              group
              relative
              inline-block
              px-10
              py-4
              font-semibold
              tracking-wider
              text-base
              md:text-lg
              text-white
              bg-gradient-to-r from-purple-600 to-violet-600
              backdrop-blur-sm
              border
              border-purple-500/30
              rounded-xl
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]
              hover:border-purple-400
              hover:bg-gradient-to-r from-purple-700 to-violet-700
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500/50
              overflow-hidden
              min-w-[220px]
              text-center
            "
          >
            {/* Efecto de brillo en hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

            {/* Texto del botón */}
            <span className="relative flex items-center justify-center gap-3">
              <span className="text-white">Solicitar auditoría</span>
              <svg
                className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* CTA 2 - Secundario */}
          <button
            onClick={handleAcademyClick}
            className="
              group
              relative
              inline-block
              px-10
              py-4
              font-semibold
              tracking-wider
              text-base
              md:text-lg
              text-white
              bg-gradient-to-r from-gray-800/60 to-gray-900/60
              backdrop-blur-sm
              border
              border-white/20
              rounded-xl
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
              hover:border-white/40
              hover:bg-gradient-to-r from-gray-800/80 to-gray-900/80
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-white/30
              overflow-hidden
              min-w-[220px]
              text-center
              cursor-pointer
            "
          >
            {/* Efecto de brillo en hover (opcional, para consistencia) */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            {/* Texto del botón */}
            <span className="relative flex items-center justify-center gap-3">
              <span className="text-white">Capacitarme</span>
              <svg
                className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;