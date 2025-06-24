import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0); // Scroll to top when modal opens
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start pt-10 overflow-y-auto"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
    >
      <div
        className="bg-white w-11/12 max-w-4xl rounded-lg p-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl font-bold text-gray-600 hover:text-red-600"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-700 mb-4">{project.title}</h2>

        {/* Demo Video */}
        {project.demo && (
          <video
            src={project.demo}
            controls
            className="w-full max-h-[400px] rounded-lg mb-6 shadow object-contain"
          />
        )}

        {/* Description */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.tech && (
          <div className="mb-6">
            <h4 className="font-semibold text-teal-700 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-teal-100 px-3 py-1 rounded-full text-sm text-teal-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Flow */}
        {project.flow && (
          <div className="mb-6">
            <h4 className="font-semibold text-teal-700 mb-2">Flow of Project:</h4>
            <p className="text-gray-700 whitespace-pre-line">{project.flow}</p>
          </div>
        )}

        {/* Detailed Description (Optional) */}
        {project.detailedDescription && (
          <div className="mt-8">
            <h4 className="font-semibold text-teal-700 mb-2">Detailed Overview:</h4>
            <p className="text-gray-800 whitespace-pre-line text-base leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetailModal;
