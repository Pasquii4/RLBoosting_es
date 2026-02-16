import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Star, TrendingUp, Shield, Crosshair, Award, MapPin, Languages, Monitor } from 'lucide-react';
import { Button } from '../Button';

interface CoachStats {
    wins: string;
    winRate: string;
    goals: string;
    assists: string;
    saves: string;
    mvps: string;
    trnScore: string;
}

interface PlaylistRank {
    mode: string;
    rank: string;
    mmr: number;
}

interface CoachData {
    name: string;
    rank: string;
    mmr: number;
    peakRank: string;
    peakSeason: string;
    experience: string;
    hours: string;
    specialties: string[];
    stats: CoachStats;
    playlists: PlaylistRank[];
    trackerUrl: string;
    image: string;
    availability: string;
    languages: string[];
    description: string;
    achievements?: string[];
}

const coaches: CoachData[] = [
    {
        name: "Azotedelosrojos",
        rank: "Grand Champion I",
        mmr: 1517,
        peakRank: "Grand Champion I (1,547 MMR)",
        peakSeason: "Season 35",
        experience: "9+ años",
        hours: "+4,000 horas",
        specialties: ["Doubles 2v2", "Rotaciones avanzadas", "Posicionamiento defensivo", "Lectura de juego"],
        stats: {
            wins: "4,380",
            winRate: "Top 13%",
            goals: "11,259",
            assists: "4,398",
            saves: "12,673",
            mvps: "2,602",
            trnScore: "2,069,541 (Top 6%)"
        },
        playlists: [
            { mode: "Ranked Doubles 2v2", rank: "Grand Champion I", mmr: 1517 },
            { mode: "Ranked Standard 3v3", rank: "Champion III", mmr: 1330 },
            { mode: "Ranked Duel 1v1", rank: "Diamond I", mmr: 866 },
            { mode: "Tournaments", rank: "Grand Champion I", mmr: 1497 }
        ],
        trackerUrl: "https://rocketleague.tracker.network/rocket-league/profile/epic/Azotedelosrojos/overview",
        image: "/images/coach-azote.jpg",
        availability: "Lunes a Viernes: 18:00-23:00 CET",
        languages: ["Español"],
        description: "Especialista en Doubles 2v2 con enfoque en rotaciones perfectas y posicionamiento defensivo. Mi metodología se basa en mejorar tu game sense y toma de decisiones rápidas."
    },
    {
        name: "FusilaYComulga19",
        rank: "Grand Champion I",
        mmr: 1515,
        peakRank: "Grand Champion I (1,610 MMR)",
        peakSeason: "Season 33",
        experience: "9+ años",
        hours: "+4,000 horas",
        specialties: ["Doubles 2v2", "Mecánicas avanzadas", "Juego ofensivo", "Consistencia"],
        stats: {
            wins: "6,376",
            winRate: "Top 6%",
            goals: "14,750",
            assists: "6,690 (Top 4.9%)",
            saves: "14,192 (Top 4.8%)",
            mvps: "2,821",
            trnScore: "2,881,272 (Top 2.9%)"
        },
        playlists: [
            { mode: "Ranked Doubles 2v2", rank: "Grand Champion I", mmr: 1515 },
            { mode: "Ranked Standard 3v3", rank: "Champion II", mmr: 1220 },
            { mode: "Rumble", rank: "Champion II", mmr: 1053 },
            { mode: "Tournaments", rank: "Grand Champion I", mmr: 1536 }
        ],
        trackerUrl: "https://rocketleague.tracker.network/rocket-league/profile/epic/FusilaYComulga19/overview",
        image: "/images/coach-fusila.jpg",
        availability: "Lunes a Domingo: 16:00-22:00 CET",
        languages: ["Español"],
        achievements: ["Marathoner", "Hero", "Streak I"],
        description: "Experto en mecánicas avanzadas y juego ofensivo. Te ayudaré a mejorar tu consistencia en el aire, wall shots y tus rotaciones en ataque para dominar el campo."
    }
];

const CoachProfile = ({ coach, index }: { coach: CoachData; index: number }) => (
    <motion.div
        className="bg-rocket-card border border-white/10 rounded-2xl p-6 md:p-8 hover:border-rocket-cyan/50 transition-all duration-300 h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
    >
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center md:items-start">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-2 border-rocket-cyan flex items-center justify-center shrink-0 overflow-hidden relative shadow-[0_0_20px_rgba(0,217,255,0.2)]">
                <span className="text-4xl">🚀</span>
            </div>
            <div className="text-center md:text-left flex-1">
                <h3 className="font-title text-2xl md:text-3xl text-white mb-2">{coach.name}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                    <span className="bg-rocket-cyan/10 text-rocket-cyan text-xs font-bold px-3 py-1 rounded-full border border-rocket-cyan/20">
                        {coach.rank} ({coach.mmr} MMR)
                    </span>
                    <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/20">
                        Peak: {coach.peakRank}
                    </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-rocket-cyan" /> {coach.hours}</span>
                    <span className="flex items-center gap-1"><Star size={14} className="text-rocket-cyan" /> {coach.experience}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-rocket-cyan" /> EU Server</span>
                </div>
            </div>
        </div>

        {/* Description */}
        <p className="text-white/80 mb-6 italic text-center md:text-left">"{coach.description}"</p>

        {/* Specialties */}
        <div className="mb-8">
            <h4 className="text-sm font-bold text-white/40 uppercase mb-3 flex items-center gap-2">
                <Crosshair size={14} /> Especialidades
            </h4>
            <div className="flex flex-wrap gap-2">
                {coach.specialties.map((spec, i) => (
                    <span key={i} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-md border border-white/5">
                        {spec}
                    </span>
                ))}
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
            <div>
                <div className="text-xs text-white/40 mb-1">Victorias</div>
                <div className="text-lg font-bold text-white">{coach.stats.wins}</div>
                <div className="text-xs text-green-400">{coach.stats.winRate} Win %</div>
            </div>
            <div>
                <div className="text-xs text-white/40 mb-1">Goles</div>
                <div className="text-lg font-bold text-white">{coach.stats.goals}</div>
                <div className="text-xs text-white/60">Total Goals</div>
            </div>
            <div>
                <div className="text-xs text-white/40 mb-1">Salvadas</div>
                <div className="text-lg font-bold text-white">{coach.stats.saves}</div>
                <div className="text-xs text-rocket-cyan">{coach.stats.saves} (Top 7%)</div>
            </div>
            <div>
                <div className="text-xs text-white/40 mb-1">MVPs</div>
                <div className="text-lg font-bold text-white">{coach.stats.mvps}</div>
            </div>
        </div>

        {/* Ranks */}
        <div className="mb-8">
            <h4 className="text-sm font-bold text-white/40 uppercase mb-3 flex items-center gap-2">
                <Trophy size={14} /> Rangos Actuales
            </h4>
            <div className="space-y-2">
                {coach.playlists.map((playlist, i) => (
                    <div key={i} className="flex justify-between items-center text-sm p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-white/80">{playlist.mode}</span>
                        <span className="text-rocket-cyan font-mono">{playlist.rank}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-white/60">
                <span className="flex items-center gap-2"><Languages size={14} /> {coach.languages.join(", ")}</span>
                <span className="flex items-center gap-2"><Monitor size={14} /> PC Only</span>
            </div>

            <a href={coach.trackerUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="secondary" className="w-full text-xs py-2" rightIcon={<TrendingUp size={14} />}>
                    Ver Tracker Network
                </Button>
            </a>
        </div>
    </motion.div>
);

export const Coaches = () => {
    return (
        <section id="coaches" className="py-24 bg-rocket-dark relative overflow-hidden">
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
                        Aprende de jugadores experimentados con más de 9 años de trayectoria. Rango Grand Champion y miles de horas de juego para llevarte al siguiente nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {coaches.map((coach, index) => (
                        <CoachProfile key={coach.name} coach={coach} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
