import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Questions Are The Answer
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              A Breakthrough Approach to Creative Problem Solving, Innovation, and Change
            </p>
            <p className="mt-6 text-lg text-blue-100">
              By Hal Gregersen
            </p>
            <a href="#store" className="mt-8 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Your Copy
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
              alt="Book Cover"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}