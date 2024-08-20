import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen animate-fadeIn"
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">From the Shadows, We Bloom</h1>
          <p className="mb-5">
          Explore our collection of flowers that have grown through the toughest of times, just like us.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
