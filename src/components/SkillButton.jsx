// SkillButton.jsx
import React, { useState } from "react";

const SkillButton = ({ img_src, hover_description, click_effect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-lg">
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
          className="w-10 h-10 transition-transform group-hover:scale-110"
        />
      </button>
    </div>
  );
};

export default SkillButton;
