import React from 'react';
import { Video, Podcast } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function MediaSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Video Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Video className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Featured Video</h2>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Questions Are The Answer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Podcast className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Latest Podcast</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Power of Questioning</h3>
              <audio className="w-full" controls>
                <source src="/path-to-your-podcast.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="mt-4 text-gray-600">
                Listen to Hal Gregersen discuss how asking the right questions can transform your approach to problem-solving and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}