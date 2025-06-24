import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Education />
        <Skills />
        
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
