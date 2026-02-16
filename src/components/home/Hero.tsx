import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-rocket-dark">
            {/* Animated Background */}
            <div className="absolute inset-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-hero-gradient z-10" />
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(1000px)_rotateX(60deg)] origin-top h-[200%] w-full opacity-30 animate-pulse-glow" />

                {/* Floating Particles (CSS Only for performance) */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-rocket-cyan/30 blur-sm animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 5 + 2}px`,
                            height: `${Math.random() * 5 + 2}px`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.h1
                    className="font-title font-bold text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(0,217,255,0.3)]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: y2 }}
                >
                    ALCANZA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rocket-blue via-rocket-cyan to-white">
                        TU RANGO
                    </span>
                </motion.h1>

                <motion.p
                    className="font-subtitle text-1xl md:text-2xl text-rocket-textSecondary tracking-widest uppercase mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{ y: y1 }}
                >
                    Coaching 1-on-1 con dos jugadores Grand Champion 2 (1600 MMR).<br />
                    Más de 4000 horas de experiencia. Jugamos contigo, corregimos tus errores y te ayudamos a subir.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="https://www.fiverr.com/rlboosting_es" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                            Reservar en Fiverr ($29)
                        </Button>
                    </a>
                    <a href="#coaching-plans">
                        <Button variant="secondary" size="lg">
                            Ver Paquetes
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs tracking-[0.3em] uppercase">Desplázate</span>
                <div className="w-px h-12 bg-gradient-to-b from-rocket-cyan to-transparent" />
            </motion.div>
        </section>
    );
};
