import React from 'react';

const Stats = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">50+</h2>
          <p className="text-lg text-gray-400">Your Ultimate UseSphere Designer</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">6</h2>
          <p className="text-lg text-gray-400">years experience</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">80+</h2>
          <p className="text-lg text-gray-400">successful projects</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">100%</h2>
          <p className="text-lg text-gray-400">passion</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h3 className="text-2xl font-bold text-white mb-4">Working at where creativity meets functionality</h3>
        <p className="text-gray-400">With years of experience in product design, I dream and deliver exceptional user experience</p>
      </div>
    </div>
  );
};

export default Stats;