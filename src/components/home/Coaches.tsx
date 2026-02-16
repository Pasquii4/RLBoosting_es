import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Star } from 'lucide-react';

const CoachProfile = ({ name, rank, hours, experience, style, delay }: any) => (
    <motion.div
        className="bg-rocket-card border border-white/10 rounded-2xl p-8 hover:border-rocket-cyan/50 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-6 border-2 border-rocket-cyan flex items-center justify-center">
            <span className="text-3xl">👨‍🚀</span>
        </div>
        <h3 className="font-title text-2xl text-center text-white mb-2">{name}</h3>
        <div className="flex justify-center gap-2 mb-6 text-rocket-cyan">
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
        </div>

        <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between text-sm">
                <span className="text-white/60 flex items-center gap-2"><Trophy size={14} /> Rango Máximo</span>
                <span className="text-white font-bold">{rank}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
                <span className="text-white/60 flex items-center gap-2"><Clock size={14} /> Horas Jugadas</span>
                <span className="text-white font-bold">{hours}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
                <span className="text-white/60 flex items-center gap-2"><Star size={14} /> Experiencia</span>
                <span className="text-white font-bold">{experience}</span>
            </div>
        </div>

        <p className="text-center text-white/70 italic">"{style}"</p>
    </motion.div>
);

export const Coaches = () => {
    return (
        <section className="py-24 bg-rocket-dark relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Conoce a tus Coaches
                    </motion.h2>
                    <p className="text-rocket-textSecondary max-w-2xl mx-auto">
                        Aprende de los mejores. Nuestros coaches con rango GC2 tienen miles de horas de experiencia para ayudarte a escalar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <CoachProfile
                        name="Coach Alpha"
                        rank="Grand Champion 2 (1600 MMR)"
                        hours="4000+"
                        experience="9 Años"
                        style="Analítico y estratégico. Te enseño a pensar antes de volar."
                        delay={0.2}
                    />
                    <CoachProfile
                        name="Coach Bravo"
                        rank="Grand Champion 2 (1600 MMR)"
                        hours="4000+"
                        experience="9 Años"
                        style="Mecánicas y rotaciones. Pulimos tu control del coche y del balón."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};
