import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MessageCircle, Server, DollarSign } from 'lucide-react';

const Reason = ({ icon, title, description, delay }: any) => (
    <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
    >
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-rocket-cyan shrink-0 border border-white/10">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-title text-lg mb-1">{title}</h4>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export const WhyUs = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0B1120] to-rocket-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-rocket-cyan/5 blur-3xl rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            className="font-title font-bold text-4xl md:text-5xl text-white mb-8 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            ¿Por qué elegir <span className="text-rocket-cyan">RLCOACH</span>?
                        </motion.h2>

                        <div className="space-y-8">
                            <Reason
                                icon={<ShieldCheck />}
                                title="Grand Champions Verificados"
                                description="Sin mentiras. Somos dos jugadores activos en rango Grand Champion (1500+ MMR) demostrable."
                                delay={0.2}
                            />
                            <Reason
                                icon={<Clock />}
                                title="+4000 Horas de Experiencia"
                                description="Conocemos cada rincón del juego. Hemos pasado por todos los rangos y sabemos cómo salir de ellos."
                                delay={0.3}
                            />
                            <Reason
                                icon={<MessageCircle />}
                                title="Español Nativo"
                                description="Comunicación clara y directa. Sin barreras de idioma ni malentendidos durante las sesiones."
                                delay={0.4}
                            />
                            <Reason
                                icon={<Server />}
                                title="Servidor Europa"
                                description="Jugamos en servidores de la UE para garantizar la mejor conexión y ping durante el coaching."
                                delay={0.5}
                            />
                            <Reason
                                icon={<DollarSign />}
                                title="Precio Competitivo"
                                description="Coaching de alto nivel accesible para todos. Desde solo 8,85€, mucho más económico que las grandes plataformas."
                                delay={0.6}
                            />
                        </div>
                    </div>

                    <motion.div
                        className="relative h-[500px] w-full bg-black/20 rounded-3xl border border-white/10 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Abstract Visual Representation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rocket-blue/20 to-purple-900/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-white/10 font-title mb-4">RLCOACH</div>
                                <div className="text-rocket-cyan font-mono text-sm tracking-[0.5em] uppercase">Level Up Your Game</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
