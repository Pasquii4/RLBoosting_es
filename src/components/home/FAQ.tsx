import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden mb-4 bg-rocket-card/50 transition-all duration-300 hover:border-rocket-cyan/30">
            <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-title font-bold text-lg md:text-xl text-white">{question}</span>
                <span className={`text-rocket-cyan transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-6 pt-0 text-rocket-textSecondary font-body leading-relaxed border-t border-white/5 mx-6 mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const faqs = [
        {
            question: "How does replay analysis work?",
            answer: "We use advanced AI and computer vision to analyze your gameplay frame-by-frame. We identify positioning errors, rotation mistakes, and mechanical inefficiencies, comparing your playstyle against SSL-level data to provide actionable feedback."
        },
        {
            question: "What rank do I need to be to join?",
            answer: "RLCOACH is designed for players of all ranks! Whether you're a Bronze beginner looking to learn the basics or a Grand Champion aiming for SSL, our tools and community adapt to your skill level."
        },
        {
            question: "What's included in live coaching?",
            answer: "Live coaching sessions include real-time gameplay review, mechanic drills, mentality coaching, and personalized improvement plans. You'll hop into a private Discord call with a verified SSL coach who will guide you through your session."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, absolutely. You can cancel your subscription at any time from your account settings. You'll retain access to premium features until the end of your billing period."
        },
        {
            question: "Do you offer refunds?",
            answer: "We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with the improvement in your gameplay, simply contact support for a full refund."
        }
    ];

    return (
        <section className="py-24 bg-rocket-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rocket-purple/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rocket-blue/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-rocket-cyan to-rocket-blue mx-auto rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
