import React, { useEffect, useRef } from 'react';
import { FaClock, FaChartLine, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import auditoriasImg from '../assets/auditorias.jpg';

const Cases = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('step-card')) {
              const index = Array.from(cardsRef.current).indexOf(entry.target as HTMLDivElement);
              entry.target.classList.add('animate-fade-up');
              (entry.target as HTMLElement).style.animationDelay = `${index * 100}ms`;
            } else if (entry.target === statsRef.current) {
              entry.target.classList.add('animate-fade-up');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Tiempo de entrega',
      icon: FaClock,
      description: 'Respuesta rápida con garantía de calidad',
      metrics: [
        { value: '2-4', unit: 'semanas', note: 'dependiendo del alcance' },
        { value: '24-48', unit: 'horas', note: 'respuesta inicial' }
      ],
      color: 'border-l-[#9333EA]'
    },
    {
      number: '02',
      title: 'Resultados típicos',
      icon: FaCheckCircle,
      description: 'Entregables que generan valor real',
      items: [
        'Reporte detallado con vulnerabilidades priorizadas',
        'Plan de mitigación paso a paso',
        'Recomendaciones específicas por tecnología',
        'Seguimiento post-auditoría incluido'
      ],
      color: 'border-l-[#9333EA]'
    },
    {
      number: '03',
      title: 'Vulnerabilidades que encontramos',
      icon: FaShieldAlt,
      description: 'Las fallas más comunes en sistemas Web2/Web3',
      badges: [
        'Inyección SQL',
        'XSS',
        'Config. insegura',
        'Auth. débil',
        'Logging insuf.',
        'CSRF'
      ],
      color: 'border-l-[#9333EA]'
    }
  ];

  const stats = [
    { value: '98%', label: 'Claudicación de vulnerabilidades críticas' },
    { value: '150+', label: 'Auditorías completadas' },
    { value: '0', label: 'Incidentes post-auditoría' },
    { value: '24/7', label: 'Soporte durante auditoría' }
  ];

  return (
    <>
      {/* Divisor superior */}
      <div className="relative h-24 bg-[#0a0a0f]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            {/* Línea decorativa */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9333EA]/30 to-transparent"></div>
            
            {/* Círculo decorativo central */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-[#9333EA]/30 bg-[#0a0a0f] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#CC00CC] opacity-70"></div>
                </div>
                
                {/* Elementos decorativos alrededor */}
                <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-[#9333EA]/20"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border border-[#9333EA]/20"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full border border-[#9333EA]/20"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full border border-[#9333EA]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="casos" className="py-24 px-4 md:px-8 bg-[#0a0a0f] relative overflow-hidden">
        {/* Header */}
        <div className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] rounded-full border border-[#9333EA]/20 mb-8">
              <FaChartLine className="text-[#9333EA]" />
              <span className="text-white text-sm font-medium tracking-wide">
                RESULTADOS Y MÉTRICAS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Qué puede esperar tu empresa
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Transparencia y resultados medibles en cada auditoría, con procesos claros y entregables de valor.
            </p>
          </div>
        </div>

        {/* Main Content with Image */}
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Steps */}
            <div className="lg:col-span-2 space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className={`step-card bg-[#1a1a1a] p-8 rounded-2xl border ${step.color} opacity-0 border-white/5`}
                >
                  {/* Step Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#9333EA]/10 rounded-xl flex items-center justify-center border border-[#9333EA]/20">
                        <span className="text-2xl font-bold text-[#9333EA]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="text-[#9333EA] text-xl" />
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Content */}
                  {step.metrics && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-8">
                        {step.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-300 font-medium">
                              {metric.unit}
                            </div>
                            {metric.note && (
                              <div className="text-xs text-gray-500 mt-1">
                                {metric.note}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.items && (
                    <div className="space-y-3">
                      {step.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#9333EA] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.badges && (
                    <div className="flex flex-wrap gap-2">
                      {step.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-lg text-sm font-medium border border-[#9333EA]/20"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Stats Grid */}
              <div 
                ref={statsRef}
                className="opacity-0 translate-y-8"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5"
                    >
                      <div className="text-center">
                        <div className={`text-4xl font-bold mb-3 ${
                          index === 2 ? 'text-[#FF00FF]' : 'text-[#9333EA]'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image & CTA */}
            <div className="space-y-8">
              {/* Image Container */}
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
                {/* Overlay Gradients */}
                <div className="absolute inset-0 z-10">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.4) 0%, rgba(124, 58, 237, 0.3) 30%, rgba(255, 0, 255, 0.25) 100%)',
                      backgroundPosition: 'top left'
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
                </div>
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${auditoriasImg})`,
                    backgroundPosition: 'center 30%'
                  }}
                />
                
                {/* Analysis Indicators (Desktop only) */}
                <div className="hidden lg:block absolute top-6 left-6 z-20">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-[#9333EA]/30 w-48">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-white">ANÁLISIS EN CURSO</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs text-gray-300 mb-1">
                          <span>Vulnerabilidades</span>
                          <span>78%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-[#9333EA] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-300 mb-1">
                          <span>Revisión de código</span>
                          <span>92%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-[#FF00FF] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white font-medium mb-1">
                      Auditoría de seguridad en tiempo real
                    </p>
                    <p className="text-xs text-gray-400">
                      Monitoreo continuo y reporte de resultados
                    </p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-15 pointer-events-none" />
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-[#9333EA]/10 to-[#7C3AED]/5 p-8 rounded-2xl border border-[#9333EA]/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¿Listo para una auditoría profesional?
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Obtén un análisis preliminar sin costo y confidencialidad garantizada.
                  </p>
                  
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfAaZURcneOSbE4eUK7_pYW8nVtFsxFshIfRn0VjMyRHfh2-w/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      w-full
                      px-8
                      py-4
                      font-semibold
                      text-white
                      bg-[#9333EA]
                      hover:bg-[#7C3AED]
                      rounded-xl
                      transition-all
                      duration-300
                      active:scale-[0.98]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#9333EA]/50
                      border-0
                    "
                  >
                    <span className="text-white">Solicitar auditoría personalizada</span>
                    <FaArrowRight className="text-lg text-white transition-transform group-hover:translate-x-1" />
                  </a>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-500">
                      Proceso confidencial • Respuesta en 24 horas • Sin compromiso inicial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor inferior */}
      <div className="relative h-24 bg-[#0a0a0f]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            {/* Línea decorativa */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CC00CC]/30 to-transparent"></div>
            
            {/* Elementos decorativos en los extremos */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9333EA]"></div>
                <div className="w-2 h-2 rounded-full bg-[#CC00CC]"></div>
                <div className="w-2 h-2 rounded-full bg-[#9333EA]"></div>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#CC00CC]"></div>
                <div className="w-2 h-2 rounded-full bg-[#9333EA]"></div>
                <div className="w-2 h-2 rounded-full bg-[#CC00CC]"></div>
              </div>
            </div>
            
            {/* Círculo decorativo central */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9333EA]/20 to-[#CC00CC]/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#CC00CC] opacity-50 animate-pulse"></div>
                </div>
                
                {/* Anillo exterior */}
                <div className="absolute -inset-2 border border-[#9333EA]/10 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Cases;