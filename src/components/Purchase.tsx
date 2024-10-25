import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface PurchaseProps {
  onPurchaseClick: () => void;
}

export default function Purchase({ onPurchaseClick }: PurchaseProps) {
  return (
    <section id="purchase" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get Your Copy Today</h2>
        <p className="text-xl text-gray-600 mb-12">
          Transform your approach to problem-solving and innovation
        </p>
        <div className="inline-block bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Hardcover Edition</h3>
          <p className="text-4xl font-bold mb-6">$24.99</p>
          <button
            onClick={onPurchaseClick}
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}