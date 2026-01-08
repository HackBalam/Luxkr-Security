import React from 'react';
import { Shield, Terminal, Code, Bug, Lock, FileCode, ChevronRight, Users, Award, Zap, BookOpen, Clock, Target, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Module {
  month: string;
  title: string;
  icon: React.ElementType;
  topics: string[];
}

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const Academy = () => {
  const navigate = useNavigate();
  
  // Módulos del curso
  const modules: Module[] = [
    {
      month: "Mes 1",
      title: "Fundamentos & Redes",
      icon: Terminal,
      topics: ["Modelos OSI/TCP-IP", "MITRE ATT&CK", "Wireshark básico", "Protocolos de red", "Análisis de tráfico"],
    },
    {
      month: "Mes 2",
      title: "Linux, Windows & Kali",
      icon: Code,
      topics: ["Nmap, Netcat", "Burp Suite básico", "Enumeración de servicios", "Bash scripting", "Administración de sistemas"],
    },
    {
      month: "Mes 3",
      title: "Pentesting Web2",
      icon: Bug,
      topics: ["OWASP Top 10", "Burp Suite Avanzado", "SQLi, XSS, CSRF", "Inyección de comandos", "Fuzzing"],
    },
    {
      month: "Mes 4",
      title: "Exploits & PrivEsc",
      icon: Lock,
      topics: ["Pivoting", "Escalada de privilegios", "Buffer Overflow", "Exploit development", "Post-explotación"],
    },
    {
      month: "Mes 5",
      title: "Blockchain & Rust",
      icon: FileCode,
      topics: ["Stellar & Soroban", "Rust essentials", "Testing & deploy", "Smart contracts", "Web3 fundamentals"],
    },
    {
      month: "Mes 6",
      title: "Auditoría Web3",
      icon: Shield,
      topics: ["Reentrancy attacks", "Access control", "Informe profesional", "DeFi security", "Auditoría completa"],
    },
  ];



  // Características del programa
  const features = [
    {
      icon: BookOpen,
      title: "Aprendizaje práctico",
      description: "Laboratorios reales y ejercicios basados en casos de la industria"
    },
    {
      icon: Target,
      title: "Enfoque en resultados",
      description: "Preparación para certificaciones internacionales y empleo inmediato"
    },
    {
      icon: Shield,
      title: "Comunidad exclusiva",
      description: "Acceso a red de profesionales y oportunidades de networking"
    },
    {
      icon: Zap,
      title: "Ritmo intensivo",
      description: "Programa acelerado diseñado para maximizar el aprendizaje"
    }
  ];

  // Handlers corregidos
  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://t.me/+R2JMS0zIj51iZTMx", "_blank", "noopener,noreferrer");
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfAaZURcneOSbE4eUK7_pYW8nVtFsxFshIfRn0VjMyRHfh2-w/viewform?usp=dialog", "_blank", "noopener,noreferrer");
  };

  const handleCurriculumClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('temario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStatsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler para ir a home
  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* REMOVÍ EL HEADER DUPLICADO - El navbar global ya está manejando esto */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-purple-300">
                Inscripciones abiertas 2026
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Formación <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">Élite</span> en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Ciberseguridad
              </span>{' '}
              y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Web3
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Domina hacking ético, pentesting y auditoría de contratos inteligentes 
              en solo seis meses. Enfoque 100% práctico con herramientas reales del mercado.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleApplyClick}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Quiero más información</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleCurriculumClick}
                className="px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Ver programa completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Modules Section */}
      <section id="temario" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">
              Programa completo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Ruta de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Aprendizaje
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Seis meses de formación intensiva diseñados para convertirte en un profesional de élite.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      {module.month}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center">
                      <module.icon className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-300 transition-colors">
                    {module.title}
                  </h3>
                  
                  {/* Topics List */}
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para dominar la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ciberseguridad
              </span>
              ?
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Únete a nuestra comunidad de Telegram y recibe información exclusiva sobre el programa, 
              fechas de inicio, becas disponibles y acceso a material gratuito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleTelegramClick}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Unirse al grupo de Telegram</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleApplyClick}
                className="px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Aplicar ahora
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Cupos limitados • Inicio próximo cohorte: 15 de Marzo 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer Academy */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg">
                  LUXKR+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CYBERACADEMY</span>
                </span>
                <p className="text-xs text-gray-500 mt-1">Formación Élite en Ciberseguridad</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-gray-400 mb-2">
                © 2026 LUXKR+ CyberAcademy — Todos los derechos reservados
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={handleTelegramClick}
                  className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
                >
                  Telegram
                </button>
                <a href="mailto:luxkr@proton.me" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                  Contacto
                </a>
                <button 
                  onClick={handleGoHome}
                  className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
                >
                  ← Volver a LUXKR+
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academy;