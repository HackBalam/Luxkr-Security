// C:\proyectos\prueba\pagina-curso\src\views\Graduates.tsx
import { FaCode, FaSearch, FaFileAlt, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Graduates = () => {
  const abilities = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Auditar smart contracts Soroban en Rust",
      description: "Análisis completo de contratos inteligentes en el ecosistema Stellar"
    },
    {
      icon: <FaSearch className="text-2xl" />,
      title: "Analizar infraestructura Web2 + Web3",
      description: "Evaluación de seguridad en toda la stack tecnológica"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Detectar vulnerabilidades críticas reales",
      description: "Identificación de riesgos en ambientes de producción"
    },
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "Redactar reportes técnicos de nivel industria",
      description: "Comunicación profesional de hallazgos a equipos técnicos y ejecutivos"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Trabajar directamente con equipos y clientes",
      description: "Gestión de relaciones y comunicación efectiva"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Operar desde el día uno en producción",
      description: "Capacidad inmediata para contribuir en auditorías reales"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0d0716]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00eeff] via-[#00ff9d] to-[#ff00ff] bg-clip-text text-transparent">
              PERFIL DEL EGRESADO
            </span>
          </h2>
          <p className="text-xl text-[#ccc] max-w-3xl mx-auto">
            El/la Auditor/a LUXKR+ es un profesional capaz de operar en el más alto nivel 
            de la industria de seguridad blockchain desde el primer día.
          </p>
        </div>

        {/* Abilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {abilities.map((ability, index) => (
            <div key={index} className="group p-6 bg-gradient-to-br from-[#0d0d14] to-[#0a0a0f] border border-white/10 rounded-xl hover:border-[#00eeff] transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#00eeff]/20 to-[#00ff9d]/10 rounded-lg">
                  <div className="text-[#00eeff]">
                    {ability.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{ability.title}</h3>
                  <p className="text-sm text-[#aaa]">{ability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Graduates;