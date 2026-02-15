import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    highlight?: boolean;
    priceId?: string; // Stripe Price ID
}

const tiers: PricingTier[] = [
    {
        name: "Starter",
        price: "$0",
        description: "For the curious player.",
        features: [
            "Basic MMR Tracker (Last 10 sessions)",
            "Community Access (Discord General)",
            "No AI Analysis",
            "No Coaching Discounts"
        ],
        cta: "Start Free",
    },
    {
        name: "Pro",
        price: "$19",
        description: "For the serious grinder.",
        features: [
            "Unlimited MMR Tracker",
            "5 AI Replay Analyses / mo",
            "20% OFF all Fiverr Coaching Sessions",
            "Strategy Discord Channels"
        ],
        cta: "Go Pro",
        highlight: true,
        priceId: "price_pro_placeholder"
    },
    {
        name: "Elite",
        price: "$49",
        description: "For the future professional.",
        features: [
            "Everything in Pro",
            "VIP Direct Chat with Coaches",
            "Monthly Group Coaching Call",
            "Priority Fiverr Booking"
        ],
        cta: "Join Elite",
        priceId: "price_elite_placeholder"
    }
];

const PricingTables: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleSubscribe = async (priceId?: string) => {
        if (!isAuthenticated) {
            loginWithRedirect({ appState: { returnTo: '/pricing' } });
            return;
        }

        if (!priceId) {
            // Free tier logic or redirect to dashboard
            window.location.href = '/tracker';
            return;
        }

        console.log("Redirecting to Stripe Checkout for", priceId);
        // Implement Stripe Checkout Redirect here
        // const stripe = await stripePromise;
        // await stripe?.redirectToCheckout({ lineItems: [{ price: priceId, quantity: 1 }], mode: 'subscription', successUrl, cancelUrl });
        alert(`Integration Stub: Redirecting to Stripe for ${priceId}`);
    };

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold italic tracking-tighter mb-4">
                        Choose Your <span className="text-rocket-blue">Path</span>.
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Whether you're just starting or aiming for RLCS, we have the tools you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${tier.highlight
                                    ? "bg-rocket-blue/10 border-rocket-blue shadow-[0_0_30px_rgba(59,130,246,0.2)] transform md:-translate-y-4"
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rocket-blue text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                                    Best Value
                                </div>
                            )}
                            <h3 className="text-2xl font-display font-bold italic mb-2">{tier.name}</h3>
                            <div className="text-4xl font-bold mb-4">
                                {tier.price}<span className="text-lg font-normal text-white/40">/mo</span>
                            </div>
                            <p className="text-white/60 mb-8 h-10">{tier.description}</p>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="text-rocket-blue font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleSubscribe(tier.priceId)}
                                className={`w-full py-3 rounded font-bold uppercase tracking-widest transition-all ${tier.highlight
                                        ? "bg-rocket-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTables;
