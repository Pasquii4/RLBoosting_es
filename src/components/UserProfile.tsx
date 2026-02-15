import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile: React.FC = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="text-white text-center mt-20">Loading profile...</div>;
    }

    if (!isAuthenticated || !user) {
        return <div className="text-white text-center mt-20">Please log in to view your profile.</div>;
    }

    // Mock Data for MVP
    // const subscriptionTier = "Free Starter"; // Removed for Service Pivot
    const mmrData = {
        doubles: 1450,
        standard: 1420,
        duel: 1100,
    };

    return (
        <div className="min-h-screen bg-rocket-dark pt-24 px-6 md:px-20 font-sans text-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-6 mb-12 border-b border-white/10 pb-8">
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-rocket-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    />
                    <div>
                        <h1 className="text-4xl font-display font-bold italic tracking-tighter">{user.name}</h1>
                        <p className="text-white/60">{user.email}</p>
                        <div className="mt-2 inline-block px-3 py-1 rounded bg-rocket-cyan/20 text-rocket-cyan font-bold text-sm tracking-wider border border-rocket-cyan/30">
                            ROCKET LEAGUE ATHLETE
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {Object.entries(mmrData).map(([mode, mmr]) => (
                        <div key={mode} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-rocket-blue/30 hover:bg-white/10 transition-all duration-300 group">
                            <h3 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-2">{mode}</h3>
                            <div className="text-4xl font-display font-bold italic text-white group-hover:text-rocket-blue transition-colors">
                                {mmr} <span className="text-lg not-italic text-white/40">MMR</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coaching CTA */}
                <div className="bg-gradient-to-r from-rocket-blue/10 to-transparent p-8 rounded-2xl border border-rocket-blue/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold font-display italic mb-2">Ready for your next session?</h2>
                        <p className="text-white/70 max-w-xl mb-6">
                            Our coaches are ready to review your latest replays. Book now to keep your momentum.
                        </p>
                        <a href="/#FIVERR_LINK" target="_blank" rel="noopener noreferrer">
                            <button className="bg-rocket-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transform skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                <span className="block skew-x-[10deg]">Book on Fiverr</span>
                            </button>
                        </a>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-rocket-blue/20 rounded-full blur-[80px]" />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
