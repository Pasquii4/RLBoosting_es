
import { motion } from "framer-motion";
import mockStats from "@/data/mock-stats.json";

export default function CoachStats() {
    const { coach } = mockStats;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Rank */}
                <div>
                    <div className="text-sm text-white/50 tracking-wide uppercase mb-2 font-mono">Rank</div>
                    <div className="text-xl font-bold text-rocket-blue font-display">{coach.rank}</div>
                </div>

                {/* Win Rate */}
                <div>
                    <div className="text-sm text-white/50 tracking-wide uppercase mb-2 font-mono">Win Rate</div>
                    <div className="text-xl font-bold text-rocket-purple font-display">{coach.winRate}%</div>
                    <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${coach.winRate}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-rocket-blue to-rocket-purple"
                        />
                    </div>
                </div>

                {/* Total Sessions */}
                <div>
                    <div className="text-sm text-white/50 tracking-wide uppercase mb-2 font-mono">Sessions</div>
                    <div className="text-xl font-bold font-display">{coach.totalSessions}</div>
                </div>

                {/* Active Students */}
                <div>
                    <div className="text-sm text-white/50 tracking-wide uppercase mb-2 font-mono">Students</div>
                    <div className="text-xl font-bold font-display">{coach.activeStudents}</div>
                </div>
            </div>

            {/* Additional Stats */}
            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="text-sm text-white/50 tracking-wide uppercase mb-2 font-mono">Total Hours Coached</div>
                <div className="text-4xl font-bold text-white font-display">{coach.hoursCoached.toLocaleString()} <span className="text-base text-rocket-blue font-sans font-normal">HRS</span></div>
            </div>
        </motion.div>
    );
}
