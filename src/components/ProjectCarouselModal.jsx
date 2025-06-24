import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetailModal from './ProjectDetailModal';

const ProjectCarouselModal = ({ projects, activeIndex, onClose }) => {
  const [index, setIndex] = useState(activeIndex);
  const [showDetail, setShowDetail] = useState(false);

  const current = projects[index];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white w-11/12 max-w-5xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* LEFT: Info */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-teal-700">{current.title}</h2>
            <p className="text-gray-700">{current.description}</p>
            <button
              onClick={() => setShowDetail(true)}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              Explore More
            </button>
          </div>

          {/* RIGHT: Image */}
          <div className="md:w-1/2">
            <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setIndex((index - 1 + projects.length) % projects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((index + 1) % projects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
          >
            ›
          </button>
        </motion.div>

        {showDetail && (
          <ProjectDetailModal project={current} onClose={() => setShowDetail(false)} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectCarouselModal;
