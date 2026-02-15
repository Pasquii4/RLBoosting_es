import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CommunityHero } from '../components/community/CommunityHero';
import { BenefitsGrid } from '../components/community/BenefitsGrid';
import { Testimonials } from '../components/community/Testimonials';

export default function Community() {
    return (
        <div className="min-h-screen bg-rocket-dark text-white selection:bg-rocket-cyan/30">
            <Navbar />
            <main>
                <CommunityHero />
                <BenefitsGrid />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}
