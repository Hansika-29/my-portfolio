import React from 'react';
import { GraduationCap, School } from 'lucide-react'; // assuming you're using lucide-react icons

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in CSE (AI & ML)',
      institution: 'MLR Institute of Technology, Hyderabad',
      duration: '2022 - 2026',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      description:
        'Pursuing a specialization in Artificial Intelligence and Machine Learning, with active involvement in frontend development and emerging technologies.',
    },
    {
      degree: 'Senior Secondary (XII)',
      institution: 'Excellencia Junior College',
      duration: '2020 - 2022',
      icon: <School className="h-6 w-6 text-white" />,
      description:
        'Studied MPC (Maths, Physics, Chemistry) with a strong foundation in problem-solving and logical thinking.',
    },
    {
      degree: 'Secondary (X)',
      institution: 'Pranav International School',
      duration: '2019 - 2020',
      icon: <School className="h-6 w-6 text-white" />,
      description:
        'Completed class 10th in CBSE syllabus, laying a solid academic base in science and technology.',
    },
  ];

  return (
    <section id="education" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-10">Education</h3>
        <div className="space-y-8 max-w-4xl">

        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-teal-600 rounded-full p-3 shadow-md">
              {edu.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
              <p className="text-teal-600 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
