import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Activity, Target, Brain, Zap, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '../Button';
import { buildCoachPrompt, PlayerStats } from '../../utils/coachPrompt';

const StatCard = ({ label, value, icon, subtext }: { label: string, value: string | number, icon: React.ReactNode, subtext?: string }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center text-center hover:border-rocket-cyan/30 transition-colors">
        <div className="mb-3 text-rocket-cyan p-3 bg-rocket-cyan/10 rounded-full">
            {icon}
        </div>
        <div className="text-gray-400 text-sm uppercase font-bold tracking-wider mb-1">{label}</div>
        <div className="text-2xl font-title font-bold text-white">{value}</div>
        {subtext && <div className="text-xs text-white/50 mt-1">{subtext}</div>}
    </div>
);

export const PerformanceTracker = () => {
    const [coachId, setCoachId] = useState<number>(1);
    const [platform, setPlatform] = useState<string>('epic');
    const [loading, setLoading] = useState<boolean>(false);
    const [stats, setStats] = useState<PlayerStats | null>(null);
    const [prompt, setPrompt] = useState<string | null>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const fetchStats = async () => {
        setLoading(true);
        setStats(null);
        setPrompt(null);
        try {
            const res = await fetch(`/api/tracker-stats?coach=${coachId}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setStats(data);
        } catch (error) {
            console.error(error);
            // Fallback for demo if API fails
            alert("Error conectando con la API. Asegúrate de que el backend está corriendo.");
        } finally {
            setLoading(false);
        }
    };

    const generateAnalysis = () => {
        if (!stats) return;
        const promptText = buildCoachPrompt(coachId, stats);
        setPrompt(promptText);
    };

    const copyToClipboard = () => {
        if (!prompt) return;
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-12 relative">
            <div className="bg-rocket-card border border-rocket-border rounded-2xl p-6 md:p-8 overflow-hidden relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 border-b border-white/5 pb-8">
                    <div>
                        <h2 className="font-title font-bold text-3xl text-white mb-2">Performance Center</h2>
                        <p className="text-gray-400">Selecciona tu coach y analiza tu rendimiento en tiempo real.</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Coach Selector */}
                    <div className="bg-white/5 rounded-xl p-1 flex relative">
                        <div
                            className={`absolute inset-y-1 w-1/2 bg-rocket-cyan/20 rounded-lg transition-all duration-300 ${coachId === 2 ? 'left-1/2' : 'left-1'}`}
                        />
                        <button
                            onClick={() => setCoachId(1)}
                            className={`flex-1 relative z-10 py-3 rounded-lg text-sm font-bold transition-colors ${coachId === 1 ? 'text-rocket-cyan' : 'text-gray-400 hover:text-white'}`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Zap size={16} /> Coach Agresivo
                            </div>
                        </button>
                        <button
                            onClick={() => setCoachId(2)}
                            className={`flex-1 relative z-10 py-3 rounded-lg text-sm font-bold transition-colors ${coachId === 2 ? 'text-rocket-cyan' : 'text-gray-400 hover:text-white'}`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Brain size={16} /> Coach Analítico
                            </div>
                        </button>
                    </div>

                    {/* Info Display */}
                    <div className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 flex items-center justify-between text-sm">
                        <span className="text-gray-500">Jugador:</span>
                        <span className="font-mono text-white">
                            {coachId === 1 ? 'Azotedelosrojos' : 'FusilaYComulga19'}
                        </span>
                    </div>

                    {/* Action Button */}
                    <Button
                        onClick={fetchStats}
                        isLoading={loading}
                        className="w-full"
                    >
                        Actualizar Stats
                    </Button>
                </div>

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                    {stats && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <StatCard
                                    label="Rango 2v2"
                                    value={stats.rank}
                                    subtext={stats.div}
                                    icon={<Trophy size={20} />}
                                />
                                <StatCard
                                    label="MMR Actual"
                                    value={stats.mmr}
                                    subtext={`Peak: ${stats.mmr_peak}`}
                                    icon={<Activity size={20} />}
                                />
                                <StatCard
                                    label="Winrate"
                                    value={stats.winrate}
                                    subtext={`${stats.wins} Victorias`}
                                    icon={<Target size={20} />}
                                />
                                <StatCard
                                    label="Partidas"
                                    value={stats.matches_played}
                                    icon={<ExternalLink size={20} />}
                                />
                            </div>

                            {/* Analysis Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Prompt Generator */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-title font-bold text-xl text-white mb-4 flex items-center gap-2">
                                        {coachId === 1 ? <Zap className="text-rocket-orange" /> : <Brain className="text-rocket-blue" />}
                                        Análisis de IA
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        Genera un prompt detallado basado en tus estadísticas para recibir coaching personalizado.
                                    </p>

                                    {!prompt ? (
                                        <Button
                                            onClick={generateAnalysis}
                                            className="w-full bg-gradient-to-r from-rocket-blue to-rocket-cyan"
                                        >
                                            Generar Análisis de {coachId === 1 ? 'Coach 1' : 'Coach 2'}
                                        </Button>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="bg-black/50 rounded-lg p-4 h-48 overflow-y-auto text-xs font-mono text-gray-300 border border-white/10">
                                                {prompt}
                                            </div>
                                            <div className="flex gap-3">
                                                <Button
                                                    onClick={copyToClipboard}
                                                    variant="secondary"
                                                    className="flex-1"
                                                    leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}
                                                >
                                                    {copied ? 'Copiado!' : 'Copiar Prompt'}
                                                </Button>
                                                <Button
                                                    onClick={() => setPrompt(null)}
                                                    variant="ghost"
                                                >
                                                    Reiniciar
                                                </Button>
                                            </div>
                                            <p className="text-center text-xs text-white/30">
                                                * Copia este prompt y úsalo en tu LLM favorito (ChatGPT, Claude, etc).
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Fiverr CTA - Integrated Contextually */}
                                <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <div>
                                        <h3 className="font-title font-bold text-2xl text-white mb-2">
                                            ¿Quieres coaching real?
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            La IA es genial, pero nada supera a un humano. Reserva una sesión 1-on-1 con
                                            <span className="font-bold text-green-400"> {coachId === 1 ? 'Azote' : 'Fusila'} </span>
                                            y empieza a subir de rango hoy mismo.
                                        </p>
                                    </div>

                                    <div className="bg-black/30 rounded-lg p-4 mb-6 border border-white/5 backdrop-blur-sm">
                                        <div className="flex justify-between items-center text-sm mb-2">
                                            <span className="text-gray-400">Tu Coach:</span>
                                            <span className="text-white font-bold">{coachId === 1 ? 'Azotedelosrojos' : 'FusilaYComulga19'}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Plataforma:</span>
                                            <div className="flex items-center gap-1 text-green-400">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Fiverr Secure
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="https://es.fiverr.com/rlboosting_es/consigamos-tu-rango-deseado-en-rocket-league-85b1?ref_ctx_id=cb8eb4e6bdaf4856a4c53f37c7b32bcc&pckg_id=1&source=seller_page"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:scale-[1.02]"
                                    >
                                        Reserva tu Sesión ahora
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Empty State / Initial View */}
                {!stats && !loading && (
                    <div className="text-center py-12 text-gray-500">
                        <Activity size={48} className="mx-auto mb-4 opacity-20" />
                        <p>Haz clic en "Actualizar Stats" para ver el análisis.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
