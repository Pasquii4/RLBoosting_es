import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

const PackageCard = ({ title, price, features, cta, isPopular, delay }: any) => (
    <motion.div
        className={`relative bg-rocket-card border ${isPopular ? 'border-rocket-cyan shadow-[0_0_30px_rgba(0,217,255,0.2)]' : 'border-white/10'} rounded-2xl p-8 flex flex-col`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        {isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rocket-cyan text-rocket-dark font-bold text-xs uppercase px-3 py-1 rounded-full">
                Más Popular
            </div>
        )}
        <h3 className="font-title text-2xl text-white uppercase mb-2">{title}</h3>
        <div className="text-4xl font-bold text-white mb-6">{price}</div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="w-5 h-5 text-rocket-cyan shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <a href="https://www.fiverr.com/rlboosting_es" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full" rightIcon={<ArrowRight size={16} />}>
                {cta}
            </Button>
        </a>
    </motion.div>
);

export const Packages = () => {
    return (
        <section id="coaching-plans" className="py-24 bg-rocket-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase">Paquetes de Coaching</h2>
                    <p className="text-rocket-textSecondary">Precios simples. Sin suscripciones. Reserva de forma segura en Fiverr.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <PackageCard
                        title="Sesión Individual"
                        price="$29"
                        features={[
                            "60 minutos de coaching 1-on-1",
                            "Análisis de replays en vivo o 2v2",
                            "Feedback por voz en tiempo real (Discord)",
                            "Notas escritas después de la sesión"
                        ]}
                        cta="Reservar en Fiverr"
                        delay={0.2}
                    />
                    <PackageCard
                        title="Pack Subida de Rango"
                        price="$80"
                        isPopular
                        features={[
                            "3 sesiones de 60 minutos",
                            "Plan de mejora personalizado",
                            "Seguimiento de progreso semanal",
                            "Prioridad en reservas",
                            "Soporte directo por chat"
                        ]}
                        cta="Ver Pack"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};
