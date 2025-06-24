import React from 'react';
import { BadgeCheck } from 'lucide-react'; // Optional, can replace with emoji

const certifications = [
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2024',
    link: 'https://www.freecodecamp.org/certificate-link',
  },
  {
    title: 'Frontend Development with React',
    issuer: 'Coursera (Meta)',
    year: '2023',
    link: 'https://www.coursera.org/certificate-link',
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan (Coursera)',
    year: '2023',
    link: 'https://www.coursera.org/certificate-link2',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-10">Certifications</h3>
      <ul className="space-y-6 max-w-4xl">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-white shadow-md rounded p-4 border-l-4 border-teal-600">
            <div className="flex items-start gap-3">
              <div className="bg-teal-600 p-2 rounded-full text-white">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-sm text-teal-600">{cert.issuer} — {cert.year}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                  View Certificate
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
