import React, { useState, useEffect } from 'react';

export default function AboutSection() {
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

  const backgroundColor = '#57aee5'; // Light blue background
  const cardBackgroundColor = '#407fa3'; // Specified darker shade

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

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 8px #000000, 0 0 16px #000000, 0 0 24px #000000;
          }
          50% {
            text-shadow: 0 0 8px #FFFFFF, 0 0 16px #FFFFFF, 0 0 24px #FFFFFF;
          }
        }
      `}</style>
      <div 
        className="flex justify-center items-center min-h-screen p-5"
        style={{ background: backgroundColor }}
      >
        <div className="max-w-6xl w-full rounded-lg shadow-xl overflow-hidden lg:flex" style={{ backgroundColor: cardBackgroundColor }}>
          <div className="lg:w-1/2 xl:w-3/5">
            <img 
              className="object-cover w-full h-full" 
              src="https://i.ibb.co/TYWPv8R/black.gif" 
              alt="Intriguing Digital Art"
            />
          </div>
          
          <div className="py-12 px-8 lg:px-12 xl:px-16 lg:w-1/2 xl:w-2/5 font-stone text-white">
            <h2 className="text-4xl font-bold mb-4" style={{ animation: 'titleGlow 2s infinite' }}>
            Bringing The Balance
            </h2>
            <p className="mb-6">
            In a landscape full of meme tokens that take themselves way too seriously or try way too hard to be funny, $YinYang hits that sweet spot right in the middle. It's the perfect fusion of degen energy and zen-like tranquility, the cosmic yin to your yang, the dark side of the moon to your sunny side up
            </p>
            <div className="flashy-text text-lg mb-5" style={{ animation: 'textGlow 1s infinite' }}>
            you bunch of wild and wacky degens!
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>
              have your minds expanded and your spirits lifted by $YinYang, the Solana token that's bringing a much-needed dose of balance to the crazy carnival of sol!
              </li>
              {/* More list items or content as needed */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
