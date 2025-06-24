import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-300 shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-teal-700">     HANSIKA MUPPARTI </h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-teal-700">About</a>
          <a href="#education" className="hover:text-teal-700">Education</a>
          <a href="#skills" className="hover:text-teal-700">Skills</a>
          <a href="#experience" className="hover:text-teal-700">Experience</a>
          <a href="#certifications" className="hover:text-teal-700">Certifications</a>
          <a href="#projects" className="hover:text-teal-700">Projects</a>
          <a href="#contact" className="hover:text-teal-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
