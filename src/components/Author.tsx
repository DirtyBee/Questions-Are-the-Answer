import React from 'react';

export default function Author() {
  return (
    <section id="author" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hal Gregersen"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">About the Author</h2>
            <p className="text-gray-600 mb-6">
              Hal Gregersen is Executive Director of the MIT Leadership Center and a Senior Lecturer 
              in Leadership and Innovation at the MIT Sloan School of Management.
            </p>
            <p className="text-gray-600">
              His research focuses on how leaders can build organizations where people are encouraged 
              to ask the questions that lead to breakthrough innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}