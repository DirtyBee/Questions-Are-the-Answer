import React from 'react';
import { X } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, setIsOpen, onCheckout }: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Book cover"
                className="w-16 h-24 object-cover"
              />
              <div>
                <h3 className="font-medium">Questions Are The Answer</h3>
                <p className="text-sm text-gray-600">Hardcover Edition</p>
              </div>
            </div>
            <p className="font-semibold">$24.99</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-semibold">$24.99</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Checkout with Apple Pay
          </button>
        </div>
      </div>
    </div>
  );
}