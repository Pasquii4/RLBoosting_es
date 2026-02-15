import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export const redirectToCheckout = async (priceId: string) => {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe failed to load");

    const { error } = await (stripe as any).redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'subscription',
        successUrl: `${window.location.origin}/profile?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/pricing`,
    });

    if (error) {
        console.error("Stripe Checkout Error:", error);
    }
};
