// src/components/ProjectPanel.jsx
import { motion } from 'framer-motion';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicePanel = ({ service }) => {
  // Convert service name to URL-friendly format
  const serviceSlug = service.name.toLowerCase().replace(/\s+/g, '_');

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.6
        }
      }}
      viewport={{ once: true, amount: 0.7 }}
      className="mt-10"
    >
      <div className="">
        <div className="relative pt-2 pb-8 px-[50px] space-y-6">
          {/* Parallelogram background */}
          <div
            className="absolute inset-0 bg-white shadow-lg"
            style={{
              transform: 'skew(-4deg)',
              zIndex: -1
            }}
          />

          {/* Content stays straight */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>

          {/* Request Service Button */}
          <div className="pt-4">
            <Link
              to={`/contact?service=${serviceSlug}`}
              className="inline-block bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

ServicePanel.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ServicePanel;
