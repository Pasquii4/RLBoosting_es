import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'discord' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {

        const variants = {
            primary: "bg-btn-primary border-2 border-rocket-blue text-white shadow-[0_4px_20px_rgba(0,217,255,0.3)] hover:transform hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,200,255,0.3)] active:translate-y-0 active:shadow-[0_4px_18px_rgba(0,200,255,0.25)] transition-all duration-200 cubic-bezier(0.4, 0, 0.2, 1) disabled:opacity-70 disabled:grayscale disabled:hover:transform-none",
            secondary: "bg-transparent border-2 border-rocket-cyan/50 text-rocket-cyan hover:bg-rocket-cyan/10 hover:border-rocket-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] active:scale-98 transition-all duration-200",
            discord: "bg-[#5865F2] text-white hover:bg-[#4752c4] shadow-[0_4px_15px_rgba(88,101,242,0.4)] hover:shadow-[0_8px_25px_rgba(88,101,242,0.6)] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300",
            ghost: "bg-transparent text-rocket-textSecondary hover:text-white hover:bg-white/5 transition-colors duration-200",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-3 text-base",
            lg: "px-10 py-4 text-lg font-bold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider font-title",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
