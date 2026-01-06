// C:\proyectos\prueba\pagina-curso\src\views\ProblemSolution.tsx
import {
  FaCheckCircle,
  FaShieldAlt
} from 'react-icons/fa';

const ProblemSolution = () => {
  return (
    <section id="servicios" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0d0a14] relative overflow-hidden">
      
      {/* Neon Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/70 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
            <FaShieldAlt className="text-[#7C3AED] text-xl" />
            <span className="text-white/80 font-medium">Seguridad Blockchain</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#FF00FF] bg-clip-text text-transparent">NUESTROS SERVICIOS DE CIBERSEGURIDAD</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Cerrando brechas de seguridad en el ecosistema Stellar
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {/* Solución */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-[#A78BFA]/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-2xl p-6 md:p-8 h-full">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#7C3AED]/30 rounded-xl border border-[#7C3AED]/40">
                  <FaCheckCircle className="text-2xl text-[#A78BFA]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nuestra Respuesta</h3>
                  <p className="text-sm text-white/50 mt-1">Auditorías completas</p>
                </div>
              </div>

              {/* Solución Principal */}
              <div className="mb-6 p-4 bg-gradient-to-r from-[#7C3AED]/10 to-[#A78BFA]/10 border border-[#7C3AED]/30 rounded-xl">
                <p className="text-lg font-semibold text-[#D7C9FF]">
                  Auditorías profesionales
                </p>
              </div>

              {/* Servicios */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#A78BFA] mb-3">Servicios Clave</h4>
                <div className="space-y-2">
                  {[
                    "Auditoría de Smart Contracts Web3",
                    "Auditorías a nivel aplicativo (Web/Móvil)",
                    "Auditorías de infraestructuras Web2/Web3",
                    "Auditorías end-to-end",
                    "Próximamente: Leyes y Regulaciones sobre el tratamiento de datos personales"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full flex-shrink-0" />
                      <span className="text-[#E5E7EB] text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ventajas */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#A78BFA] mb-3">Ventajas Clave</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "50-70%", label: "Menor costo", color: "from-[#00FF9D] to-[#7C3AED]" },
                    { value: "2-4 semanas", label: "Respuesta rápida", color: "from-[#00EEFF] to-[#7C3AED]" },
                    { value: "Expertos LATAM", label: "Contexto regional", color: "from-[#00FF9D] to-[#7C3AED]" },
                    { value: "Soporte español", label: "Comunicación nativa", color: "from-[#00EEFF] to-[#7C3AED]" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-[#1A1A2E]/60 rounded-lg">
                      <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-[#E5E7EB]/60 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>

      </div>

      {/* Neon Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
      </div>
    </section>
  );
};

export default ProblemSolution;