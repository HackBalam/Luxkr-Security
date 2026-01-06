// C:\proyectos\prueba\pagina-curso\src\views\ProgramOverview.tsx
import { FaShieldAlt, FaRocket, FaGlobeAmericas } from 'react-icons/fa';
import { SiRust, SiStellar } from 'react-icons/si';

const ProgramOverview = () => {
  return (
    <section id="programa" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff00ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00eeff]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-[#00ff9d]/10 rounded-full border border-[#00ff9d]/30">
            <SiStellar className="text-[#00eeff]" />
            <span className="text-[#00eeff] font-mono text-sm tracking-wider">STELLAR • SOROBAN • RUST</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#00ff9d] via-[#00eeff] to-[#ff00ff] bg-clip-text text-transparent">
              PROGRAMA PROFESIONAL
            </span>
          </h2>
          <p className="text-2xl text-[#888] max-w-3xl mx-auto font-mono">
            El camino hacia la élite de la seguridad Web3 en Latinoamérica
          </p>
        </div>


        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group p-6 border border-[#00ff9d]/20 rounded-xl bg-[#0d0d14] hover:border-[#00ff9d] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00ff9d]/10 rounded-lg">
                <FaShieldAlt className="text-2xl text-[#00ff9d]" />
              </div>
              <h4 className="text-xl font-bold">Especialización Exclusiva</h4>
            </div>
            <p className="text-[#aaa]">
              Enfoque único en Stellar/Soroban/Rust con metodologías de auditoría específicas para este ecosistema.
            </p>
          </div>

          <div className="group p-6 border border-[#ff00ff]/20 rounded-xl bg-[#0d0d14] hover:border-[#ff00ff] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#ff00ff]/10 rounded-lg">
                <FaGlobeAmericas className="text-2xl text-[#ff00ff]" />
              </div>
              <h4 className="text-xl font-bold">Enfoque LATAM</h4>
            </div>
            <p className="text-[#aaa]">
              Estándares globales adaptados al contexto y necesidades específicas de Latinoamérica.
            </p>
          </div>

          <div className="group p-6 border border-[#00eeff]/20 rounded-xl bg-[#0d0d14] hover:border-[#00eeff] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00eeff]/10 rounded-lg">
                <FaRocket className="text-2xl text-[#00eeff]" />
              </div>
              <h4 className="text-xl font-bold">Estética Profesional</h4>
            </div>
            <p className="text-[#aaa]">
              Cyberpunk · Hacker · Profesional. Diseño que comunica seguridad, tecnología y confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;