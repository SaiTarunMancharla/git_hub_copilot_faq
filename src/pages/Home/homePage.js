import React, { useState, useRef } from 'react';
import heroVideo from '../Home/hero.mp4';
import pilot from '../Home/pilot.mp4'; 

const HomePage = () => {

  const [setVideoEnded] = useState(false); // State variable to track if the video has ended
  const heroVideoRef = useRef(null); // Reference to the hero video element

  // Function to play the hero video when mouse enters
  const handleMouseEnter = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play();
    }
  };

  // Function to handle video end event
  const handleVideoEnd = () => {
    setVideoEnded(true); // Set the video ended state to true
    if (heroVideoRef.current) {
      heroVideoRef.current.pause(); // Pause the hero video
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center pt-52">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        style={{ paddingTop: '62px' }}
      >
        <source src={pilot} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 mb-8">
        <h1 className="text-8xl font-bold text-white">Know Your New Superhero</h1>
      </div>
      <div className="relative z-15 flex items-center mb-8">
        <div className="flex items-center border-2 border-blue-500 rounded-full overflow-hidden">
        <a href="https://miniature-guacamole-4547q955jw6c75p6.github.dev/" target="_blank" rel="noopener noreferrer">
            <button className="p-3 bg-blue-500 text-white text-lg hover:bg-blue-700">
              Get Started
            </button>
          </a>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-screen-xl">
        <video
          ref={heroVideoRef}
          className={`w-full h-auto rounded-lg `}
          muted
          onMouseEnter={handleMouseEnter}
          onEnded={handleVideoEnd}
          loop
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomePage;
