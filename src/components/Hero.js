import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center my-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">Hi, I'm Hansika</h2>
        <p className="text-gray-700 mb-6">
          Passionate software developer dedicated to crafting clean, efficient, and scalable web applications.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-6">
  <a
    href="#projects"
    className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition"
  >
    Explore My Work
  </a>

  <a
    href="/Hansika Resume 2.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
  >
    Download Resume
  </a>
</div>

      </div>
      
    </section>
  );
};

export default Hero;
