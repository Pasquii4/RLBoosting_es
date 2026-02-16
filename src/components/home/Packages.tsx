import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Trophy, Crown } from 'lucide-react';
import { Button } from '../Button';

const PACKAGE_URL = "https://es.fiverr.com/rlboosting_es/consigamos-tu-rango-deseado-en-rocket-league-85b1";

const packages = [
    {
        id: "basic",
        name: "Sesión Básica",
        duration: "30 minutos",
        price: "8,85€",
        icon: <Zap size={24} className="text-rocket-cyan" />,
        features: [
            "30 minutos de coaching personalizado",
            "1 sesión individual",
            "Elección de coach",
            "Retroalimentación en tiempo real",
            "Discord o notas escritas",
            "Análisis de replays (opcional)",
            "Tips personalizados post-sesión"
        ],
        fiverrUrl: `${PACKAGE_URL}?pckg_id=1`,
        recommended: false
    },
    {
        id: "standard",
        name: "Sesión Estándar",
        duration: "60 minutos",
        price: "13,27€",
        icon: <Trophy size={24} className="text-rocket-cyan" />,
        features: [
            "60 minutos de coaching intensivo",
            "1 sesión individual",
            "Elección de coach",
            "Retroalimentación detallada en tiempo real",
            "Discord con screen share",
            "Análisis de 2-3 replays",
            "Plan de mejora personalizado",
            "Tips y ejercicios para practicar"
        ],
        fiverrUrl: `${PACKAGE_URL}?pckg_id=2`,
        recommended: true
    },
    {
        id: "premium",
        name: "Sesión Premium",
        duration: "90 minutos",
        price: "17,70€",
        icon: <Crown size={24} className="text-rocket-cyan" />,
        features: [
            "90 minutos de coaching completo",
            "1 sesión individual extendida",
            "Elección de coach",
            "Retroalimentación exhaustiva en directo",
            "Discord con análisis profundo",
            "Análisis de 4-5 replays",
            "Plan de mejora completo personalizado",
            "Ejercicios de mecánicas específicos",
            "Documento de notas detallado",
            "Seguimiento post-sesión (7 días)"
        ],
        fiverrUrl: `${PACKAGE_URL}?pckg_id=3`,
        recommended: false
    }
];

const PackageCard = ({ pkg, index }: { pkg: any, index: number }) => (
    <motion.div
        className={`relative bg-rocket-card border ${pkg.recommended ? 'border-rocket-cyan shadow-[0_0_30px_rgba(0,217,255,0.2)] transform md:-translate-y-4' : 'border-white/10'} rounded-2xl p-8 flex flex-col h-full`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
    >
        {pkg.recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rocket-cyan text-rocket-dark font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                Más Popular
            </div>
        )}

        <div className="mb-6 flex justify-between items-start">
            <div>
                <h3 className="font-title text-2xl text-white uppercase mb-1">{pkg.name}</h3>
                <p className="text-white/60 text-sm font-mono flex items-center gap-2">
                    {pkg.duration}
                </p>
            </div>
            <div className={`p-3 rounded-xl ${pkg.recommended ? 'bg-rocket-cyan/20' : 'bg-white/5'}`}>
                {pkg.icon}
            </div>
        </div>

        <div className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {pkg.price}
        </div>

        <ul className="space-y-4 mb-8 flex-1">
            {pkg.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="w-5 h-5 text-rocket-cyan shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                </li>
            ))}
        </ul>

        <a href={pkg.fiverrUrl} target="_blank" rel="noopener noreferrer" className="block mt-auto">
            <Button
                variant={pkg.recommended ? 'primary' : 'secondary'}
                className="w-full justify-center group"
                rightIcon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            >
                Reservar Ahora
            </Button>
        </a>
    </motion.div>
);

export const Packages = () => {
    return (
        <section id="coaching-plans" className="py-24 bg-rocket-dark relative">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-rocket-cyan/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase">Paquetes de Coaching</h2>
                    <p className="text-rocket-textSecondary max-w-2xl mx-auto">
                        Elige el plan que mejor se adapte a tus necesidades. Precios transparentes y reserva segura a través de Fiverr.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {packages.map((pkg, index) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center text-white/40 text-sm max-w-2xl mx-auto bg-white/5 p-6 rounded-xl border border-white/5">
                    <p className="mb-2 font-bold text-white/60">Información Importante:</p>
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
