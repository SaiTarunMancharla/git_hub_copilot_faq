import React from 'react';
import video from '../activation/pilot.mp4'; 
import image from '../activation/github.png';

const Activation = ({ cardWidth = 'w-full ', videoWidth = 'w-full', videoHeight = 'h-auto' }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Card Section */}
          <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${cardWidth} flex flex-col justify-center mx-auto`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> {/* Increased gap to 12 */}
              <div className="text-justify">
                <h2 className="text-2xl font-bold mb-4">Why GitHub Copilot</h2>
                <p className="mb-4">GitHub Copilot is your AI-powered coding assistant that helps you write code faster and with fewer errors. It understands your context and suggests code snippets, making your development process more efficient and enjoyable.</p>
                <button style={{ backgroundColor: '#2563EB' }} className="text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
              <div className="flex items-center justify-center h-full gap-15">
                <img src={image} alt="Sample" className="rounded-lg h-full w-full object-cover" />
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="flex items-center justify-center">
            <video className={`rounded-lg ${videoWidth} ${videoHeight}`} autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activation;