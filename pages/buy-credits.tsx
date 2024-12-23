import { loadStripe } from '@stripe/stripe-js';
    import { useEffect } from 'react';

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    export default function BuyCredits() {
      useEffect(() => {
        const redirectToCheckout = async () => {
          const stripe = await stripePromise;
          const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: 'price_1Hh1Y2IyNTgGDV2k9X1Y2k9X', quantity: 1 }],
            mode: 'payment',
            successUrl: `${window.location.origin}/dashboard`,
            cancelUrl: `${window.location.origin}/dashboard`,
          });
          if (error) console.error('Error redirecting to checkout:', error);
        };

        redirectToCheckout();
      }, []);

      return <p>Redirecting to Stripe...</p>;
    }
