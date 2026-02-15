

import { motion } from "framer-motion";
import mockStats from "@/data/mock-stats.json";

export default function StudentProgress() {
    const { students } = mockStats;

    return (
        <div className="space-y-4">
            {students.map((student, index) => (
                <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded border border-white/5 hover:border-rocket-blue/30 transition-colors"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold tracking-wide font-display text-white">{student.name}</h3>
                            <div className="text-xs text-white/40 font-mono">{student.hoursCoached}h coached</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-green-400 font-bold font-mono">{student.improvement}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-black/40 p-2 rounded text-center">
                            <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Current</div>
                            <div className="text-sm font-bold text-rocket-blue font-display">{student.currentRank}</div>
                        </div>
                        <div className="bg-black/40 p-2 rounded text-center">
                            <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Previous</div>
                            <div className="text-sm font-bold text-white/60 font-display">{student.previousRank}</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
