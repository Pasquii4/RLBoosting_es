import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

const PackageCard = ({ title, price, duration, features, cta, isPopular, delay }: any) => (
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
        <h3 className="font-title text-2xl text-white uppercase mb-1">{title}</h3>
        <p className="text-white/60 text-sm mb-4 font-mono">{duration}</p>
        <div className="text-4xl font-bold text-white mb-6">{price}</div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="w-5 h-5 text-rocket-cyan shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <a href="https://es.fiverr.com/rlboosting_es/consigamos-tu-rango-deseado-en-rocket-league-85b1" target="_blank" rel="noopener noreferrer" className="block mt-auto">
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
                    <p className="text-rocket-textSecondary">Precios transparentes. Sin suscripciones. Reserva segura a través de Fiverr.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PackageCard
                        title="Básico"
                        price="8,85€"
                        duration="30 Minutos"
                        features={[
                            "Sesión de coaching 1 a 1",
                            "Análisis de replay en vivo",
                            "Retroalimentación activa",
                            "Consejos rápidos de mejora"
                        ]}
                        cta="Reservar Básico"
                        delay={0.2}
                    />
                    <PackageCard
                        title="Estándar"
                        price="13,27€"
                        duration="60 Minutos"
                        isPopular
                        features={[
                            "Sesión de coaching 1 a 1 extendida",
                            "Análisis profundo de replays",
                            "Bloc de notas post-sesión",
                            "Plan de entrenamiento personalizado",
                            "Discord opcional para seguimiento"
                        ]}
                        cta="Reservar Estándar"
                        delay={0.4}
                    />
                    <PackageCard
                        title="Premium"
                        price="17,70€"
                        duration="90 Minutos"
                        features={[
                            "Sesión intensiva de coaching",
                            "Análisis completo de mecánicas",
                            "Revisión de múltiples replays",
                            "Soporte prioritario",
                            "Todo lo incluido en Estándar"
                        ]}
                        cta="Reservar Premium"
                        delay={0.6}
                    />
                </div>

                <div className="mt-12 text-center text-white/40 text-sm max-w-2xl mx-auto">
                    <p>
                        * Las cancelaciones deben realizarse con al menos 6 horas de antelación.
                        <br />
                        * Si no te presentas pasados 10 minutos de la hora acordada, la sesión se considerará cancelada.
                    </p>
                </div>
            </div>
        </section>
    );
};
