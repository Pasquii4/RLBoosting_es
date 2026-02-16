import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../Button';

const TestimonialCard = ({ name, rank, change, quote, avatar, stars }: { name: string, rank: string, change: string, quote: string, avatar: string, stars: number }) => (
    <div className="bg-rocket-card border border-white/5 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group hover:border-rocket-cyan/30 transition-colors duration-300">
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote size={80} className="text-rocket-cyan" />
        </div>

        <div className="flex items-center gap-4 mb-6 z-10">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rocket-cyan shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-white text-xl font-title tracking-wide">{name}</h4>
                <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="text-gray-400 font-medium">{rank}</span>
                    <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded text-xs border border-green-500/20">
                        {change}
                    </span>
                </div>
            </div>
        </div>

        <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={`${i < stars ? 'text-rocket-orange fill-rocket-orange' : 'text-gray-600'} mr-1`} />
            ))}
        </div>

        <p className="text-gray-300 italic leading-relaxed text-lg flex-1 z-10">
            "{quote}"
        </p>
    </div>
);

export const Testimonials = () => {
    const testimonials = [
        {
            name: "John D.",
            rank: "Grand Champion I",
            change: "Diamond III → GC I",
            quote: "Este coaching cambió mi juego por completo. Pasé de estar estancado en Diamante por 3 temporadas a llegar a GC en solo 2 meses.",
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
            stars: 5
        },
        {
            name: "Sarah K.",
            rank: "Champion II",
            change: "Platinum II → Champ II",
            quote: "La herramienta de análisis de repeticiones es una locura. Ver mis errores de rotación visualizados frame a frame lo hizo muy fácil de corregir.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            stars: 5
        },
        {
            name: "Mike T.",
            rank: "SSL",
            change: "GC III → SSL",
            quote: "Llegar a SSL se trata de consistencia. Los entrenamientos diarios y el coaching de mentalidad me ayudaron a rendir bajo presión.",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
            stars: 5
        },
        {
            name: "Alex R.",
            rank: "Diamond III",
            change: "Gold III → Diamond III",
            quote: "Nunca pensé que pasaría de Oro. Los packs de mecánicas están perfectamente estructurados para progresar.",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
            stars: 4
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section className="py-24 bg-rocket-dark border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="font-title font-bold text-4xl text-white uppercase text-center md:text-left mb-2">Historias de Éxito</h2>
                    <p className="text-gray-400 text-center md:text-left max-w-lg">
                        Únete a miles de jugadores que han subido de nivel con RLCOACH.
                    </p>
                </div>

                {/* Desktop Controls */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rocket-cyan hover:text-rocket-dark hover:border-rocket-cyan transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rocket-cyan hover:text-rocket-dark hover:border-rocket-cyan transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="container mx-auto px-6 relative h-[400px] md:h-[350px]">
                <div className="relative w-full h-full max-w-4xl mx-auto">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full"
                        >
                            <TestimonialCard {...testimonials[activeIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination Dots & Mobile Controls */}
            <div className="container mx-auto px-6 mt-8 flex flex-col items-center gap-6">
                <div className="flex gap-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'bg-rocket-cyan w-8'
                                : 'bg-white/20 hover:bg-white/40'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden gap-8 w-full justify-between items-center max-w-xs">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/5 text-white active:bg-rocket-cyan active:text-rocket-dark transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/5 text-white active:bg-rocket-cyan active:text-rocket-dark transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};
