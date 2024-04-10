import React, { useState, useEffect } from 'react';

const TokenomicsSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Background and card colors based on the AboutSection updates
  const backgroundColor = '#57aee5'; // Light blue background
  const cardBackgroundColor = '#407fa3'; // Darker shade for the card's background

  return (
    <>
      <style jsx global>{`
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 8px #000000, 0 0 10px #000000, 0 0 20px #000000, 0 0 40px #000000;
          }
          50% { 
            text-shadow: 0 0 8px #FFFFFF, 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 40px #FFFFFF;
          }
        }
      `}</style>
      <div 
        id="tokenomics" 
        className="flex justify-center items-center min-h-screen p-5 font-stone relative"
        style={{ background: backgroundColor, color: 'white' }}
      >
        <div className="max-w-6xl w-full bg-zinc-900 rounded-lg shadow-xl overflow-hidden lg:flex" style={{ backgroundColor: cardBackgroundColor }}>
          <div className="lg:w-1/2 xl:w-3/5">
            <img 
              src="https://i.ibb.co/Dk5n2Dx/white.gif" 
              alt="DIELA PreSale" 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          
          <div className="py-12 px-8 lg:px-12 xl:px-16 lg:w-1/2 xl:w-2/5">
            <h2 className="text-4xl font-bold mb-6" style={{ animation: 'textGlow 2s infinite' }}>
            Yin, Yang, Yum! 😉🌗💫
            </h2>
            <p className="mb-4">
              $YinYang will have a PreSale on Pump.Fun
            </p>
            <h3 className="text-2xl font-bold mb-4" style={{ animation: 'textGlow 2s infinite' }}>
              Radium Incoming!
            </h3>
            <img 
              src="https://i.ibb.co/NV07RdM/black-all-line.gif" 
              alt="Wen Logo" 
              className="mx-auto rounded-lg transition-transform duration-500 hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenomicsSection;
