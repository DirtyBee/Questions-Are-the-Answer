import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart } from 'lucide-react';
import Cart from './Cart';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

export default function Store() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handlePurchase = async () => {
    setIsCartOpen(true);
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // This would typically come from your backend
      const session = {
        price_id: 'your_price_id',
        quantity: 1,
      };

      // Redirect to checkout
      await stripe.redirectToCheckout({
        lineItems: [session],
        mode: 'payment',
        successUrl: window.location.origin + '/success',
        cancelUrl: window.location.origin + '/canceled',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="store" className="py-24 bg-gray-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Get Your Copy Today</h2>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
            alt="Book Cover"
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Questions Are The Answer</h3>
            <p className="text-gray-600 mb-4">Hardcover Edition</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">$24.99</span>
              <span className="text-green-600">In Stock</span>
            </div>
            
            <button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>{loading ? 'Processing...' : 'Purchase Now'}</span>
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Secure payment powered by Stripe</p>
              <p>Apple Pay available at checkout</p>
            </div>
          </div>
        </div>
      </div>

      <Cart 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen}
        onCheckout={handleCheckout}
      />
    </section>
  );
}