// C:\proyectos\prueba\pagina-curso\src\views\Curriculum.tsx
import { FaCode, FaShieldAlt, FaBriefcase } from 'react-icons/fa';

const Curriculum = () => {
  const phases = [
    {
      title: "FASE 1 — FORMACIÓN TÉCNICA",
      duration: "Meses 1–2",
      icon: <FaCode className="text-3xl" />,
      color: "border-[#00eeff]",
      bgColor: "bg-gradient-to-br from-[#0a0d14] to-[#070a1a]",
      items: [
        "Rust avanzado para blockchain",
        "Arquitectura profunda de Soroban",
        "Criptografía aplicada",
        "Seguridad en infraestructura cloud",
        "Pentesting de aplicaciones web",
        "Metodologías profesionales de auditoría"
      ]
    },
    {
      title: "FASE 2 — ESPECIALIZACIÓN EN AUDITORÍA",
      duration: "Meses 3–4",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "border-[#ff00ff]",
      bgColor: "bg-gradient-to-br from-[#140a14] to-[#1a071a]",
      items: [
        "Vulnerabilidades en contratos Soroban",
        "Análisis estático y dinámico de código",
        "Threat modeling avanzado",
        "Testing y fuzzing profesional",
        "Seguridad DeFi y lógica económica",
        "Herramientas de auditoría (Semgrep, CodeQL)"
      ]
    },
    {
      title: "FASE 3 — PRÁCTICA PROFESIONAL",
      duration: "Meses 5–6",
      icon: <FaBriefcase className="text-3xl" />,
      color: "border-[#00ff9d]",
      bgColor: "bg-gradient-to-br from-[#0a140d] to-[#071a0d]",
      items: [
        "Auditorías reales supervisadas",
        "Comunicación con clientes",
        "Procesos de remediación",
        "Escritura de reportes profesionales",
        "Gestión de proyectos de auditoría",
        "Ética profesional"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-24 px-4 md:px-8 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00ff9d] via-[#00eeff] to-[#ff00ff] bg-clip-text text-transparent">
              PLAN DE FORMACIÓN
            </span>
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {phases.map((phase, index) => (
            <div key={index} className={`${phase.bgColor} border-2 ${phase.color} rounded-2xl p-8 relative overflow-hidden`}>
              <div className="absolute top-4 right-4 opacity-10">
                {phase.icon}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                    <p className="text-[#00ff9d] font-mono">{phase.duration}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${phase.color.replace('border', 'bg')}`} />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-sm text-[#888] font-mono">
                  {index === 0 && "Fundamentos técnicos esenciales"}
                  {index === 1 && "Especialización avanzada en auditoría"}
                  {index === 2 && "Experiencia real en producción"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA secundario: agendar sesión */}
        <div className="text-center mt-6">
          <a
            href="https://t.me/+R2JMS0zIj51iZTMx"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "group relative inline-block px-12 py-5 font-semibold tracking-wider text-base text-white bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] hover:border-purple-400/40 hover:bg-gradient-to-r from-purple-600/30 to-violet-600/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 overflow-hidden"
            }
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">Quiero ser auditor</span>
              <svg className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;