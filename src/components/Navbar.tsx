import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, BarChart2, Users, Rocket } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/', icon: <Home size={18} /> },
        { name: 'Coaching', path: '/#coaching-plans', icon: <Rocket size={18} /> },
        { name: 'Tracker', path: '/tracker', icon: <BarChart2 size={18} /> },
        { name: 'Comunidad', path: '/community', icon: <Users size={18} /> },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-rocket-dark/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-3" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <motion.div
                        className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-rocket-blue to-rocket-cyan rounded-full shadow-[0_0_15px_rgba(0,217,255,0.5)] group-hover:shadow-[0_0_25px_rgba(0,217,255,0.8)] transition-all duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                    >
                        <Rocket className="text-white w-5 h-5 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </motion.div>
                    <span className="font-title font-bold text-2xl tracking-wider text-white">
                        RL<span className="text-rocket-cyan">COACH.</span>
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "relative flex items-center gap-2 font-medium transition-colors duration-300 group",
                                    isActive ? "text-rocket-cyan" : "text-white/80 hover:text-white"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={cn("transition-colors duration-300", isActive ? "text-rocket-cyan" : "text-white/70 group-hover:text-rocket-cyan")}>
                                        {link.icon}
                                    </span>
                                    <span className="font-title tracking-wide text-lg uppercase">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-2 left-0 right-0 h-1 bg-rocket-cyan shadow-[0_0_15px_rgba(0,217,255,1)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {!isActive && (
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-rocket-blue transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-rocket-cyan transition-colors relative w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-rocket-dark/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 p-3 rounded-lg border border-transparent transition-all duration-300",
                                            isActive
                                                ? "bg-rocket-cyan/10 border-rocket-cyan/20 text-rocket-cyan"
                                                : "hover:bg-white/5 text-white/80 hover:text-white"
                                        )
                                    }
                                >
                                    {link.icon}
                                    <span className="font-title font-bold text-xl uppercase tracking-wider">{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
