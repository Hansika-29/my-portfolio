import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCarouselModal from './ProjectCarouselModal';

const projects = [
  {
    title: 'My Scoop! App',
    description: 'A web app planner using React and Node.js.',
    link: 'https://github.com/Hansika-29/hello_world.git',
    image: '/project1.png',
    demo: '/demo1.mp4',
    tech: ['React', 'Node.js', 'CSS'],
    flow: 'User adds tasks, budget, hobbies; calendar sync integrated.',
  },
  {
  title: 'Sign Language Recognition',
  description: 'Uses AI and TensorFlow to convert sign language gestures into real-time text.',
  link: 'https://github.com/mdecoder24/Sign-Language-Recognition.git',
  image: '/project2.png',
  demo: '/demo2.mp4',
  tech: ['TensorFlow', 'OpenCV', 'Flask', 'Python', 'HTML/CSS'],
  flow: `1. User enables camera access.
2. Live video is captured via OpenCV.
3. Hand gestures are detected and preprocessed.
4. TensorFlow model interprets the gesture.
5. Recognized text is displayed in real-time on the UI.`,
  detailedDescription: `✅ Sign Language Recognition – AI-Based Communication Aid

📌 Overview:
Sign Language Recognition is an AI-powered web application designed to bridge the communication gap between the hearing-impaired and others. It uses a live webcam feed to capture and interpret hand gestures, converting them into readable text in real time.

🛠️ Tech Stack:
- TensorFlow – For training and running the hand sign recognition model
- OpenCV – For live video capture and gesture detection
- Flask – Lightweight backend server for model integration and API endpoints
- Python – Core language used for AI, logic, and server-side code
- HTML/CSS – For frontend structure and styling

✨ Key Features:
🖐️ Live Gesture Recognition: The app uses the webcam to detect hand gestures in real time.
🧠 AI-Powered Predictions: A pre-trained deep learning model interprets the captured gesture into a specific alphabet or word.
📡 Real-time Feedback: Recognized signs are instantly translated and displayed as text on the interface.
💡 Lightweight & Fast: Built using Flask and TensorFlow Lite for a fast, responsive experience.
🌐 Browser-Based: Can be accessed through a browser without installing extra software.

📽️ Demo Video:
You can view the project demo here: /demo2.mp4

🧭 Flow of Project:
1. The user grants access to the webcam.
2. OpenCV captures the hand gesture frame-by-frame.
3. Each frame is preprocessed and passed to the trained model.
4. The model returns the most likely letter/word.
5. The frontend displays the recognized text to the user in real time.

🎯 Goals & Outcome:
This project aims to provide an accessible, low-cost assistive tool for deaf and mute individuals. By leveraging AI and computer vision, it makes communication more inclusive and supports real-time interaction in everyday scenarios.

🔗 GitHub/Live URL:
- GitHub: https://github.com/mdecoder24/Sign-Language-Recognition.git
- Live Demo: (Add link if hosted)
`
},

  {
  title: 'Voyage Vue',
  description: 'AI-powered itinerary planner with customizable preferences and a clean interface.',
  link: 'https://github.com/Hansika-29/Voyage_vue.git',
  image: '/project3.png',
  demo: '/demo3.mp4',
  tech: [
    'React.js',
    'Tailwind CSS',
    'OpenAI API',
    'Framer Motion',
    'Firebase (optional)'
  ],
  flow: `1. User lands on the homepage with featured trip carousels and CTAs.
2. User can log in or explore existing itineraries using filters.
3. Clicking "Customize Your Plan" opens a modal to guide the user through options.
4. OpenAI API is called based on selected filters.
5. A detailed itinerary is generated and displayed in a day-wise scrollable format.
6. Option to download itinerary as PDF or start again.`,
  detailedDescription: `✅ VoyageVue – AI-Powered Itinerary Planner

📌 Overview:

VoyageVue is a smart, responsive web application that helps users generate personalized travel itineraries based on their preferences. It combines an elegant UI with AI capabilities to deliver curated travel plans in seconds.

🛠️ Tech Stack:

- React.js – Component-based structure and SPA behavior
- Tailwind CSS – Utility-first design for a modern and responsive UI
- OpenAI API – AI-powered generation of day-by-day itineraries
- Framer Motion – Smooth animations and transitions
- Firebase (optional) – For authentication and data storage (if included)

Key Features:

🔍 Explore Itineraries: Filter existing plans based on country, visa type, number of days, and travel interests (adventure, solo, romantic, etc.)
🧠 AI-Based Itinerary Generation: Users can select options like country, cities, trip type, and duration. The app uses OpenAI to generate a full day-wise itinerary with activities, restaurants, and stays.
🧳 Customization Modal: A smooth sliding carousel lets users customize trip preferences step-by-step.
📋 Download as PDF: Users can save their generated plans offline.
🖼️ Interactive UI: Carousel for featured trips, floating modals for customization, and dynamic filters for easy exploration.
🛫 Multi-City Support: Itineraries can span across several cities with smooth navigation and travel suggestions.
🔐 Auth System (if included): Phone number or Google sign-in, with protected routes.

🎯 Goals & Outcome:
VoyageVue simplifies travel planning using AI. It bridges the gap between inspiration and action, giving users the ability to plan international trips tailored to their style in seconds. With its responsive UI and AI-backed logic, it’s ideal for spontaneous travelers and planners alike.

🔗 GitHub/Live URL:
- GitHub: https://github.com/Hansika-29/Voyage_vue.git
- Live Demo: https://voyage-e1ra2aey4-hansika-29s-projects.vercel.app
`
}

];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-6">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 text-teal-800">{proj.title}</h4>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectCarouselModal
          projects={projects}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export default Projects;
