import React from 'react';
import './HeroSection.css'; // Ensure your CSS file is correctly imported

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="gif-container transition duration-500 ease-in-out bg-[#57aee5]"> {/* Replace bg-zinc-900 with bg-[#yourColor] for specific colors */}
        <img src="https://i.ibb.co/Z1wCNrk/Animation-Template.gif" alt="Dynamic Background" />
      </div>
    </div>
  );
}
