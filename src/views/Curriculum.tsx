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

        

      </div>
    </section>
  );
};

export default Curriculum;