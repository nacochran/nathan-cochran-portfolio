// src/pages/Projects.jsx/components/ProjectPanel';
import ProjectPanel from '../components/ProjectPanel';

const projects = [
  {
    name: "RecipePal",
    description: "A full-stack project, RecipePal is one of the biggest web apps I've worked on so far. I used Node.js in conjunction with several other libraries to build a functional back end. Chief among these were Express.js, used to create a RESTful API, and Passport.js, used to facilitate user authentication and session management. My DBMS selection for this project was MySQL, where my partner and I used an entity-relationship diagram (ERD) as a visual model of our database. On the front end, we utilized React.js alongside various other extensions to create a slick UI/UX.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "React.js", "Git", "Tailwind CSS", "Passport.js"],
    github: "https://github.com/nacochran/recipe-project",
    image: "recipe_pal.png"
  },
  {
    name: "Heyer 3D Design",
    description: "My first e-commerce website, this project was built as a learning experience for a friend's startup. A major highlight was the extensive customization I made to the PHP theme files.",
    technologies: ["WordPress", "WooCommerce", "Siteground", "Enfold", "PHP", "CSS"],
    view: "https://heyer3ddesign.com/",
    image: "heyer_3d_design.png"
  },
  {
    name: "MACC Kit Manager",
    description: "This was a team project for the MACC Systems Project class of 2023. It is currently deployed and used to manage the check-in and check-out process of items loaned to students. Since the code is proprietary, it is not available for public demo. However, you can see a snippet from the test project prior to deployment. I led the front-end development and contributed to the back end as well. The application was built using Microsoft’s ASP.NET framework, with C# as the primary programming language.",
    technologies: ["ASP.NET", "Microsot SQL Server", "C#", "JavaScript", "Gitub"],
    image: "kit_manager.png"
  },
  {
    name: "Organize That Space",
    description: "A front-end website built using the WordPress content management system and the Enfold theme, created for a local business in the Columbia area. I also host this website (along with others) on SiteGround.",
    technologies: ["WordPress", "Enfold", "PHP", "CSS", "Siteground"],
    view: "https://organizethatspace.com/",
    image: "organize_that_space.png"
  },
  {
    name: "Othello AI",
    description: "A fully functional Othello AI built using the MinMax adversarial search algorithm, this program was worked on by a classmate and I in the Fall Semester of 2024. One of the coolest aspects of this project was our use of bitwise operations to optimize the search algorithm.",
    technologies: ["Python", "Github"],
    github: "https://github.com/nacochran/Othello/tree/main",
    image: "othello.png"
  },
  {
    name: "3D Speedrunner",
    description: "An absolute blast to code, this project involved building my own 3D engine in WebGL from the ground up. It includes several noteworthy features. For lighting, I used a combination of ambient, directional, and point lights. For shading, I created both textured and untextured game objects. The camera automatically tracks the player at a close distance, implemented via a custom Camera class. Finally, I applied a range of transformations: in addition to converting objects from world space to camera space and beyond, I implemented a clever transformation for the ramp platform—converting it from a straight platform extending into Z-space into a circular ramp that spirals around the tower along a parametric curve.",
    technologies: ["WebGL 2.0", "JavaScript"],
    github: "https://github.com/nacochran/WebGL-Platformer",
    view: "https://nacochran.github.io/WebGL-Platformer/",
    image: "tower_of_doom.png"
  },
  {
    name: "Paintball.io",
    description: "Paintball.io is a multiplayer, browser-based paintball FPS game that a friend and I developed for a school project. Although still a work in progress, we’ve effectively created a functional FPS game template. Rendering on the front end is handled with Three.js, while the back end was built using key technologies such as Node.js, Express.js, and PostgreSQL.\nOne of the highlights of this project is the use of WebSockets to enable real-time interaction between players. Another key takeaway was the decision to move the physics engine to the back end and synchronize all front-end instances with it at regular intervals—a process that required significant refactoring, since the physics engine was originally implemented on the front end. We also learned how to design 3D models in Blender and efficiently import them into our project.\nAlthough the game was originally deployed on Heroku for our semester presentation, it has been temporarily taken down as we work through major refactoring.",
    technologies: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Three.js", "Git", "Tailwind CSS", "WebSockets", "Heroku", "Blender"],
    github: "https://github.com/nacochran/paintball.io",
    image: "paintball_io.png"
  },
  {
    name: "Hoppy Beaver Extreme",
    description: "I made this game back in 2018 on Khan Academy, the online learning platform where I first became interested in programming. Built using a JavaScript library called Processing.js, it was my first completed 2D platformer—and one of my first games overall.",
    technologies: ["JavaScript", "Processing.js"],
    view: "https://www.khanacademy.org/computer-programming/hoppy-beaver-extreme-game/5910313785196544",
    image: "hoppy_beaver_extreme.png"
  },
  {
    name: "2D Tank DEMO",
    description: "A fun little tank game, this 2020 demo marked a significant milestone for me, as I began incorporating more advanced algorithms and data structures into my programming. In this project, I used a breadth-first search algorithm to program the enemy tank AIs to chase the player.",
    technologies: ["JavaScript", "Processing.js"],
    view: "https://www.khanacademy.org/computer-programming/tank-solo-demo/5811459508748288",
    image: "tank_demo.png"
  },
  {
    name: "Escape the Castle 2",
    description: "Escape the Castle is a 2D platformer inspired by the original Super Mario Bros, which I finished in 2020. This project has probably consumed more of my time than any other—spanning nearly two years of development. From integrating calculus into the physics engine, to optimizing animations and graphics, to exploring the intricacies of level design, this game includes many firsts for me. Despite being a major milestone, its flaws highlight just how much I’ve grown as a programmer over the past five years since developing it.",
    technologies: ["JavaScript", "Procesisng.js", "CSS", "HTML"],
    view: "https://www.khanacademy.org/computer-programming/helping/6652484887166976",
    image: "mario_remake.png"
  }
];

const Projects = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-4">Past Projects</h1>
      <p className="text-lg">
      </p>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectPanel key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
