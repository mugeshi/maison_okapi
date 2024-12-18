import React, { useState } from 'react';
import './SizeGuide.css';

const SizeGuide = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="size-guide">
      <header className="size-guide-header">
        <h1>Size Guide</h1>
        <p>Find all the information you need to get the perfect fit.</p>
      </header>

      {/* Made-to-Measure Guide */}
      <section className="size-guide-section">
        <div className="size-guide-title" onClick={() => toggleSection('madeToMeasure')}>
          <h2>1. Made-to-Measure Guide</h2>
          <span>{activeSection === 'madeToMeasure' ? '▼' : '▶'}</span>
        </div>
        {activeSection === 'madeToMeasure' && (
          <div className="size-guide-content">
            <p>For custom pieces, we recommend providing the following measurements:</p>
            <ul>
              <li>1. Chest</li>
              <li>2. Waist</li>
              <li>3. Hips</li>
              <li>4. Shoulders</li>
              <li>5. Sleeve Length</li>
              <li>6. Back Length</li>
            </ul>
            <h3>Submit Your Measurements</h3>
            <p>
              <strong>Option 1:</strong> Download and complete our Measurement Form (PDF). Once filled, email it to us at{' '}
              <a href="mailto:info@maisonokapi.com">info@maisonokapi.com</a>.
            </p>
            <p>
              <strong>Option 2:</strong> Use our Online Measurement Form to submit your measurements directly on the website.
            </p>
          </div>
        )}
      </section>

      {/* Ready-to-Wear Size Chart */}
      <section className="size-guide-section">
        <div className="size-guide-title" onClick={() => toggleSection('readyToWear')}>
          <h2>2. Ready-to-Wear Size Chart</h2>
          <span>{activeSection === 'readyToWear' ? '▼' : '▶'}</span>
        </div>
        {activeSection === 'readyToWear' && (
          <div className="size-guide-content">
            <p>Here’s our ready-to-wear size chart:</p>
            {/* You can insert your images here */}
            <div className="size-chart-images">
              <img src="path-to-image1.jpg" alt="Size Chart 1" />
              <img src="path-to-image2.jpg" alt="Size Chart 2" />
            </div>
          </div>
        )}
      </section>

      {/* Measurement Tips */}
      <section className="size-guide-section">
        <div className="size-guide-title" onClick={() => toggleSection('measurementTips')}>
          <h2>Measurement Tips</h2>
          <span>{activeSection === 'measurementTips' ? '▼' : '▶'}</span>
        </div>
        {activeSection === 'measurementTips' && (
          <div className="size-guide-content">
            <ul>
              <li>Use a soft measuring tape.</li>
              <li>Wear fitted clothing while measuring.</li>
              <li>Ask someone to help for better accuracy.</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default SizeGuide;
