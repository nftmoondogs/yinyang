import React from 'react';

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #000000; } /* Black for the flashy effect */
          }

          .flashy {
            animation: textFlash 1s infinite;
          }
        `}
      </style>
      <footer id="foundation" className="text-white py-12 px-8 font-stone" style={{ backgroundColor: '#407fa3' }}>
        <div className="container mx-auto flex flex-col items-center">
          <img src="https://i.ibb.co/kxgrrkb/logo.gif" alt="Logo" className="mb-4 h-20 w-auto transition duration-300 ease-in-out hover:scale-105" />
          <h2 className="text-3xl font-bold mb-6 flashy">$YinYang Token</h2>
          <p className="leading-relaxed max-w-md mx-auto text-lg mb-6">
          Yin, Yang, Yum! 😉🌗💫
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://twitter.com/Secretsoltoken" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out hover:scale-125">
              Twitter {/* Ideally, replace <span> with an actual icon */}
            </a>
            <a href="https://t.me/yinyangtribe" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out hover:scale-125">
              Telegram {/* Ideally, replace <span> with an actual icon */}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
