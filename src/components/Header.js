import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-teal-700">HANSIKA MUPPARTI</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-teal-700">About</a>
          <a href="#skills" className="hover:text-teal-700">Skills</a>
          <a href="#projects" className="hover:text-teal-700">Projects</a>
          <a href="#contact" className="hover:text-teal-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
