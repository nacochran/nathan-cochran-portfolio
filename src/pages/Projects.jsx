// src/pages/Projects.jsx/components/ProjectPanel';
import ProjectPanel from '../components/ProjectPanel';

const projects = [
  {
    name: "Portfolio Website",
    description: "Well here we are! This project was built to showcase my skills as a software developer. The highlight of this project was utilizing Tailwind CSS, which I had not used beforehand.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/nacochran/nathan-cochran-portfolio",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "MACC Kit Manager",
    description: "This was a team project for the MACC systems project class of 2023. It is currently deployed and is currently being used to manage the check-in and check-out process of items that are lended to the students. Unfortunately, though, the source code is currently not available due to its proprietary nature. (However, you can see a snippet here of the test project before it was deployed.) The project was led by Oren Kirchoff, and I played the lead-role on the front-end, although I contributed to the back-end a decent amount as well. It was built using Microsoft's ASP.NET framework, with C# as the primary programming language.",
    technologies: ["ASP.NET", "Microsot SQL Server", "C#", "JavaScript", "Gitub"],
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Organize That Space",
    description: "A front-end website built using the Wordpress content management system and the Enfold theme. Made for a local business in the Columbia area. I am also hosting this website (among others) on Siteground.",
    technologies: ["WordPress", "Enfold", "PHP", "CSS", "Siteground"],
    view: "https://organizethatspace.com/contact/",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Heyer 3D Design",
    description: "My first E-Commerce website, this project was built as a learning experience for a friend's startup business. Another highlight of this project was the major customization I did to the PHP theme files.",
    technologies: ["WordPress", "WooCommerce", "Siteground", "Enfold", "PHP", "CSS"],
    view: "https://heyer3ddesign.com/",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Othello AI",
    description: "A fully functional Othello AI built using the MinMax adversarial search algorithm. Worked on this project with one of my fellow classmates. One of the coolest things about this project is that we utilized bit operations to optimize the search algorithms.",
    technologies: ["Python", "Github"],
    github: "https://github.com/nacochran/Othello/tree/main",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "3D Speedrunner",
    description: "An absolute blast to code, I created my own 3D engine in WebGL from the ground up. There are several cool features worth emphasizing. First, for lighting I used a combination of ambient, directional, and point lights. For shading I created both textured and nontextured game objects. The camera automatically tracks the player at a close distance, which I implemented in its own Camera class. Finally, I applied a number of transformations: besides converting objects from world space to camera space (etc), I also applied a clever transformation to the ramp platform that converted it from a straight platform extending out into Z-space into a circular platform that followed a parametric curve that circles the tower while extending up.",
    technologies: ["WebGL 2.0", "JavaScript"],
    github: "https://github.com/nacochran/WebGL-Platformer",
    view: "https://nacochran.github.io/WebGL-Platformer/",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Hoppy Beaver Extreme",
    description: "I made this game all the way back in 2018, on Khan Academy, an online learning site which is where I initially got interested in programming. Built using a JavaScript library called p5.js, it was my first completed 2D platformer and one of my first games.",
    technologies: ["JavaScript", "p5.js"],
    view: "https://www.khanacademy.org/computer-programming/hoppy-beaver-extreme-game/5910313785196544",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "2D Tank DEMO",
    description: "A fun little tank game, I made this demo in 2020 which marked a significant milestone when I started incorporating more advanced algorithms and data structures into my programming. In this specific project, I used a breadth-first search algorithm to program the enemy tank AIs to chase the player.",
    technologies: ["JavaScript", "p5.js"],
    view: "https://www.khanacademy.org/computer-programming/tank-solo-demo/5811459508748288",
    image: "https://via.placeholder.com/300"
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
