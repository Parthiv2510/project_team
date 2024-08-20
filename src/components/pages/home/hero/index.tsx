import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Reliable Courier Services</h1>
        <p className="mt-4 text-lg md:text-xl">Delivering packages safely and on time</p>
        <a href="/services" className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-600">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
