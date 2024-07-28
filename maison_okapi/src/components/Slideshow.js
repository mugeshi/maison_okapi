import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Importing CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons
import { faArrowLeft, faArrowRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

// Array of image URLs for the slideshow
const images = [
  'https://www.designscene.net/wp-content/uploads/2023/05/AMIRI-Pre-Fall-2023-00.jpg',
  'https://airows.com/.image/t_share/MTY3NjU5Mzg5NzI4MjAzOTgw/editorial_mens_instock_q419_leeward_olive_plaid_01_2880progressive.jpg',
  'https://images.squarespace-cdn.com/content/v1/5a038f54bce176d6063c17fe/1576372103451-YAJJCRFISJXMBBF1BAXK/1.12.1_1.12.1.png?format=1000w',
];

const Slideshow = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track whether the slideshow is paused
  const [isPaused, setIsPaused] = useState(false);

  // Effect to handle the automatic image transition
  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }
    // Cleanup interval on component unmount or when paused state changes
    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to toggle play/pause state
  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="slideshow">
      {/* Display the current image */}
      <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
      
      <div className="slideshow-controls">
        {/* Button to go to the previous image */}
        <button onClick={goToPrevious} className="slideshow-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        
        {/* Button to toggle between play and pause */}
        <button onClick={togglePlayPause} className="slideshow-button">
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
        
        {/* Button to go to the next image */}
        <button onClick={goToNext} className="slideshow-button">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <div className="slideshow-caption-container">
          <p className="slideshow-caption">Discover</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
