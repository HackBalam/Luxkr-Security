// C:\proyectos\prueba\pagina-curso\src\views\Team.tsx
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

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
      color: "#00eeff",
      photo: SergioPhoto
    },
    {
      name: "Daniel Bustamante Lagart",
      role: "Ciberseguridad & Pentesting",
      description: "Especialista en seguridad ofensiva con background en auditorías de grandes corporaciones.",
      expertise: ["Penetration Testing", "Threat Modeling", "Security Audits"],
      color: "#00ff9d",
      photo: DanielPhoto
    },
    {
      name: "Andrea Junes",
      role: "Full-Stack, QA & Arquitectura Web",
      description: "Desarrolladora full-stack con enfoque en calidad y seguridad en aplicaciones web.",
      expertise: ["Web Security", "QA Automation", "Cloud Architecture"],
      color: "#ff00ff",
      photo: AndreaPhoto
    },
    {
      name: "José Andrade",
      role: "Blockchain Developer / Tech Lead",
      description: "Líder técnico especializado en Stellar/Soroban con experiencia en proyectos en producción.",
      expertise: ["Stellar/Soroban", "Rust", "Technical Leadership"],
      color: "#ffaa00",
      photo: JosePhoto
    }
  ];

  return (
    <section id="equipo" className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#0d0716] to-[#0a0a0f] scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00eeff] via-[#00ff9d] to-[#ff00ff] bg-clip-text text-transparent">
              EQUIPO FUNDADOR
            </span>
          </h2>
          <p className="text-xl text-[#ccc] max-w-3xl mx-auto">
            LUXKR+ Core Team - Combinamos décadas de experiencia en blockchain, seguridad y desarrollo para crear la firma líder en auditoría.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-gradient-to-br from-[#0d0d14] to-[#0a0a0f] border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              {/* Avatar con foto */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full border-2 overflow-hidden" style={{ borderColor: member.color }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-[#0a0a0f] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: member.color }} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-center text-sm mb-4" style={{ color: member.color }}>{member.role}</p>
              
              <p className="text-sm text-[#aaa] mb-6 text-center">
                {member.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#888]">Expertise:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${member.color}20`, color: member.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-6">
                <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Team;