import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-20 py-6">
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
