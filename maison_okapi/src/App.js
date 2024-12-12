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
import DiscoveryPage from "./components/DiscoveryPage";
import AboutUs from './components/AboutUs';
import NewCollection from "./components/NewCollection";

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
     
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/shirt-jackets" element={<ShirtJacketsPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/newcollection" element={<NewCollection/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
