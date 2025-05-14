// SkillButton.jsx
import { useState } from "react";
import PropTypes from 'prop-types';

const SkillButton = ({ img_src, hover_description, click_effect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract icon name from img_src to create CSS class
  const iconName = img_src.split('/').pop().replace('.svg', '');
  const iconClass = `w-10 h-10 transition-transform group-hover:scale-110 icon-${iconName} z-10`;

  return (
    <div className="relative inline-block">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-lg pointer-events-none z-20">
          {hover_description}
        </div>
      )}

      {/* Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={click_effect}
        className="group w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src={img_src}
          alt="Skill Icon"
          className={iconClass}
        />
      </button>
    </div>
  );
};

SkillButton.propTypes = {
  img_src: PropTypes.string.isRequired,
  hover_description: PropTypes.string.isRequired,
  click_effect: PropTypes.func.isRequired
};

export default SkillButton;
