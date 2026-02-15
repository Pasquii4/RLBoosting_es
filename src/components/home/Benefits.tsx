import React from 'react';
import { motion } from 'framer-motion';
import { Brain, RotateCcw, Zap, Shield } from 'lucide-react';

const BenefitItem = ({ icon, title, description }: any) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
        <div className="text-rocket-cyan shrink-0 mt-1">{icon}</div>
        <div>
            <h4 className="font-title text-lg text-white mb-1 uppercase">{title}</h4>
            <p className="text-white/60 text-sm">{description}</p>
        </div>
    </div>
);

export const Benefits = () => {
    return (
        <section className="py-20 bg-rocket-dark relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-6 uppercase leading-tight">
                            Stop Guessing.<br />
                            <span className="text-rocket-blue">Start Climbing.</span>
                        </h2>
                        <p className="text-rocket-textSecondary text-lg mb-8">
                            Watching YouTube tutorials isn't enough. You need personalized feedback on YOUR gameplay mistakes.
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                            <BenefitItem
                                icon={<Brain />}
                                title="Game Sense"
                                description="Learn exactly when to challenge, when to shadow, and how to read the play."
                            />
                            <BenefitItem
                                icon={<RotateCcw />}
                                title="Rotations"
                                description="Stop cutting off teammates. Flow seamlessly around the field."
                            />
                            <BenefitItem
                                icon={<Zap />}
                                title="Mechanics"
                                description="Master fast aerials, wall-drags, and recoveries with custom drills."
                            />
                            <BenefitItem
                                icon={<Shield />}
                                title="Defense"
                                description="Become a brick wall. Backboard reads and difficult saves made easy."
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for Gameplay Image/Video */}
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-title text-4xl uppercase">
                                Gameplay Analysis
                            </div>
                            <div className="absolute inset-0 bg-rocket-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rocket-blue/20 blur-[100px] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
