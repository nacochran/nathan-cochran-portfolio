import React, { useState } from "react";
import SkillButton from "./SkillButton";

// Sample skills data
const skills = {
  languages: [
    {
      title: "JavaScript",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Dynamic web scripting",
      full_description: "JavaScript is a versatile programming language for web development.",
      competency: 8,
    },
    {
      title: "Python",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Versatile programming",
      full_description: "Python is a popular programming language for various domains.",
      competency: 9,
    },
  ],
  management: [
    {
      title: "GitHub",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Code collaboration",
      full_description: "GitHub is a platform for version control and collaboration.",
      competency: 7,
    },
    {
      title: "Monday.com",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Project management",
      full_description: "Monday.com is a tool for team collaboration and task management.",
      competency: 6,
    },
  ],
  design: [
    {
      title: "Adobe Illustrator",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Vector graphics",
      full_description: "Adobe Illustrator is a software for creating vector graphics.",
      competency: 8,
    },
    {
      title: "Photoshop",
      img_src: "https://via.placeholder.com/50",
      hover_description: "Image editing",
      full_description: "Adobe Photoshop is used for photo editing and graphic design.",
      competency: 7,
    },
  ],
};

const SkillsPanel = () => {

  // State to track the currently selected skill
  const [currentSkill, setCurrentSkill] = useState(skills.languages[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Current Skill Display */}
      {currentSkill && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img src={currentSkill.img_src} alt={currentSkill.title} className="w-16 h-16 rounded-full" />
            <h2 className="text-2xl font-semibold">{currentSkill.title}</h2>
            <p>Competency: {currentSkill.competency}</p>
          </div>
          <p className="mt-4 text-gray-700">{currentSkill.full_description}</p>
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {skills[category].map((skill, index) => (
                <SkillButton
                  key={index}
                  img_src={skill.img_src}
                  hover_description={skill.hover_description}
                  click_effect={() => setCurrentSkill(skill)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;
