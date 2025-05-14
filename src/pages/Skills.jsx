// src/pages/Skills.jsx
import SkillsPanel from '../components/SkillsPanel';

const Skills = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <p className="text-lg">
        I have acquired many different skillset through my experiences working on projects for school, clients, and personal endeavors. Below you can see some of the relevant proficiencies in technologies that I've obtained and the ones that I'm progressing towards as I ever seek to push past my limits.
      </p>

      <SkillsPanel />
    </div>
  );
};

export default Skills;
