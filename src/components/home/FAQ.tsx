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
            question: "¿Qué rango necesito para recibir coaching?",
            answer: "Trabajamos con jugadores de todos los rangos, desde Bronze hasta Grand Champion. Nuestro coaching se adapta a tu nivel actual y objetivos específicos."
        },
        {
            question: "¿Cómo funciona una sesión de coaching?",
            answer: "Reservas tu sesión en Fiverr, coordinamos un horario por Discord, y luego tenemos una sesión de 60 minutos donde jugamos juntos o analizamos tus replays en tiempo real con feedback por voz."
        },
        {
            question: "¿Qué incluye el coaching 1-on-1?",
            answer: "Cada sesión incluye análisis de gameplay en vivo, corrección de errores en tiempo real, entrenamientos de mecánicas, coaching de mentalidad, y notas personalizadas post-sesión con un plan de mejora."
        },
        {
            question: "¿Puedo cancelar o reprogramar mi sesión?",
            answer: "Sí. Ofrecemos cancelación gratuita hasta 6 horas antes de la sesión programada. Para reprogramar, simplemente contáctanos por Discord con anticipación."
        },
        {
            question: "¿Ofrecen garantía de resultados?",
            answer: "Si bien no podemos garantizar un rango específico (depende de tu práctica), garantizamos que identificaremos exactamente qué te está frenando y te daremos un plan claro para mejorar. Si no estás satisfecho con la sesión, contáctanos para una solución."
        },
        {
            question: "¿En qué idioma son las sesiones?",
            answer: "Ofrecemos sesiones en español e inglés. Especifica tu preferencia al reservar en Fiverr o al coordinar la sesión por Discord."
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
                        Preguntas Frecuentes
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
