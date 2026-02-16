import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
    {
        name: "Carlos M.",
        rankBefore: "Diamond II",
        rankAfter: "Champion I",
        text: "Increíble la diferencia en solo 2 sesiones. Me enseñaron a rotar correctamente y a dejar de regalar balones. Totalmente recomendado.",
        rating: 5,
        date: "Hace 2 semanas"
    },
    {
        name: "Miguel A.",
        rankBefore: "Platinum III",
        rankAfter: "Diamond II",
        text: "Llevaba estancado en Platino meses. Fusila me explicó mis errores de posicionamiento y en una semana subí a Diamante. Muy profesionales.",
        rating: 5,
        date: "Hace 1 mes"
    },
    {
        name: "David R.",
        rankBefore: "Champion I",
        rankAfter: "Champion III",
        text: "Buscaba ese empujón final para GC. El análisis de replay fue súper detallado, vimos errores que ni sabía que cometía en shadow defense.",
        rating: 5,
        date: "Hace 3 semanas"
    }
];

const stats = [
    { label: "Sesiones Realizadas", value: "50+" },
    { label: "Satisfacción", value: "98%" },
    { label: "Valoración Fiverr", value: "4.9★" },
    { label: "Mejora Promedio", value: "2.5 Rangos" }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
    <motion.div
        className="bg-rocket-card border border-white/5 p-6 rounded-2xl relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Quote className="absolute top-4 right-4 text-white/5 w-8 h-8" />
        <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
        </div>
        <p className="text-white/80 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <div>
                <h4 className="font-title text-white">{testimonial.name}</h4>
                <p className="text-xs text-white/40">{testimonial.date}</p>
            </div>
            <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-white/40 mb-1">
                    <TrendingUp size={12} />
                    Progreso
                </div>
                <div className="text-xs font-mono">
                    <span className="text-white/60">{testimonial.rankBefore}</span>
                    <span className="text-rocket-cyan mx-1">→</span>
                    <span className="text-rocket-cyan font-bold">{testimonial.rankAfter}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

export const Testimonials = () => {
    return (
        <section className="py-24 bg-rocket-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase">
                        Historias de Éxito
                    </h2>
                    <p className="text-rocket-textSecondary">
                        Jugadores reales que han llevado su juego al siguiente nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} index={i} />
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="font-title text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-rocket-cyan uppercase text-xs tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
