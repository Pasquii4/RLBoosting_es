import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp } from 'lucide-react';

const SessionCard = ({ opponent, result, change, rank, date, progress }: { opponent: string, result: 'Win' | 'Loss', change: number, rank: string, date: string, progress: number }) => (
    <motion.div
        className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-rocket-cyan/30 cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    >
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${result === 'Win' ? 'bg-rocket-cyan shadow-[0_0_10px_#00D9FF]' : 'bg-rocket-orange shadow-[0_0_10px_#FF6B00]'}`} />
                <div>
                    <h4 className="font-bold text-white text-sm">{opponent}</h4>
                    <p className="text-xs text-rocket-textSecondary">{rank}</p>
                </div>
            </div>
            <div className="text-right">
                <span className={`font-bold font-mono text-sm ${result === 'Win' ? 'text-rocket-cyan' : 'text-rocket-orange'}`}>
                    {result === 'Win' ? '+' : ''}{change} MMR
                </span>
                <p className="text-xs text-white/30">{date}</p>
            </div>
        </div>

        <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-rocket-blue to-rocket-cyan"
                style={{ width: `${progress}%` }}
            />
        </div>

        <div className="mt-3 flex items-center justify-between opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
            <span className="text-xs text-rocket-textSecondary flex items-center gap-1">
                <TrendingUp size={12} className="text-green-400" /> Improvement detected
            </span>
            <button className="text-xs text-rocket-cyan font-bold flex items-center gap-1 hover:underline">
                View Details <ChevronRight size={12} />
            </button>
        </div>
    </motion.div>
);

export const RecentSessions = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-rocket-textSecondary text-sm font-bold uppercase tracking-wider">Latest Matches</h3>
                <button className="text-rocket-cyan text-xs hover:underline">View All</button>
            </div>

            <SessionCard
                opponent="Vs. NRG squishy"
                result="Win"
                change={12}
                rank="Grand Champion II"
                date="2 hours ago"
                progress={85}
            />
            <SessionCard
                opponent="Vs. Vitality Zen"
                result="Loss"
                change={-9}
                rank="Grand Champion II"
                date="5 hours ago"
                progress={82}
            />
            <SessionCard
                opponent="Vs. G2 JKnaps"
                result="Win"
                change={14}
                rank="Grand Champion II"
                date="1 day ago"
                progress={88}
            />
            <SessionCard
                opponent="Vs. FaZe Firstkiller"
                result="Win"
                change={9}
                rank="Grand Champion II"
                date="2 days ago"
                progress={92}
            />
        </div>
    );
};
