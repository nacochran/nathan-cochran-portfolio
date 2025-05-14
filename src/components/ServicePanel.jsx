// src/components/ProjectPanel.jsx

import PropTypes from 'prop-types';

const ServicePanel = ({ service }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg space-y-6 mt-10">
      {/* Project Details */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{service.name}</h2>
        <p className="text-gray-600 mt-2">{service.description}</p>
      </div>
    </div>
  );
};

ServicePanel.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ServicePanel;
