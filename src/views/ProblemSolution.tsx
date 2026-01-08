import { FaShieldAlt, FaCode, FaServer, FaSearch, FaFileAlt } from 'react-icons/fa';
import chicoProgramador from '../assets/chico-programador.png';

const ProblemSolution = () => {
  return (
    <section id="servicios" className="py-20 px-4 md:px-8 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Simple divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#7C3AED] to-transparent opacity-30" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <FaShieldAlt className="text-[#7C3AED]" />
            <span className="text-white/80 text-sm font-medium">Servicios de Seguridad</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Auditorías y QA para Web2/Web3
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Protección integral para tu infraestructura digital
          </p>
        </div>

        {/* Main Grid - 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda - Imagen */}
          <div className="relative h-112.5 lg:h-137.5 rounded-xl overflow-hidden">
            {/* Overlay oscuro azul/violeta */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1a0b2e]/45 via-[#0f172a]/45 to-[#1e1b4b]/45 z-10" />
            
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 z-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${chicoProgramador})`,
                backgroundPosition: 'center center',
              }}
            />
            
            {/* Borde sutil */}
            <div className="absolute inset-0 border border-white/10 rounded-xl z-20 pointer-events-none" />
          </div>

          {/* Columna Derecha - Contenido */}
          <div className="space-y-8">
            
            {/* Encabezado de Servicios */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Análisis <span className="text-[#7C3AED]">Exhaustivo</span>
              </h3>
              <p className="text-white/60">
                Metodologías expertas para identificar y resolver vulnerabilidades críticas.
              </p>
            </div>

            {/* Lista de Servicios */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaCode className="text-xl text-[#7C3AED]" />,
                  title: "Vulnerabilidades en smart contracts",
                  description: "Revisión de código en contratos Web3."
                },
                {
                  icon: <FaServer className="text-xl text-[#7C3AED]" />,
                  title: "Pentesting Web2 + APIs + cloud",
                  description: "Pruebas en aplicaciones, APIs y entornos cloud."
                },
                {
                  icon: <FaSearch className="text-xl text-[#7C3AED]" />,
                  title: "Revisiones manuales y automatizadas",
                  description: "Análisis humano con herramientas especializadas."
                },
                {
                  icon: <FaFileAlt className="text-xl text-[#7C3AED]" />,
                  title: "Reporte con plan de mitigación",
                  description: "Documentación detallada con soluciones."
                }
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#7C3AED]/30 transition-colors duration-300">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-white/50">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAaZURcneOSbE4eUK7_pYW8nVtFsxFshIfRn0VjMyRHfh2-w/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  font-semibold
                  text-white
                  bg-[#7C3AED]
                  rounded-lg
                  transition-all
                  duration-300
                  hover:bg-[#6d28d9]
                  active:scale-95
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#7C3AED]/50
                "
              >
                <span className='text-white'>Agendar auditoría</span>
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <p className="mt-3 text-sm text-white/50">
                Respuesta en 24-48 horas • Presupuesto sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Simple divider */}
    
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#7C3AED] to-transparent opacity-30" />
    </section>
  );
};

export default ProblemSolution;