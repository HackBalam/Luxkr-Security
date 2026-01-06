// C:\proyectos\prueba\pagina-curso\src\views\ProgramOverview.tsx
import { FaShieldAlt, FaRocket, FaGlobeAmericas } from 'react-icons/fa';
import { SiStellar } from 'react-icons/si';

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
              ¿Te interesa trabajar con nosotros?
            </span>
          </h2>
          <p className="text-2xl text-[#888] max-w-3xl mx-auto font-mono">
            El camino hacia la élite de la seguridad Web3 en Latinoamérica
          </p>
          <div className="text-center mt-8">
            <a
              href="https://t.me/+R2JMS0zIj51iZTMx"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-12 py-5 font-semibold tracking-wider text-base text-white bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] hover:border-purple-400/40 hover:bg-gradient-to-r from-purple-600/30 to-violet-600/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">Quiero ser auditor</span>
                <svg className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>


        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="group p-6 border border-[#00ff9d]/20 rounded-xl bg-[#0d0d14] hover:border-[#00ff9d] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00ff9d]/10 rounded-lg">
                <FaShieldAlt className="text-2xl text-[#00ff9d]" />
              </div>
              <h4 className="text-xl font-bold">Unirte a la comunidad</h4>
            </div>
            <p className="text-[#aaa]">
              Únete a nuestro canal para recibir actualizaciones, participar en debates y conectar con auditores y proyectos. Preséntate y comparte tu interés para ser considerado en oportunidades.
            </p>
          </div>

          <div className="group p-6 border border-[#ff00ff]/20 rounded-xl bg-[#0d0d14] hover:border-[#ff00ff] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#ff00ff]/10 rounded-lg">
                <FaGlobeAmericas className="text-2xl text-[#ff00ff]" />
              </div>
              <h4 className="text-xl font-bold">Participa en los talleres</h4>
            </div>
            <p className="text-[#aaa]">
              Inscríbete en nuestros talleres prácticos para adquirir habilidades en auditoría de smart contracts, pruebas de seguridad y respuesta a incidentes. Completa los ejercicios y recibe feedback técnico para colaborar con nuestro equipo.
            </p>
          </div>

          <div className="group p-6 border border-[#ffb86b]/20 rounded-xl bg-[#0d0d14] hover:border-[#ffb86b] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#ffb86b]/10 rounded-lg">
                <FaRocket className="text-2xl text-[#ffb86b]" />
              </div>
              <h4 className="text-xl font-bold">Compite en el CTF final</h4>
            </div>
            <p className="text-[#aaa]">
              Participa en nuestro CTF final para demostrar tus capacidades técnicas. Los mejores participantes recibirán reconocimiento, acceso prioritario a procesos de selección y oportunidades de colaboración.
            </p>
          </div>

          <div className="group p-6 border border-[#00eeff]/20 rounded-xl bg-[#0d0d14] hover:border-[#00eeff] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00eeff]/10 rounded-lg">
                <FaGlobeAmericas className="text-2xl text-[#00eeff]" />
              </div>
              <h4 className="text-xl font-bold">Certifícate con nosotros</h4>
            </div>
            <p className="text-[#aaa]">
              Completa el programa formativo y supera la evaluación para obtener una certificación que valide tu competencia en auditorías Web2/Web3. Envía tu portafolio para acceder a procesos de contratación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;