import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Imageslide from './components/Imageslide';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Slideshow />
      <Imageslide />
      <Footer />
    </>
  );
}

export default App;
