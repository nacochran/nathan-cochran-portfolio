// src/components/ProjectPanel.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageLightbox from './ImageLightbox';
import { motion } from 'framer-motion';

const ProjectPanel = ({ project }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="p-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg space-y-6 border border-white/20 relative overflow-hidden group"
      >
        {/* Frost effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Project Image and Title */}
        <div className="flex items-center gap-4 relative">
          <div className="relative group/image">
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="w-[100px] h-[100px] rounded-full object-cover cursor-pointer shadow-lg border-2 border-white/50 transition-transform duration-300 hover:scale-110"
                onClick={() => setIsLightboxOpen(true)}
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-20 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
        </div>

        {/* Project Description */}
        <div>
          <p className="text-gray-600">{project.description}</p>
        </div>

        {/* Project Technologies */}
        <div>
          <h3 className="text-lg font-medium text-gray-700">Technologies Used:</h3>
          <ul className="flex flex-wrap gap-3 mt-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-white/50 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg text-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500/90 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              View Source Code
            </a>
          )}
          {project.view && (
            <a
              href={project.view}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500/90 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              View Product
            </a>
          )}
        </div>
      </motion.div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={project.image}
        imageAlt={project.name}
      />
    </>
  );
};

ProjectPanel.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    view: PropTypes.string
  }).isRequired
};

export default ProjectPanel;
