// src/components/ProjectPanel.jsx
import React from 'react';

const ProjectPanel = ({ project }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg space-y-6">
      {/* Project Image */}
      <div className="flex justify-center">
        <img src={project.image} alt={project.name} className="max-w-full h-auto rounded-lg" />
      </div>

      {/* Project Details */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>

      {/* Project Technologies */}
      <div>
        <h3 className="text-lg font-medium text-gray-700">Technologies Used:</h3>
        <ul className="flex flex-wrap gap-3 mt-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
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
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Source Code
          </a>
        )}
        {project.view && (
          <a
            href={project.view}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            View Product
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPanel;
