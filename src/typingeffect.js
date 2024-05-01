import React, { useEffect, useState } from 'react';
import './typingeffect.css';


function TypingEffect({ prefix }) {
  const phrases = ["SentimentZen", "Mood Enhancer", "Personal Recommender"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < currentPhrase.length) {
        setCharIndex(charIndex + 1);
      } else {
        // If we've typed out the current phrase, move to the next one
        setIndex((index + 1) % phrases.length);
        setCurrentPhrase(phrases[index]);
        setCharIndex(0);
      }
    }, 200); // Adjust typing speed here

    return () => clearTimeout(timer);
  }, [charIndex, currentPhrase, index, phrases]);

  return <p className="cover-title">{prefix} {currentPhrase.substring(0, charIndex)}</p>;
}

export default TypingEffect;
