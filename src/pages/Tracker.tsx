import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WinLossChart } from '../components/tracker/WinLossChart';
import { motion } from 'framer-motion';
import { Trophy, Gamepad2, Target, ChevronDown } from 'lucide-react';
import { coachesData } from '../data/coaches';

export default function Tracker() {
    const [selectedCoachId, setSelectedCoachId] = useState<'azotedelosrojos' | 'fusilaYComulga19'>('azotedelosrojos');
    const coach = coachesData[selectedCoachId];

    return (
        <div className="min-h-screen bg-rocket-dark text-white selection:bg-rocket-cyan/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/5 pb-8 gap-6 mt-12 relative">
                    {/* Coach Badge / Selector */}
                    <div className="absolute -top-10 left-0 flex items-center gap-4">
                        <div className="bg-rocket-cyan/10 border border-rocket-cyan/20 text-rocket-cyan px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <Trophy size={14} />
                            Viendo perfil de: {coach.username}
                        </div>

                        <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                            <button
                                onClick={() => setSelectedCoachId('azotedelosrojos')}
                                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${selectedCoachId === 'azotedelosrojos' ? 'bg-rocket-cyan text-rocket-dark' : 'text-white/50 hover:text-white'}`}
                            >
                                Azote
                            </button>
                            <button
                                onClick={() => setSelectedCoachId('fusilaYComulga19')}
                                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${selectedCoachId === 'fusilaYComulga19' ? 'bg-rocket-cyan text-rocket-dark' : 'text-white/50 hover:text-white'}`}
                            >
                                Fusila
                            </button>
                        </div>
                    </div>

                    <div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-title font-bold italic text-white mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={selectedCoachId} // Re-animate on change
                        >
                            TRACKER DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rocket-blue to-rocket-cyan">RENDIMIENTO</span>
                        </motion.h1>
                        <motion.p
                            className="text-gray-400 text-lg max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Analiza las estadísticas reales de nuestros coaches. Datos verificados de Tracker Network.
                        </motion.p>
                    </div>

                    <div className="flex gap-2">
                        {['1S', '1M', '3M', 'TODO'].map((period, i) => (
                            <button
                                key={period}
                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${i === 3 ? 'bg-rocket-cyan text-rocket-dark' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Stats Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    label: 'Rango Actual',
                                    value: 'GC I',
                                    icon: <Trophy size={20} className="text-rocket-orange" />,
                                    sub: `Div ${coach.currentRanks.rankedDoubles2v2.division} (${coach.currentRanks.rankedDoubles2v2.mmr})`,
                                    progress: 92,
                                    color: 'bg-rocket-orange'
                                },
                                {
                                    label: 'Victorias',
                                    value: coach.lifetimeStats.wins.value.toLocaleString(),
                                    icon: <Gamepad2 size={20} className="text-rocket-blue" />,
                                    sub: coach.lifetimeStats.wins.percentile,
                                    progress: 87,
                                    color: 'bg-rocket-blue'
                                },
                                {
                                    label: 'Goles',
                                    value: coach.lifetimeStats.goals.value.toLocaleString(),
                                    icon: <Target size={20} className="text-rocket-cyan" />,
                                    sub: coach.lifetimeStats.goals.percentile,
                                    progress: 86,
                                    color: 'bg-rocket-cyan'
                                },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/5 border border-white/5 rounded-xl p-5 hover:border-rocket-cyan/30 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <span className="text-gray-400 text-xs uppercase font-bold tracking-wider">{stat.label}</span>
                                        {stat.icon}
                                    </div>
                                    <div className="font-title font-bold text-3xl text-white mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                                    <div className="text-xs text-white/40 mb-3">{stat.sub}</div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.progress}%` }}
                                            transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Win/Loss */}
                        <motion.div
                            className="bg-rocket-card border border-rocket-border rounded-2xl p-8 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="font-title font-bold text-2xl text-white mb-6 w-full text-left">Stats Globales</h2>
                            <WinLossChart />
                            <div className="flex gap-8 mt-6 w-full justify-center">
                                <div className="text-center">
                                    <div className="w-3 h-3 rounded-full bg-rocket-cyan mx-auto mb-2 shadow-[0_0_10px_#00D9FF]" />
                                    <span className="block font-bold text-xl text-white">~55%</span>
                                    <span className="text-xs text-gray-400 uppercase">Win Rate Est.</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-3 h-3 rounded-full bg-rocket-orange mx-auto mb-2 shadow-[0_0_10px_#FF6B00]" />
                                    <span className="block font-bold text-xl text-white">{coach.lifetimeStats.mvps.value}</span>
                                    <span className="text-xs text-gray-400 uppercase">MVPs</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
