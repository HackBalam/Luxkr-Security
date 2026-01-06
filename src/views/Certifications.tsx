// C:\proyectos\prueba\pagina-curso\src\views\Certifications.tsx
import { FaCertificate, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const Certifications = () => {
  const certificationLevels = [
    {
      level: "Trainee Certificate",
      description: "Fundamentos completos de seguridad blockchain",
      requirements: ["Completar Fase 1", "Aprobar evaluaciones teóricas"],
      color: "from-[#00ff9d] to-[#00cc7a]",
      borderColor: "border-[#00ff9d]"
    },
    {
      level: "Junior Security Auditor",
      description: "Capacidad para auditorías supervisadas",
      requirements: ["Completar Fase 2", "Participar en 2 auditorías supervisadas"],
      color: "from-[#00eeff] to-[#00aacc]",
      borderColor: "border-[#00eeff]"
    },
    {
      level: "Certified Security Auditor",
      description: "Auditor independiente certificado",
      requirements: ["Completar Fase 3", "Aprobar CTF Final", "3 auditorías exitosas"],
      color: "from-[#ff00ff] to-[#cc00cc]",
      borderColor: "border-[#ff00ff]"
    },
    {
      level: "Senior Security Auditor",
      description: "Liderazgo técnico y revisión de auditorías",
      requirements: ["1 año de experiencia", "Mentoría exitosa", "10+ auditorías"],
      color: "from-[#ff5555] to-[#cc0000]",
      borderColor: "border-[#ff5555]"
    }
  ];

  return (
    <section id="certificaciones" className="py-24 px-4 md:px-8 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00eeff] via-[#00ff9d] to-[#ff00ff] bg-clip-text text-transparent">CERTIFICACIONES
            </span>
          </h2>
          <p className="text-xl text-[#ccc] max-w-3xl mx-auto">
            Credenciales verificables emitidas por LUXKR+, almacenadas en blockchain para máxima transparencia y autenticidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationLevels.map((cert, index) => (
            <div key={index} className={`bg-gradient-to-br from-[#0d0d14] to-[#0a0a0f] border-2 ${cert.borderColor} rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                {cert.level.charAt(0)}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                {cert.level}
              </h3>
              
              <p className="text-sm text-[#aaa] mb-4">
                {cert.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold mb-2 text-[#ccc]">Requisitos:</h4>
                <ul className="space-y-1">
                  {cert.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-xs text-[#00ff9d]" />
                      <span className="text-xs">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;