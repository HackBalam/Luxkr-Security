import { FaTwitter, FaLinkedin, FaGithub, FaTelegram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiStellar } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="contacto" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#9333EA] to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 pt-20 pb-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-linear-to-br from-[#9333EA]/20 to-[#CC00CC]/20 rounded-lg">
                  <SiStellar className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider text-white">LUXKR+</h3>
                  <p className="text-sm text-[#9333EA] font-mono">Security Auditing Firm</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Primera firma profesional de auditoría de seguridad blockchain especializada en Stellar/Soroban en Latinoamérica. Protegiendo el futuro de Web3.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-[#9333EA]" />
                <span>Latinoamérica · Remoto Global</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">PROGRAMA</h4>
              <ul className="space-y-2">
                <li><a href="#programa" className="text-gray-400 hover:text-[#9333EA] transition-colors">Overview</a></li>
                <li><a href="#curriculum" className="text-gray-400 hover:text-[#9333EA] transition-colors">Plan de Formación</a></li>
                <li><a href="#certificaciones" className="text-gray-400 hover:text-[#9333EA] transition-colors">Certificaciones</a></li>
                <li><a href="#ctf" className="text-gray-400 hover:text-[#9333EA] transition-colors">CTF Final</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">CONTACTO</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:luxkr@proton.me" className="flex items-center gap-2 text-gray-400 hover:text-[#9333EA] transition-colors">
                    <FaEnvelope className="text-[#9333EA]" />
                    <span>luxkr@proton.me</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+R2JMS0zIj51iZTMx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#CC00CC] transition-colors">
                    <FaTelegram className="text-[#CC00CC]"/>
                    <span>Telegram Community</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-bold mb-3 text-gray-500">SÍGUENOS</h4>
                <div className="flex gap-3">
                  <a href="https://x.com/luxkrlatam" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#9333EA]/20 transition-colors">
                    <FaTwitter className="text-lg text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#9333EA]/20 transition-colors">
                    <FaLinkedin className="text-lg text-white" />
                  </a>
                  <a href="https://github.com/HackBalam/Luxkr-Security" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#9333EA]/20 transition-colors">
                    <FaGithub className="text-lg text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} LUXKR+. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#9333EA] transition-colors">Términos</a>
              <a href="#" className="text-gray-500 hover:text-[#9333EA] transition-colors">Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-[#9333EA] transition-colors">Cookies</a>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center">
            <p className="text-lg font-bold text-white">
              <span className="text-[#9333EA]">No estamos formando estudiantes.</span>{' '}
              Estamos construyendo la empresa que protegerá el futuro de{' '}
              <span className="text-[#CC00CC]">Stellar</span> en Latinoamérica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;