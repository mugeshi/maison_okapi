import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Imageslide from './components/Imageslide';
import Footer from './components/Footer';
import Profile from './components/Profile'; // Correct import path

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Home />
      <Slideshow />
      <Imageslide />
      <Footer />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
  );
}

export default App;
