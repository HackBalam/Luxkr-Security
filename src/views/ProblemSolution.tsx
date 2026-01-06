// C:\proyectos\prueba\pagina-curso\src\views\ProblemSolution.tsx
import { 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaShieldAlt,
  FaChartLine,
  FaGlobeAmericas,
  FaClock,
  FaMoneyBillWave,
  FaUserTie 
} from 'react-icons/fa';

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0d0a14] relative overflow-hidden">
      
      {/* Neon Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/70 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
            <FaShieldAlt className="text-purple-400 text-xl" />
            <span className="text-white/80 font-medium">Seguridad Blockchain</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">PROBLEMAS</span>
            <span className="text-white/90 mx-4">→</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">SOLUCIÓN</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Cerrando brechas de seguridad en el ecosistema Stellar
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Problema */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-purple-500/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#1a0d14] to-[#0f0a1a] border border-red-500/30 rounded-2xl p-6 md:p-8 h-full">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-900/40 rounded-xl border border-red-500/40">
                  <FaExclamationTriangle className="text-2xl text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Desafíos Críticos</h3>
                  <p className="text-sm text-white/50 mt-1">Ecosistema Stellar LATAM</p>
                </div>
              </div>

              {/* Problema Principal */}
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                <p className="text-lg font-semibold text-red-300">
                  Vulnerabilidades que ponen en riesgo el ecosistema
                </p>
              </div>

              {/* Lista */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: <FaMoneyBillWave className="text-red-400" />, text: "Auditorías internacionales cuestan $50K–$200K" },
                  { icon: <FaClock className="text-red-400" />, text: "Esperas de 3–6 meses para revisiones" },
                  { icon: <FaUserTie className="text-red-400" />, text: "Falta de expertos certificados locales" },
                  { icon: <FaShieldAlt className="text-red-400" />, text: "Infraestructura sin auditorías de seguridad" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-white/90 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Consecuencia */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 animate-pulse flex-shrink-0" />
                  <p className="text-sm text-white/70">
                    Resultado: Capital en riesgo y confianza erosionada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solución */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#0d1a14] to-[#0a141a] border border-emerald-500/30 rounded-2xl p-6 md:p-8 h-full">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-900/40 rounded-xl border border-emerald-500/40">
                  <FaCheckCircle className="text-2xl text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nuestra Respuesta</h3>
                  <p className="text-sm text-white/50 mt-1">Auditorías completas</p>
                </div>
              </div>

              {/* Solución Principal */}
              <div className="mb-6 p-4 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/40 rounded-xl">
                <p className="text-lg font-semibold text-emerald-300">
                  Auditorías profesionales + formación de élite
                </p>
              </div>

              {/* Servicios */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Servicios Clave</h4>
                <div className="space-y-2">
                  {[
                    "Smart Contracts Soroban (Rust)",
                    "Aplicaciones Web3",
                    "Infraestructura Cloud",
                    "Auditorías end-to-end"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-white/90 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ventajas */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Ventajas Clave</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "50-70%", label: "Menor costo", color: "from-emerald-400 to-emerald-500" },
                    { value: "2-4 semanas", label: "Respuesta rápida", color: "from-cyan-400 to-cyan-500" },
                    { value: "Expertos LATAM", label: "Contexto regional", color: "from-emerald-400 to-emerald-500" },
                    { value: "Soporte español", label: "Comunicación nativa", color: "from-cyan-400 to-cyan-500" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg">
                      <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-white/60 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impacto */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FaChartLine className="text-cyan-400 text-lg" />
                  <h4 className="text-lg font-semibold text-white">Impacto Esperado</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "$5M+", label: "TVL protegido" },
                    { value: "10-15", label: "Auditores" },
                    { value: "8-12", label: "Auditorías/año" },
                    { value: "LATAM", label: "Cobertura" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-2 bg-white/5 rounded">
                      <div className="text-sm font-bold text-white">{item.value}</div>
                      <div className="text-xs text-white/50">{item.label}</div>
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