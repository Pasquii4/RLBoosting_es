import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Gamepad2, TrendingUp, ArrowRight } from 'lucide-react';

const Step = ({ number, icon, title, description, delay }: any) => (
    <motion.div
        className="flex flex-col items-center text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="w-16 h-16 bg-rocket-blue/10 rounded-2xl flex items-center justify-center mb-6 border border-rocket-blue/20 text-rocket-cyan relative group hover:scale-110 transition-transform duration-300">
            {icon}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-rocket-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                {number}
            </div>
        </div>
        <h3 className="font-title text-xl text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm max-w-xs">{description}</p>
    </motion.div>
);

export const Process = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-rocket-dark to-[#0B1120] relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase">How It Works</h2>
                    <p className="text-rocket-textSecondary">From stuck in Diamond to ranking up in 4 simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-rocket-blue/30 to-transparent z-0" />

                    <Step
                        number="1"
                        icon={<Calendar size={32} />}
                        title="Book on Fiverr"
                        description="Choose your package secure your spot via Fiverr."
                        delay={0.2}
                    />
                    <Step
                        number="2"
                        icon={<MessageSquare size={32} />}
                        title="Schedule"
                        description="We coordinate a time that works for you via Discord."
                        delay={0.4}
                    />
                    <Step
                        number="3"
                        icon={<Gamepad2 size={32} />}
                        title="Play & Learn"
                        description="1-on-1 session. We play together and fix errors live."
                        delay={0.6}
                    />
                    <Step
                        number="4"
                        icon={<TrendingUp size={32} />}
                        title="Improve"
                        description="Receive personalized notes and a training plan."
                        delay={0.8}
                    />
                </div>

                <div className="mt-16 text-center bg-white/5 rounded-xl p-6 max-w-2xl mx-auto border border-white/10">
                    <p className="text-sm text-white/70">
                        <span className="text-rocket-orange font-bold">Policy:</span> Free cancellation up to 6 hours before. We wait max 10 mins for no-shows.
                    </p>
                </div>
            </div>
        </section>
    );
};
