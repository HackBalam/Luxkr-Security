import { FaUsers, FaClock, FaCalendarAlt, FaLaptopCode, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import capacitacionesImg from '../assets/capacitaciones.png';
import { useNavigate } from 'react-router-dom'; // Agrega este import

const Training = () => {
  const navigate = useNavigate(); // Crea el hook

  const handleAcademyClick = () => {
    navigate('/academia'); // Navega a la página de academia
  };

  return (
    <section id="capacitaciones" className="py-20 px-4 md:px-8 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Sección Header */}
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] rounded-full border border-[#9333EA]/20 mb-6">
            <FaUsers className="text-[#9333EA]" />
            <span className="text-white text-sm font-medium">Capacitaciones exclusivas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Damos herramientas para fortalecer la seguridad interna
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Formación especializada para incluir la seguridad dentro del ecosistema Web2/Web3.
          </p>
        </div>
      </div>

      {/* Contenedor Principal con Imagen de Fondo */}
      <div className="relative">
        {/* Imagen y overlay */}
        <div className="relative w-full h-125 md:h-150 overflow-hidden rounded-2xl">
          
          {/* Imagen alineada IZQUIERDA CENTRO */}
          <div 
            className="absolute inset-0 z-0 bg-cover"
            style={{
              backgroundImage: `url(${capacitacionesImg})`,
              backgroundPosition: 'left center',
              backgroundSize: 'cover'
            }}
          />

          {/* Overlay violeta–magenta */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(90deg, rgba(124,58,237,0.45) 0%, rgba(204,0,204,0.35) 100%)'
            }}
          />

          {/* Contenido sobre imagen */}
          <div className="relative z-20 h-full container mx-auto max-w-6xl px-4">
            <div className="h-full flex items-center justify-end">
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="bg-[#0a0a0f]/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Beneficios Exclusivos</h2>
                  
                  {/* Beneficios con bordes difuminados */}
                  <div className="space-y-6">
                    {[
                      {
                        title: "Metodología Práctica",
                        description: "Ejercicios reales basados en casos de la industria",
                        icon: <FaLaptopCode className="text-xl text-[#9333EA]" />
                      },
                      {
                        title: "Expertos Certificados",
                        description: "Instructores con experiencia en proyectos reales",
                        icon: <FaUsers className="text-xl text-[#9333EA]" />
                      },
                      {
                        title: "Material Actualizado",
                        description: "Contenido alineado con las últimas amenazas",
                        icon: <FaFileAlt className="text-xl text-[#9333EA]" />
                      }
                    ].map((benefit, index) => (
                      <div 
                        key={index} 
                        className="group relative p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: 'rgba(26, 26, 26, 0.7)',
                          border: '1px solid transparent',
                          position: 'relative'
                        }}
                      >
                        {/* Borde difuminado con gradiente */}
                        <div className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3) 0%, rgba(204, 0, 204, 0.3) 100%)',
                            filter: 'blur(8px)',
                            zIndex: -1
                          }}
                        ></div>
                        
                        {/* Contenido de la tarjeta */}
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-300">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección adicional de información */}
      <div className="container mx-auto max-w-6xl mt-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1a1a1a]/50 p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#9333EA]/20 rounded-lg">
                <FaClock className="text-[#9333EA] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Clases online</h3>
            </div>
            <p className="text-gray-400">
              Adaptamos las sesiones para que puedas aprender desde cualquier lugar, desde la comodidad de tu hogar u oficina.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a]/50 p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#CC00CC]/20 rounded-lg">
                <FaCalendarAlt className="text-[#CC00CC] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Programas Personalizados</h3>
            </div>
            <p className="text-gray-400">
              Diseñamos contenido específico para la comunidad latinoamericana, considerando sus desafíos y necesidades únicas.
            </p>
          </div>
        </div>

        {/* Botón CTA centrado - AHORA CON NAVEGACIÓN */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleAcademyClick} // Agrega el onClick
            className="group relative px-8 py-4 bg-linear-to-r from-[#9333EA] to-[#CC00CC] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#9333EA]/30 transition-all duration-300 hover:scale-105 mx-auto cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <span>Unirse a la Academia</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Training;