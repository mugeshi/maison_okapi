import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageFeatured from "./components/ImageFeatured";
import Slideshow from "./components/Slideshow";
import Imageslide from "./components/Imageslide";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import JacketsPage from "./components/JacketsPage";
import ShirtJacketsPage from "./components/ShirtJacketsPage"; 

const LandingPage = () => (
  <>
    <Hero />
    <ImageFeatured />
    <Slideshow />
    <Imageslide />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/shirt-jackets" element={<ShirtJacketsPage />} /> {/* Add the route for ShirtJacketsPage */}
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
