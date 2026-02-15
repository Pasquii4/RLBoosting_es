

import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {children}
        </div>
    );
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    span?: "col-1" | "col-2" | "col-3";
}

export function BentoCard({ children, className = "", span = "col-1" }: BentoCardProps) {
    const spanClass = {
        "col-1": "md:col-span-1",
        "col-2": "md:col-span-2",
        "col-3": "md:col-span-3",
    }[span];

    return (
        <div className={`premium-border p-6 bg-black/40 backdrop-blur-sm ${spanClass} ${className}`}>
            {children}
        </div>
    );
}
