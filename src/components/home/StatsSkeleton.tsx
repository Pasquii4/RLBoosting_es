import React from 'react';
import { SkeletonBlock } from '../common/SkeletonBlock';

const StatCardSkeleton = () => (
    <div className="bg-rocket-card border border-rocket-border rounded-xl p-8 flex flex-col items-center justify-center h-full">
        <SkeletonBlock className="w-12 h-12 rounded-full mb-4" />
        <SkeletonBlock className="w-24 h-10 mb-2" />
        <SkeletonBlock className="w-32 h-4" />
    </div>
);

export const StatsSkeleton = () => {
    return (
        <section className="py-20 bg-rocket-dark relative">
            <div className="container mx-auto px-6">
                {/* Main Rank Card Skeleton */}
                <div className="max-w-4xl mx-auto bg-rocket-card border border-rocket-border rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
                        <div className="text-center md:text-left w-full">
                            <SkeletonBlock className="w-3/4 h-12 mb-4 mx-auto md:mx-0" />
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <SkeletonBlock className="w-24 h-6" />
                                <SkeletonBlock className="w-20 h-6" />
                            </div>
                        </div>
                        <SkeletonBlock className="w-32 h-32 rounded-full" />
                    </div>
                </div>

                {/* Stats Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                </div>
            </div>
        </section>
    );
};
