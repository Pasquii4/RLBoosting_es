import React from 'react';

interface SkeletonBlockProps {
    className?: string;
}

export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({ className }) => {
    return (
        <div className={`animate-pulse bg-rocket-card/50 rounded ${className}`} />
    );
};
