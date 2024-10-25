import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

export default function Reviews() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const reviews = [
    {
      text: "A game-changing approach to innovation and problem-solving.",
      author: "Harvard Business Review",
      rating: 5
    },
    {
      text: "Transforms the way we think about asking questions.",
      author: "Forbes",
      rating: 5
    },
    {
      text: "Essential reading for leaders and innovators.",
      author: "Wall Street Journal",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-16">What People Are Saying</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <p className="text-blue-600 font-semibold">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}