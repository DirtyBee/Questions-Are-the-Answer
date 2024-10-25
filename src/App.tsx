import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaSection from './components/MediaSection';
import BookDetails from './components/BookDetails';
import Reviews from './components/Reviews';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MediaSection />
      <BookDetails />
      <Reviews />
      <Store />
      <Footer />
    </div>
  );
}

export default App;