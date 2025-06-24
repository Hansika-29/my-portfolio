import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Bento Labs',
    duration: 'November 2024 – May 2025',
    description:
      'Developed responsive React.js components and optimized performance for a travel booking platform. Collaborated with UI/UX designers using Figma.',
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-10">Experience & Internships</h3>
      <div className="space-y-8 max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-teal-600 rounded-full p-3 shadow-md">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
              <p className="text-teal-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
