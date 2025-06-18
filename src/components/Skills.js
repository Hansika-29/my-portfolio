import React from 'react';

const skills = [
  'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git', 'REST APIs', 'Testing', 'ReactNative', 'AI', 'Prompt Engineering'
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-6">SKILLS</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:grid-cols-7 max-w-6xl">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white shadow-md rounded px-4 py-2 text-center font-medium text-gray-800 hover:bg-teal-100 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
