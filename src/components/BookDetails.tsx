import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Brain, Lightbulb } from 'lucide-react';

export default function BookDetails() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="book" className="py-24 bg-gray-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Discover the Power of Questions</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transform Your Thinking</h3>
            <p className="text-gray-600">Learn how the right questions can lead to breakthrough solutions and innovative ideas.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unlock Creativity</h3>
            <p className="text-gray-600">Discover techniques to foster curiosity and drive meaningful change in your organization.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Drive Innovation</h3>
            <p className="text-gray-600">Master the art of asking catalytic questions that spark innovation and problem-solving.</p>
          </div>
        </div>
      </div>
    </section>
  );
}