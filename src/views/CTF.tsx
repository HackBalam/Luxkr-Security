// C:\proyectos\prueba\pagina-curso\src\views\CTF.tsx
import { FaTrophy, FaCertificate, FaFlag } from 'react-icons/fa';

const CTF = () => {
  return (
    <section id="ctf" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0d0a14] scroll-mt-24 relative overflow-hidden">
      
      {/* Línea superior - Purple Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl">
        
        {/* Header Minimal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 mb-6">
            <FaFlag className="text-purple-400" />
            <span className="text-sm text-white/80">Competencia Final</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CTF de Certificación
            </span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            La prueba definitiva para auditores de seguridad
          </p>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "72h", label: "Duración", color: "text-purple-400" },
            { value: "$10K", label: "Premios", color: "text-yellow-400" },
            { value: "100%", label: "Práctico", color: "text-cyan-400" },
            { value: "On-Chain", label: "Certificación", color: "text-emerald-400" }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
              <div className="text-xs text-white/50">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left - Challenge */}
          <div className="p-6 bg-gradient-to-br from-[#1a0d1a] to-[#0f0a1a] rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-900/40 rounded-lg border border-purple-500/30">
                <FaTrophy className="text-xl text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Desafío Profesional</h3>
                <p className="text-sm text-purple-300">Escenarios reales de auditoría</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                "Infraestructura completa Web2 + Web3",
                "Smart Contracts en producción",
                "Evaluación técnica integral",
                "Ranking público de resultados"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Rewards */}
          <div className="p-6 bg-gradient-to-br from-[#0d1a14] to-[#0a141a] rounded-xl border border-yellow-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-900/40 rounded-lg border border-yellow-500/30">
                <FaCertificate className="text-xl text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Premios</h3>
                <p className="text-sm text-yellow-300">Recompensas en USD</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { place: "1er Lugar", amount: "$5,000", color: "from-yellow-400 to-yellow-300" },
                { place: "2do Lugar", amount: "$3,000", color: "from-gray-300 to-gray-400" },
                { place: "3er Lugar", amount: "$2,000", color: "from-amber-600 to-amber-500" }
              ].map((prize, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">{prize.place}</span>
                  <span className={`text-lg font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                    {prize.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Línea inferior - Yellow Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
      </div>

    </section>
  );
};

export default CTF;