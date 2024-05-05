import React, { useEffect, useState } from 'react';
import './LandingPage.css'; // Import your CSS file
import Startt from './Startt.js'; // Import the Startt component
import TypingEffect from './typingeffect'; // Import the TypingEffect component
import DrZen from './DrZen'; 
import './typingeffect.css';

function CoverPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStartComponent, setShowStartComponent] = useState(false);
  const [showDrZenComponent, setShowDrZenComponent] = useState(false);

  // Simulate the delay effect with fade-in animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, []);

  const handleStartClick = (event) => {
    event.preventDefault();
    setShowStartComponent(true); // Show the Startt component on click
    setShowDrZenComponent(false); // Hide the DrZen component
  };

  const handleDrZenClick = (event) => {
    event.preventDefault();
    setShowDrZenComponent(!showDrZenComponent); // Toggle the visibility of the DrZen component
  };

  return (
    <>
      <h1 className="senthead">SentimentZen</h1>
      <div className="putin">
        <div className="main-container">
          <div className={`cover-container ${isLoaded ? 'fade-in' : ''}`}>
            <TypingEffect prefix="Your" />
            <p className="cover-subtitle">Express yourself and let us suggest what's best for you.</p>
            <a href="#" onClick={handleStartClick} className="start-button">
              Start <span>&rarr;</span>
            </a>
            <a href="#" onClick={handleDrZenClick} className="dr-zen-button">
              Talk with Dr. Zen <span>&rarr;</span>
            </a>
          </div>
          {showStartComponent && <Startt />}
        </div>
        {showDrZenComponent && <DrZen />}
      </div>
    </>
  );
}

export default CoverPage;
