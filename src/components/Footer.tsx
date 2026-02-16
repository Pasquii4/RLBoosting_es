import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Twitter, Twitch, Mail, Heart } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
    return (
        <footer className="bg-[#05081c] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-rocket-cyan/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-rocket-blue to-rocket-cyan rounded-full">
                                <Rocket className="text-white w-5 h-5" />
                            </div>
                            <span className="font-title font-bold text-2xl tracking-wider text-white">
                                RL<span className="text-rocket-cyan">COACH.</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Mejora tu juego en Rocket League con coaching profesional, análisis avanzado y una comunidad activa.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Twitter size={24} />, href: "#" },
                                { icon: <Twitch size={24} />, href: "#" },
                                { icon: <Mail size={24} />, href: "mailto:support@rl.coach" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-rocket-cyan hover:text-rocket-dark transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-title font-bold text-lg text-white mb-6 uppercase tracking-wider">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Inicio', path: '/' },
                                { name: 'Tracker', path: '/tracker' },
                                { name: 'Comunidad', path: '/community' },
                                { name: 'Precios', path: '/pricing' }
                            ].map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className="text-gray-400 hover:text-rocket-cyan transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-title font-bold text-lg text-white mb-6 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3">
                            {['Política de Privacidad', 'Términos de Servicio', 'Política de Reembolso', 'Política de Cookies'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-rocket-cyan transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-title font-bold text-lg text-white mb-6 uppercase tracking-wider">Mantente al día</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Recibe consejos semanales y ofertas de coaching exclusivas.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Introduce tu email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-rocket-cyan/50 focus:bg-white/10 transition-all font-body text-sm"
                            />
                            <Button size="sm" className="w-full">
                                Suscribirse
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 RLCOACH. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-2">
                        <span>Creado con</span>
                        <Heart className="w-3 h-3 text-rocket-orange fill-rocket-orange animate-pulse" />
                        <span>en Barcelona</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
