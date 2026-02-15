

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InfoSection() {
    return (
        <section className="min-h-screen bg-black pt-24 pb-16 px-6 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-extra-wide font-grotesk mb-8">
                    ELITE ROCKET LEAGUE
                    <br />
                    <span className="text-accent-primary">COACHING</span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 tracking-wide mb-12 max-w-2xl mx-auto">
                    Transform your gameplay with professional coaching from Grand Champion players.
                    Track your progress, master mechanics, and dominate the competition.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <Link
                        to="/tracker"
                        className="premium-border px-8 py-4 text-sm tracking-wide uppercase hover:bg-white/5 transition-all group"
                    >
                        <span className="group-hover:text-accent-primary transition-colors">
                            View Tracker
                        </span>
                    </Link>
                    <Link
                        to="/community"
                        className="bg-accent-primary px-8 py-4 text-sm tracking-wide uppercase hover:bg-accent-secondary transition-all"
                    >
                        Join Community
                    </Link>
                </div>

                {/* Stats showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    <div className="premium-border p-6">
                        <div className="text-4xl font-bold text-accent-primary mb-2">87%</div>
                        <div className="text-sm text-white/60 tracking-wide uppercase">Win Rate</div>
                    </div>
                    <div className="premium-border p-6">
                        <div className="text-4xl font-bold text-accent-primary mb-2">342</div>
                        <div className="text-sm text-white/60 tracking-wide uppercase">Sessions</div>
                    </div>
                    <div className="premium-border p-6">
                        <div className="text-4xl font-bold text-accent-primary mb-2">28</div>
                        <div className="text-sm text-white/60 tracking-wide uppercase">Students</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
