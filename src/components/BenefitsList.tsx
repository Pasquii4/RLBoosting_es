

import { motion } from "framer-motion";

const benefits = [
    {
        icon: "🎮",
        title: "EXCLUSIVE COACHING",
        description: "Access to private coaching sessions and personalized gameplay analysis",
    },
    {
        icon: "📊",
        title: "ADVANCED ANALYTICS",
        description: "Track your progress with detailed stats and performance metrics",
    },
    {
        icon: "🏆",
        title: "TOURNAMENTS",
        description: "Participate in community tournaments and compete for prizes",
    },
    {
        icon: "💬",
        title: "24/7 SUPPORT",
        description: "Get help anytime from coaches and experienced community members",
    },
    {
        icon: "🎯",
        title: "TRAINING PACKS",
        description: "Access curated training packs designed by Grand Champion players",
    },
    {
        icon: "🌟",
        title: "EXCLUSIVE CONTENT",
        description: "Early access to coaching videos, guides, and strategy breakdowns",
    },
];

export default function BenefitsList() {
    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold tracking-wide mb-12 text-center"
                >
                    WHAT YOU&apos;LL GET
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="premium-border p-6 bg-black/40 backdrop-blur-sm"
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-lg font-bold tracking-wide mb-3">{benefit.title}</h3>
                            <p className="text-white/60 text-sm tracking-wide leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 premium-border p-8 max-w-3xl mx-auto text-center"
                >
                    <div className="text-sm text-white/50 tracking-wide uppercase mb-4">Testimonial</div>
                    <p className="text-xl italic text-white/80 mb-4">
                        &quot;This community helped me climb from Diamond to Grand Champion in just 3 months.
                        The coaching is top-tier and everyone is super supportive.&quot;
                    </p>
                    <div className="text-accent-primary font-bold tracking-wide">- STUDENT TESTIMONIAL</div>
                </motion.div>
            </div>
        </section>
    );
}
