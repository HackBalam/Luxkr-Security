// C:\proyectos\prueba\pagina-curso\src\views\Footer.tsx
import { FaTwitter, FaLinkedin, FaGithub, FaTelegram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiStellar } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="contacto" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 pt-20 pb-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#00ff9d] via-[#00eeff] to-[#ff00ff] bg-clip-text text-transparent">
                ¿Listo para convertirte en auditor?
              </span>
            </h2>
            <p className="text-xl text-[#ccc] max-w-3xl mx-auto mb-12">
              Aplica ahora al programa profesional de auditoría de seguridad blockchain y únete a la élite de la seguridad Web3 en Latinoamérica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#00ff9d] to-[#00eeff] text-black font-bold rounded-xl hover:shadow-glowStrong transition-all duration-300">
                APLICAR AL PROGRAMA
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-bold rounded-xl hover:bg-[#ff00ff]/10 transition-all duration-300">
                UNIRSE A LA COMUNIDAD
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-[#00ff9d]/20 to-[#00eeff]/20 rounded-lg">
                  <SiStellar className="text-3xl text-[#00eeff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider">LUXKR+</h3>
                  <p className="text-sm text-[#00ff9d] font-mono">Security Auditing Firm</p>
                </div>
              </div>
              <p className="text-[#888] mb-6 max-w-md">
                Primera firma profesional de auditoría de seguridad blockchain especializada en Stellar/Soroban en Latinoamérica. Protegiendo el futuro de Web3.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <FaMapMarkerAlt />
                <span>Latinoamérica · Remoto Global</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#00eeff]">PROGRAMA</h4>
              <ul className="space-y-2">
                <li><a href="#programa" className="text-[#ccc] hover:text-[#00ff9d] transition-colors">Overview</a></li>
                <li><a href="#curriculum" className="text-[#ccc] hover:text-[#00ff9d] transition-colors">Plan de Formación</a></li>
                <li><a href="#certificaciones" className="text-[#ccc] hover:text-[#00ff9d] transition-colors">Certificaciones</a></li>
                <li><a href="#ctf" className="text-[#ccc] hover:text-[#00ff9d] transition-colors">CTF Final</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#00eeff]">CONTACTO</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:luxkr@proton.me" className="flex items-center gap-2 text-[#ccc] hover:text-[#00ff9d] transition-colors">
                    <FaEnvelope />
                    <span>luxkr@proton.me</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-[#ccc] hover:text-[#00ff9d] transition-colors">
                    <FaTelegram />
                    <span>Telegram Community</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-bold mb-3 text-[#888]">SÍGUENOS</h4>
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#00eeff]/20 transition-colors">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#00eeff]/20 transition-colors">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#00eeff]/20 transition-colors">
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#666]">
              © {new Date().getFullYear()} LUXKR+. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#666] hover:text-[#00ff9d] transition-colors">Términos</a>
              <a href="#" className="text-[#666] hover:text-[#00ff9d] transition-colors">Privacidad</a>
              <a href="#" className="text-[#666] hover:text-[#00ff9d] transition-colors">Cookies</a>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center">
            <p className="text-lg font-bold text-[#00eeff]">
              No estamos formando estudiantes. Estamos construyendo la empresa que protegerá el futuro de Stellar en Latinoamérica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;