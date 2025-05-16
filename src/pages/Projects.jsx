// src/pages/Projects.jsx/components/ProjectPanel';
import ProjectPanel from '../components/ProjectPanel';

const projects = [
  {
    name: "RecipePal",
    description: "A full-stack project, RecipePal is one of the biggest web apps I've worked on so far. I used Node.js in conjunction with several other libraries in order to build a functional back-end. Not the least of these was Express.js, used to create a RESTful API, and Passport.js, used to facilitate user authentication and session management. My DBMS selection for this project was MySQL, where my partner and I used a entity relationship diagram (ERD) as a visual model of our database. On the front-end, we utilized React.js alongside various other extensions, creating a slick UI/UX.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "React.js", "Git", "Tailwind CSS", "Passport.js"],
    github: "https://github.com/nacochran/recipe-project",
    image: "recipe_pal.png"
  },
  {
    name: "Heyer 3D Design",
    description: "My first E-Commerce website, this project was built as a learning experience for a friend's startup business. Another highlight of this project was the major customization I did to the PHP theme files.",
    technologies: ["WordPress", "WooCommerce", "Siteground", "Enfold", "PHP", "CSS"],
    view: "https://heyer3ddesign.com/",
    image: "heyer_3d_design.png"
  },
  {
    name: "MACC Kit Manager",
    description: "This was a team project for the MACC systems project class of 2023. It is currently deployed and is currently being used to manage the check-in and check-out process of items that are lended to the students. Since the code is proprietary in nature it is not currently available for demo. However, you can see a snippet here of the test project before it was deployed. I led the front-end development, as well as contributing to the back-end a bit as well. It was built using Microsoft's ASP.NET framework, with C# as the primary programming language.",
    technologies: ["ASP.NET", "Microsot SQL Server", "C#", "JavaScript", "Gitub"],
    image: "kit_manager.png"
  },
  {
    name: "Organize That Space",
    description: "A front-end website built using the Wordpress content management system and the Enfold theme. Made for a local business in the Columbia area. I am also hosting this website (among others) on Siteground.",
    technologies: ["WordPress", "Enfold", "PHP", "CSS", "Siteground"],
    view: "https://organizethatspace.com/",
    image: "organize_that_space.png"
  },
  {
    name: "Othello AI",
    description: "A fully functional Othello AI built using the MinMax adversarial search algorithm. Worked on this project with one of my fellow classmates. One of the coolest things about this project is that we utilized bit operations to optimize the search algorithms.",
    technologies: ["Python", "Github"],
    github: "https://github.com/nacochran/Othello/tree/main",
    image: "othello.png"
  },
  {
    name: "3D Speedrunner",
    description: "An absolute blast to code, I created my own 3D engine in WebGL from the ground up. There are several cool features worth emphasizing. First, for lighting I used a combination of ambient, directional, and point lights. For shading I created both textured and nontextured game objects. The camera automatically tracks the player at a close distance, which I implemented in its own Camera class. Finally, I applied a number of transformations: besides converting objects from world space to camera space (etc), I also applied a clever transformation to the ramp platform that converted it from a straight platform extending out into Z-space into a circular platform that followed a parametric curve that circles the tower while extending up.",
    technologies: ["WebGL 2.0", "JavaScript"],
    github: "https://github.com/nacochran/WebGL-Platformer",
    view: "https://nacochran.github.io/WebGL-Platformer/",
    image: "tower_of_doom.png"
  },
  {
    name: "Paintball.io",
    description: "Paintball.io is a multiplayer paintball FPS browser-based game that a buddy and I made for one of our school projects. Although still a WIP, we have effectively created a template for a FPS game, with the rendering on the front-end done using Three.js, and the back-end created using key technologies such as Node.js, Express.js, and PostgreSQL. One of the highlights of this projects is the use of WebSockets to create real-time interaction with other players. Another key takeway was to build the physics engine on the back-end, and synchronize each of the instances of the front-end with it at regular intervals, which took some considerably refactoring since we originally built the physics engine on the front-end. We also learned how to design 3D models in Blender and import them efficiently into our project. Although this project was originally deployed on Heroku for our semester presentation, we have temporarily taken it down as we do some heavy refactoring.",
    technologies: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Three.js", "Git", "Tailwind CSS", "WebSockets", "Heroku", "Blender"],
    github: "https://github.com/nacochran/paintball.io",
    image: "paintball_io.png"
  },
  {
    name: "Hoppy Beaver Extreme",
    description: "I made this game all the way back in 2018, on Khan Academy, an online learning site which is where I initially got interested in programming. Built using a JavaScript library called Processing.js, it was my first completed 2D platformer and one of my first games.",
    technologies: ["JavaScript", "Processing.js"],
    view: "https://www.khanacademy.org/computer-programming/hoppy-beaver-extreme-game/5910313785196544",
    image: "hoppy_beaver_extreme.png"
  },
  {
    name: "2D Tank DEMO",
    description: "A fun little tank game, I made this demo in 2020 which marked a significant milestone when I started incorporating more advanced algorithms and data structures into my programming. In this specific project, I used a breadth-first search algorithm to program the enemy tank AIs to chase the player.",
    technologies: ["JavaScript", "Processing.js"],
    view: "https://www.khanacademy.org/computer-programming/tank-solo-demo/5811459508748288",
    image: "tank_demo.png"
  },
  {
    name: "Escape the Castle 2",
    description: "Escape the Castle is a 2D platformer game inspired by the original Super Marios Bros that I created in 2020. This project has probably consumed more of my hours than any other programming project up to date, where I've spent nearly two years developing it. From integrating calculus in my physics engine, to optimizing animation and graphics, to the intricacies of level design, this project has so many firsts for me in it. But, even though it was such a huge landmark for me, it still shows many signs of amateur development, both in terms of the menu design and in the underlying physics engine.",
    technologies: ["JavaScript", "Procesisng.js", "CSS", "HTML"],
    view: "https://www.khanacademy.org/computer-programming/escape-the-castle-2-a-mario-game/6096264874246144",
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
