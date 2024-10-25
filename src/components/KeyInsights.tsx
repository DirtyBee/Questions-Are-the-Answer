import React from 'react';
import { BookOpen, Brain, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function KeyInsights() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section 
      id="insights"
      ref={ref}
      className={`py-24 px-4 bg-gray-50 transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Key Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCard
            Icon={Brain}
            title="The Power of Inquiry"
            description="Learn how asking the right questions can lead to breakthrough solutions and innovation."
            iconColor="text-blue-600"
          />
          <InsightCard
            Icon={Quote}
            title="Question Burst"
            description="Discover the technique of rapid-fire questioning to unlock creative potential."
            iconColor="text-green-600"
          />
          <InsightCard
            Icon={BookOpen}
            title="Leadership Through Questions"
            description="Transform your leadership style by mastering the art of asking powerful questions."
            iconColor="text-purple-600"
          />
        </div>
      </div>
    </section>
  );
}

interface InsightCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
}

function InsightCard({ Icon, title, description, iconColor }: InsightCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Icon className={`h-12 w-12 ${iconColor} mb-4`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}