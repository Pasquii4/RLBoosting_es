import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MMRChart } from '../components/tracker/MMRChart';
import { WinLossChart } from '../components/tracker/WinLossChart';
import { RecentSessions } from '../components/tracker/RecentSessions';
import { motion } from 'framer-motion';
import { Trophy, Gamepad2, Target } from 'lucide-react';

export default function Tracker() {
    return (
        <div className="min-h-screen bg-rocket-dark text-white selection:bg-rocket-cyan/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/5 pb-8 gap-6">
                    <div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-title font-bold italic text-white mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            TRACKER DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rocket-blue to-rocket-cyan">RENDIMIENTO</span>
                        </motion.h1>
                        <motion.p
                            className="text-gray-400 text-lg max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Analiza tu historial competitivo, monitorea tendencias de MMR e identifica áreas de mejora.
                        </motion.p>
                    </div>

                    <div className="flex gap-2">
                        {['1S', '1M', '3M', 'TODO'].map((period, i) => (
                            <button
                                key={period}
                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${i === 1 ? 'bg-rocket-cyan text-rocket-dark' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Stats Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* MMR Chart */}
                        <motion.div
                            className="bg-rocket-card border border-rocket-border rounded-2xl p-6 md:p-8 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-title font-bold text-2xl text-white">Historial MMR</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400 font-bold font-mono text-lg">+102</span>
                                    <span className="text-gray-400 text-xs uppercase">Este Mes</span>
                                </div>
                            </div>
                            <MMRChart />
                        </motion.div>

                        {/* Quick Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Rango Actual', value: 'GC II', icon: <Trophy size={20} className="text-rocket-orange" />, sub: 'Div IV', progress: 85, color: 'bg-rocket-orange' },
                                { label: 'Partidas', value: '1,248', icon: <Gamepad2 size={20} className="text-rocket-blue" />, sub: '+12 esta semana', progress: 60, color: 'bg-rocket-blue' },
                                { label: '% Tiro', value: '42.8%', icon: <Target size={20} className="text-rocket-cyan" />, sub: 'Top 8%', progress: 42, color: 'bg-rocket-cyan' },
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
                            <h2 className="font-title font-bold text-2xl text-white mb-6 w-full text-left">Win Rate</h2>
                            <WinLossChart />
                            <div className="flex gap-8 mt-6 w-full justify-center">
                                <div className="text-center">
                                    <div className="w-3 h-3 rounded-full bg-rocket-cyan mx-auto mb-2 shadow-[0_0_10px_#00D9FF]" />
                                    <span className="block font-bold text-xl text-white">62</span>
                                    <span className="text-xs text-gray-400 uppercase">Victorias</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-3 h-3 rounded-full bg-rocket-orange mx-auto mb-2 shadow-[0_0_10px_#FF6B00]" />
                                    <span className="block font-bold text-xl text-white">38</span>
                                    <span className="text-xs text-gray-400 uppercase">Derrotas</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Recent Sessions */}
                        <motion.div
                            className="bg-rocket-card border border-rocket-border rounded-2xl p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <RecentSessions />
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
