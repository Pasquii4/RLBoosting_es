import React from 'react';
import CountUp from 'react-countup';
import { Gamepad2, Trophy, Disc } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatsSkeleton } from './StatsSkeleton';

const StatCard = ({ icon, label, value, suffix = '', delay }: { icon: React.ReactNode, label: string, value: number, suffix?: string, delay: number }) => (
    <motion.div
        className="bg-rocket-card border border-rocket-border rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300 h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-rocket-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="mb-4 text-rocket-cyan p-4 bg-rocket-cyan/10 rounded-full group-hover:bg-rocket-cyan/20 transition-colors">
            {icon}
        </div>

        <h3 className="font-title font-bold text-5xl text-white mb-2">
            <CountUp end={value} duration={2.5} separator="," />{suffix}
        </h3>

        <p className="text-gray-400 text-sm uppercase tracking-widest font-bold text-center">
            {label}
        </p>
    </motion.div>
);

export const Stats = ({ isLoading = false }: { isLoading?: boolean }) => {
    if (isLoading) return <StatsSkeleton />;

    return (
        <section className="py-20 bg-rocket-dark relative">
            <div className="container mx-auto px-6">

                {/* Main Rank Card */}
                <motion.div
                    className="max-w-4xl mx-auto bg-gradient-to-r from-rocket-card to-[#0d1235] border border-rocket-border rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.1)]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
                        <div className="text-center md:text-left">
                            <h2 className="font-title font-bold text-3xl md:text-5xl text-white mb-2 italic">
                                GRAND CHAMPION II
                            </h2>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-rocket-cyan font-bold text-xl">MMR: 1642</span>
                                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-500/30">
                                    TOP 0.4%
                                </span>
                            </div>
                        </div>

                        <div className="w-32 h-32 md:w-40 md:h-40 relative animate-pulse-glow rounded-full bg-rocket-cyan/10 flex items-center justify-center border-2 border-rocket-cyan/30">
                            <Trophy className="w-16 h-16 text-rocket-cyan" />
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-rocket-cyan/10 to-transparent skew-x-12" />
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <StatCard
                        icon={<Gamepad2 size={32} />}
                        label="Games Analyzed"
                        value={142}
                        delay={0.2}
                    />
                    <StatCard
                        icon={<Trophy size={32} />}
                        label="Win Rate"
                        value={62}
                        suffix="%"
                        delay={0.4}
                    />
                    <StatCard
                        icon={<Disc size={32} />}
                        label="Goals / Game"
                        value={2.4}
                        delay={0.6}
                    />
                </div>

            </div>
        </section>
    );
};
