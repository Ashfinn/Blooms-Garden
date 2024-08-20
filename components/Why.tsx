import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="my-10 p-6 bg-base-100 rounded-lg shadow-lg animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Bloom&apos;s Garden?</h2>
      <p className="text-lg mb-6 text-center">
        We offer a wide selection of flowers and plants that will bring life to your home or garden. 
        Our expert gardeners hand-pick the best flowers for you.
      </p>
      <div className="flex justify-center">
        <button className="btn btn-primary hover:bg-primary-focus transform hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
