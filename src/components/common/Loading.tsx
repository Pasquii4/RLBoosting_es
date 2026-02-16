import { motion } from "framer-motion";

export const Loading = ({ progress }: { progress?: number }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rocket-dark/95 backdrop-blur-sm">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-rocket-cyan/5 to-transparent pointer-events-none" />

            <div className="relative flex flex-col items-center">
                {/* Spinner */}
                <motion.div
                    className="w-16 h-16 mb-8 rounded-full border-4 border-rocket-cyan/20 border-t-rocket-cyan"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Text */}
                <motion.h2
                    className="text-2xl font-title font-bold text-white tracking-widest mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    CARGANDO
                </motion.h2>

                {/* Progress Bar (Optional) */}
                {progress !== undefined && (
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                        <motion.div
                            className="h-full bg-gradient-to-r from-rocket-blue to-rocket-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
