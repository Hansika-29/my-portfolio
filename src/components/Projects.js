import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web app that does XYZ using React and Node.js.',
    link: 'https://github.com/Hansika-29/hello_world.git',
    image: '/project1.png',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce site with payment integration.',
    link: 'https://github.com/yourusername/project-two',
    image: '/project2.png',
  },
  {
    title: 'Project Three',
    description: 'Portfolio website with React and Tailwind CSS.',
    link: 'https://github.com/yourusername/portfolio',
    image: '/project3.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-20">
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
