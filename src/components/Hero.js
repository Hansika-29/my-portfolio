import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center my-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">Hi, I'm Hansika</h2>
        <p className="text-gray-700 mb-6">
          Passionate software developer dedicated to crafting clean, efficient, and scalable web applications.
        </p>
        <a
          href="/Hansika Resume 2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 transition"
        >
          Download Resume
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
