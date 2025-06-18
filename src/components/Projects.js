import React from 'react';

const projects = [
  {
    title: 'My Scoop! App',
    description: 'A web app that works as a planner using React and Node.js.',
    link: 'https://github.com/Hansika-29/hello_world.git',
    image: '/project1.png',
  },
  {
    title: 'Sign Language Recognition',
    description: 'A website that captures sign language and provides text using AI and TenserFlow',
    link: 'https://github.com/mdecoder24/Sign-Language-Recognition.git',
    image: '/project2.png',
  },
  {
    title: 'Voyage Vue',
    description: 'Travel Itinerary Planner developed with React and Tailwind CSS.',
    link: 'https://github.com/Hansika-29/Voyage_vue.git',
    image: '/project3.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-6">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(({ title, description, link, image }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 text-teal-800">{title}</h4>
              <p className="text-gray-700">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
