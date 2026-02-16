import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BarChart2, Trophy, MessageCircle, Target, Film } from 'lucide-react';

const BenefitCard = ({ icon, title, desc, gradient, delay, comingSoon }: { icon: React.ReactNode, title: string, desc: string, gradient: string, delay: number, comingSoon?: boolean }) => (
    <motion.div
        className={`relative h-[280px] rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-rocket-cyan/20 transition-all duration-300 ${comingSoon ? 'grayscale-[0.5] opacity-80' : 'opacity-100'}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} p-8 flex flex-col justify-between z-20`}>
            {/* Top Row: Icon + Badge */}
            <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-inner">
                    {icon}
                </div>
                {comingSoon && (
                    <div className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Próximamente
                    </div>
                )}
            </div>

            <div>
                <h3 className="font-title font-bold text-3xl text-white uppercase tracking-wide mb-2 drop-shadow-md">{title}</h3>
                <div className="w-10 h-1 bg-white/50 rounded-full" />
            </div>

            {/* Decorative gloss */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors pointer-events-none" />
        </div>

        {/* Description Overlay - Improved readability */}
        <div className="absolute inset-0 bg-rocket-dark/95 backdrop-blur-sm p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <h3 className="font-title font-bold text-2xl text-rocket-cyan mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed font-body">{desc}</p>
        </div>
    </motion.div>
);

export const BenefitsGrid = () => {
    const benefits = [
        {
            icon: <Gamepad2 className="text-white w-8 h-8" />,
            title: "Coaching",
            desc: "Recibe feedback personalizado de coaches SSL y mejora tus mecánicas al instante.",
            gradient: "from-purple-600 to-indigo-900"
        },
        {
            icon: <BarChart2 className="text-white w-8 h-8" />,
            title: "Analíticas",
            desc: "Profundiza en tus datos de partida con nuestras herramientas avanzadas de seguimiento.",
            gradient: "from-blue-500 to-cyan-900"
        },
        {
            icon: <Trophy className="text-white w-8 h-8" />,
            title: "Torneos",
            desc: "Compite en torneos semanales con premios en efectivo para todos los rangos.",
            gradient: "from-orange-500 to-red-900"
        },
        {
            icon: <MessageCircle className="text-white w-8 h-8" />,
            title: "Chat 24/7",
            desc: "Siempre tendrás con quien jugar. Nuestros canales LFG te permiten encontrar equipo.",
            gradient: "from-emerald-500 to-teal-900"
        },
        {
            icon: <Target className="text-white w-8 h-8" />,
            title: "Packs",
            desc: "Acceso exclusivo a packs de entrenamiento premium diseñados por pros.",
            gradient: "from-pink-500 to-rose-900",
            comingSoon: true
        },
        {
            icon: <Film className="text-white w-8 h-8" />,
            title: "Contenido",
            desc: "Envía tus clips para nuestro vídeo semanal y sal en nuestras redes sociales.",
            gradient: "from-violet-500 to-fuchsia-900",
            comingSoon: true
        }
    ];

    return (
        <section className="py-24 bg-rocket-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-title font-bold text-4xl md:text-5xl text-white mb-4 uppercase">Beneficios de Miembros</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Todo lo que necesitas para llevar tu carrera en Rocket League al siguiente nivel.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((b, i) => (
                        <BenefitCard
                            key={i}
                            icon={b.icon}
                            title={b.title}
                            desc={b.desc}
                            gradient={b.gradient}
                            delay={i * 0.1}
                            comingSoon={b.comingSoon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
