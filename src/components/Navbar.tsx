import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">Questions Are The Answer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#book" className="text-gray-700 hover:text-blue-600">The Book</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</a>
            <a href="#store" className="text-gray-700 hover:text-blue-600">Store</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#book" className="block px-3 py-2 text-gray-700 hover:text-blue-600">The Book</a>
            <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reviews</a>
            <a href="#store" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Store</a>
          </div>
        </div>
      )}
    </nav>
  );
}