import compuHero from "../assets/compu-hero.jpg";

const Hero = () => {
    return (
        <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Fondo con la imagen de la MacBook */}
            <div className="absolute inset-0">
                {/* Gradiente superior para el título */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0" />
                
                {/* Gradiente inferior para el botón CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
                
                {/* Imagen de la MacBook con efectos de difuminado */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${compuHero})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        maskImage: 'radial-gradient(circle at center, white 30%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 70%)',
                    }}
                />
                
                {/* Efectos de luces violetas adicionales */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-violet-800/5 mix-blend-overlay" />
                
                {/* Partículas sutiles para profundidad */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-purple-500/10 animate-pulse"
                            style={{
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${Math.random() * 3 + 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center text-center gap-8 px-4 w-full max-w-6xl">
                {/* Título principal */}
                <div className="space-y-6">
                    <h1
                        style={{ fontFamily: "var(--title-font)" }}
                        className="
                            text-[clamp(3.5rem,10vw,8rem)]
                            font-bold
                            tracking-tight
                            text-white
                            leading-[0.9]
                            drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]
                            animate-fade-in
                        "
                    >
                        LUXKR+
                    </h1>
                    
                    {/* Subtítulo descriptivo */}
                    <p className="max-w-2xl text-[1.15rem] text-white/90 leading-relaxed font-light tracking-wide mx-auto animate-fade-in delay-100">
                        Protege tu infraestructura Web2/Web3 con auditorías expertas; agenda tu sesión y obtén asesoría gratis.
                    </p>
                </div>

                {/* Botón CTA principal */}
                <div className="animate-fade-in delay-200">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfAaZURcneOSbE4eUK7_pYW8nVtFsxFshIfRn0VjMyRHfh2-w/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            relative
                            inline-block
                            px-12
                            py-5
                            font-semibold
                            tracking-wider
                            text-base
                            text-white
                            bg-gradient-to-r from-purple-600/20 to-violet-600/20
                            backdrop-blur-sm
                            border
                            border-white/20
                            rounded-2xl
                            transition-all
                            duration-500
                            hover:scale-105
                            hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]
                            hover:border-purple-400/40
                            hover:bg-gradient-to-r from-purple-600/30 to-violet-600/30
                            active:scale-95
                            focus:outline-none
                            focus:ring-2
                            focus:ring-purple-500/50
                            overflow-hidden
                        "
                    >
                        {/* Efecto de brillo en hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                        {/* Texto del botón */}
                        <span className="relative flex items-center gap-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
                                Asesoría gratuita
                            </span>
                            <svg
                                className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>
                </div>


            </div>
        </section>
    );
};

export default Hero;