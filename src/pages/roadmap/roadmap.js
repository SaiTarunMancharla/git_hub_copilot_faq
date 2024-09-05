import React, { useEffect, useRef } from 'react';

const Roadmap = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const arrow = arrowRef.current;
      if (arrow) {
        arrow.style.transform = `translateY(${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto w-full h-full pt-20" style={{ backgroundColor: '#111827' }}> {/* Added pt-20 for padding */}
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }} // Corrected style prop usage
        ></div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <a href="#ai"><h3 className="mb-3 font-bold text-gray-800 text-xl underline">Artificial intelligence</h3></a>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Artificial Intelligence (AI) is the simulation of human intelligence in machines. 
              It enables systems to learn from data, recognize patterns, and make decisions. 
              AI is used in various applications such as natural language processing, robotics, and computer vision. 
              It has the potential to transform industries by automating tasks and providing insights. 
              The future of AI holds promise for advancements in healthcare, finance, and beyond.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <a href="#genai"><h3 className="mb-3 font-bold text-gray-800 text-xl underline">GENAI</h3></a>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              Generative AI refers to algorithms that can create new content, such as text, images, or music. 
              It leverages models like GANs and transformers to generate data that mimics real-world examples. 
              This technology is used in applications ranging from art creation to natural language processing. 
              Generative AI has the potential to revolutionize industries by automating creative processes. 
              It continues to evolve, offering new possibilities for innovation and creativity.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <a href="#genai-models"><h3 className="mb-3 font-bold text-gray-800 text-xl underline">GENAI models</h3></a>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Generative AI models, such as GANs and transformers, are designed to create new data. 
              These models can generate realistic images, text, music, and more by learning from existing data. 
              They are used in various applications, including content creation, data augmentation, and simulation. 
              Generative AI models have the potential to revolutionize industries by automating creative tasks. 
              As these models continue to improve, they open up new possibilities for innovation and creativity.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <button className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-white text-xl font-bold">
            GitHub Copilot 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;