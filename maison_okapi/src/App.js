import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageFeatured from "./components/ImageFeatured";
import Slideshow from "./components/Slideshow";
import Imageslide from "./components/Imageslide";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

const LandingPage = () => (
  <>
  <Navbar />
    <Hero />
    <ImageFeatured />
    <Slideshow />
    <Imageslide />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the landing page */}
        <Route path="/home" element={<LandingPage />} />

        {/* Route for the Profile page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
     
    </Router>
  );
};

export default App;
