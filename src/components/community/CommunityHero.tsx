import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { Gamepad2, Users } from 'lucide-react';

export const CommunityHero = () => {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-rocket-dark">
            {/* Background - In a real app, this would be a video loop */}
            <div className="absolute inset-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-rocket-dark/80 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614630716584-884c98730999?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rocket-dark/50 to-rocket-dark z-20" />
            </div>

            <div className="relative z-30 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rocket-cyan/30 bg-rocket-cyan/10 text-rocket-cyan text-sm font-bold uppercase tracking-wider backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-rocket-cyan animate-pulse" />
                    Únete a 12,472 Miembros Activos
                </motion.div>

                <motion.h1
                    className="font-title font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 uppercase tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    El Hub Definitivo <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] to-rocket-cyan">De Rocket League</span>
                </motion.h1>

                <motion.p
                    className="font-body text-xl md:text-2xl text-rocket-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Conecta con jugadores, encuentra compañeros y compite en torneos semanales.
                    La comunidad que sube de nivel junta.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button variant="discord" size="lg" leftIcon={<Gamepad2 size={24} />} className="text-xl px-12 py-5">
                        Unirse al Discord
                    </Button>
                    <p className="mt-4 text-white/40 text-sm">
                        Gratis • Acceso Inmediato • Soporte 24/7
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
