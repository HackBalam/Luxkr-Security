import { FaTwitter, FaLinkedin, FaGithub, FaShieldAlt, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';

// Importar fotos del equipo
import SergioPhoto from '../../Team/SergioAgilar.png';
import DanielPhoto from '../../Team/DanielLagart.png';
import AndreaPhoto from '../../Team/AndreaJunes.png';
import JosePhoto from '../../Team/JoseRoman.png';

const Team = () => {
  const teamMembers = [
    {
      name: "Sergio Agilar",
      role: "Ingeniería Web3 / DeFi",
      description: "Experto en arquitecturas DeFi y smart contracts. 5+ años en desarrollo blockchain.",
      expertise: ["Smart Contracts", "DeFi Protocols", "System Architecture"],
      color: "#9333EA",
      photo: SergioPhoto
    },
    {
      name: "Daniel Bustamante Lagart",
      role: "Ciberseguridad & Pentesting",
      description: "Especialista en seguridad ofensiva con background en auditorías de grandes corporaciones.",
      expertise: ["Penetration Testing", "Threat Modeling", "Security Audits"],
      color: "#7C3AED",
      photo: DanielPhoto
    },
    {
      name: "Andrea Junes",
      role: "Full-Stack, QA & Arquitectura Web",
      description: "Desarrolladora full-stack con enfoque en calidad y seguridad en aplicaciones web.",
      expertise: ["Web Security", "QA Automation", "Cloud Architecture"],
      color: "#9333EA",
      photo: AndreaPhoto
    },
    {
      name: "José Andrade",
      role: "Blockchain Developer / Tech Lead",
      description: "Líder técnico especializado en Stellar/Soroban con experiencia en proyectos en producción.",
      expertise: ["Stellar/Soroban", "Rust", "Technical Leadership"],
      color: "#7C3AED",
      photo: JosePhoto
    }
  ];

  return (
    <section id="equipo" className="py-24 px-4 md:px-8 bg-[#0a0a0f] relative overflow-hidden scroll-mt-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9333EA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] rounded-full border border-[#9333EA]/20 mb-8">
            <FaUsers className="text-[#9333EA]" />
            <span className="text-white text-sm font-medium tracking-wide">NUESTRO EQUIPO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Expertos en Seguridad <span className="text-[#9333EA]">Web2/Web3</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Combinamos décadas de experiencia en blockchain, seguridad y desarrollo para entregar auditorías de máxima calidad.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#9333EA]/30 hover:translate-y-[-8px] h-full">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/5 group-hover:border-[#9333EA]/20 transition-colors duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-sm" style={{ color: member.color }}>{member.role}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">
                  {member.description}
                </p>
                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-white/5">
                  <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#9333EA]/20 transition-colors duration-300">
                    <FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-300" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#7C3AED]/20 transition-colors duration-300">
                    <FaGithub className="text-gray-400 hover:text-white transition-colors duration-300" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#9333EA]/20 transition-colors duration-300">
                    <FaTwitter className="text-gray-400 hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;