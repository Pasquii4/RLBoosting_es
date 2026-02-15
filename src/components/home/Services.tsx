import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { Video, Crosshair, Users, ArrowRight, Check } from 'lucide-react';

const ServiceCard = ({ icon, title, features, cta, delay }: { icon: React.ReactNode, title: string, features: string[], cta: string, delay: number }) => (
    <motion.div
        className="group relative bg-card-gradient border border-white/10 rounded-2xl p-8 hover:border-rocket-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10 }}
    >
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rocket-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className="w-16 h-16 bg-rocket-blue/20 rounded-xl flex items-center justify-center mb-6 text-rocket-cyan border border-rocket-blue/30 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                <h3 className="font-title font-bold text-3xl text-white mb-6 group-hover:text-rocket-cyan transition-colors">
                    {title}
                </h3>

                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                            <Check className="w-5 h-5 text-rocket-cyan shrink-0 mt-0.5" />
                            <span className="font-body text-sm leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm font-bold text-gray-400">From $29/session</span>
                <Button size="sm" variant="secondary" rightIcon={<ArrowRight size={16} />}>
                    {cta}
                </Button>
            </div>
        </div>
    </motion.div>
);

export const Services = () => {
    return (
        <section className="py-24 bg-rocket-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        className="font-title font-bold text-5xl md:text-6xl text-white mb-6 uppercase tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Level Up Your Game
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Choose from our range of professional coaching services designed to help you reach your dream rank.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Video size={32} />}
                        title="Replay Analysis"
                        features={[
                            "Frame-by-frame breakdown of your gameplay",
                            "Positioning & rotation error detection",
                            "Comparison with SSL gameplay patterns"
                        ]}
                        cta="Analyze Replay"
                        delay={0.2}
                    />
                    <ServiceCard
                        icon={<Crosshair size={32} />}
                        title="Mechanics Training"
                        features={[
                            "Custom training packs tailored to you",
                            "Flip reset & air dribble masterclass",
                            "Speed flip consistency drills"
                        ]}
                        cta="Start Training"
                        delay={0.4}
                    />
                    <ServiceCard
                        icon={<Users size={32} />}
                        title="Live Coaching"
                        features={[
                            "Real-time feedback during matches",
                            "1-on-1 private discord sessions",
                            "Live Q&A and mental game coaching"
                        ]}
                        cta="Book Session"
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};
