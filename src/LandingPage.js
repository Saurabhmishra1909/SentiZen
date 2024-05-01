import React, { useEffect, useState } from 'react';
import './LandingPage.css'; // Import your CSS file
import Startt from './Startt.js'; // Import the Startt component
import TypingEffect from './typingeffect'; // Import the TypingEffect component
import './typingeffect.css';

function CoverPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStartComponent, setShowStartComponent] = useState(false);

  // Simulate the delay effect with fade-in animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, []);

  const handleStartClick = (event) => {
    event.preventDefault();
    setShowStartComponent(true); // Show the Startt component on click
  };

  return (
    <>
    <h1 className="headclass">SentimentZen</h1>
    <div className="putin">
      {showStartComponent ? ( // Conditionally render based on showStartComponent state
        <Startt /> // Render the Startt component if showStartComponent is true
      ) : (
        
        <div className={`cover-container ${isLoaded ? 'fade-in' : ''}`}>
          {/* Render cover-container content only if showStartComponent is false */}
         
          <TypingEffect prefix="Your" />
          <p className="cover-subtitle">Express yourself and let us suggest what's best for you.</p>
          <a href="#" onClick={handleStartClick} className="start-button">
            Start <span>&rarr;</span>
          </a>
        </div>
      )}
    </div>
    </>
  );
}

export default CoverPage;
