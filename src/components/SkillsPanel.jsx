import { useState, useRef, useEffect } from "react";
import SkillButton from "./SkillButton";
import CompetencyBar from "./CompetencyBar";

// Skills data with standard icons
const skills = {
  "languages": [
    {
      title: "JavaScript",
      img_src: "/icons/javascript.svg",
      hover_description: "JavaScript Programming",
      full_description: "Modern JavaScript including ES6+ features, async programming, and DOM manipulation.",
      competency: 9
    },
    {
      title: "Python",
      img_src: "/icons/python.svg",
      hover_description: "Python Programming",
      full_description: "Python development including data processing, automation, and web backends.",
      competency: 8
    },
    {
      title: "C#",
      img_src: "/icons/csharp.svg",
      hover_description: "C# Development",
      full_description: "C# development with focus on .NET applications and Unity game development.",
      competency: 7
    },
    {
      title: "C++",
      img_src: "/icons/cpp.svg",
      hover_description: "C++ Programming",
      full_description: "C++ programming with emphasis on performance-critical applications.",
      competency: 6
    },
    {
      title: "PHP",
      img_src: "/icons/php.svg",
      hover_description: "PHP Development",
      full_description: "PHP development for web applications and WordPress themes/plugins.",
      competency: 5
    },
    {
      title: "HTML",
      img_src: "/icons/html5.svg",
      hover_description: "HTML5",
      full_description: "Modern HTML5 with semantic markup and accessibility best practices.",
      competency: 9
    },
    {
      title: "CSS",
      img_src: "/icons/css3.svg",
      hover_description: "CSS3",
      full_description: "Advanced CSS3 including animations, flexbox, grid, and responsive design.",
      competency: 9
    }
  ],
  "frameworks & developer tools": [
    {
      title: "WordPress",
      img_src: "/icons/wordpress.svg",
      hover_description: "WordPress Development",
      full_description: "WordPress theme and plugin development, customization, and management.",
      competency: 9
    },
    {
      title: "Enfold",
      img_src: "/icons/enfold.png",
      hover_description: "Enfold Theme",
      full_description: "Enfold theme customization and development for WordPress.",
      competency: 9
    },
    {
      title: "React.js",
      img_src: "/icons/react.svg",
      hover_description: "React Development",
      full_description: "Modern React development with hooks, context, and state management.",
      competency: 8
    },
    {
      title: "Next.js",
      img_src: "/icons/nextjs.svg",
      hover_description: "Next.js Framework",
      full_description: "Next.js for server-side rendering and static site generation.",
      competency: 2
    },
    {
      title: "Node.js",
      img_src: "/icons/nodejs.svg",
      hover_description: "Node.js Development",
      full_description: "Node.js backend development with Express and various frameworks.",
      competency: 5
    },
    {
      title: "Express.js",
      img_src: "/icons/express.svg",
      hover_description: "Express.js Framework",
      full_description: "Express.js for building RESTful APIs and web applications.",
      competency: 7
    },
    {
      title: "Three.js",
      img_src: "/icons/threejs.svg",
      hover_description: "Three.js 3D Graphics",
      full_description: "Three.js for 3D graphics and WebGL applications.",
      competency: 6
    },
    {
      title: "TailwindCSS",
      img_src: "/icons/tailwind.svg",
      hover_description: "Tailwind CSS",
      full_description: "Tailwind CSS for utility-first styling and rapid development.",
      competency: 7
    },
    {
      title: "Bootstrap",
      img_src: "/icons/bootstrap.svg",
      hover_description: "Bootstrap Framework",
      full_description: "Bootstrap for responsive and mobile-first web development.",
      competency: 7
    },
    {
      title: "Unity",
      img_src: "/icons/unity.svg",
      hover_description: "Unity Game Engine",
      full_description: "Unity game development with C# and cross-platform deployment.",
      competency: 3
    }
  ],
  "data & management tools": [
    {
      title: "Git",
      img_src: "/icons/git.svg",
      hover_description: "Git Version Control",
      full_description: "Git version control including branching strategies and collaboration workflows.",
      competency: 8
    },
    {
      title: "MongoDB",
      img_src: "/icons/mongodb.svg",
      hover_description: "MongoDB Database",
      full_description: "MongoDB for NoSQL database design and management.",
      competency: 6
    },
    {
      title: "MySQL",
      img_src: "/icons/mysql.svg",
      hover_description: "MySQL Database",
      full_description: "MySQL database design, optimization, and management.",
      competency: 8
    },
    {
      title: "PostgreSQL",
      img_src: "/icons/postgresql.svg",
      hover_description: "PostgreSQL Database",
      full_description: "PostgreSQL database administration and development.",
      competency: 7
    },
    {
      title: "Monday.com",
      img_src: "/icons/monday.svg",
      hover_description: "Monday.com",
      full_description: "Project management and team collaboration using Monday.com.",
      competency: 6
    },
    {
      title: "Obsidian",
      img_src: "/icons/obsidian.svg",
      hover_description: "Obsidian Notes",
      full_description: "Knowledge management and documentation using Obsidian.",
      competency: 6
    },
    {
      title: "Google Workspace",
      img_src: "/icons/google-workspace.svg",
      hover_description: "Google Workspace",
      full_description: "Expert in Google Docs, Sheets, and Slides for collaborative work and data analysis.",
      competency: 9
    },
    {
      title: "Microsoft Office",
      img_src: "/icons/office.svg",
      hover_description: "Microsoft Office",
      full_description: "Proficient in Microsoft Word, Excel, and PowerPoint for document creation and data analysis.",
      competency: 7
    }
  ],
  "design & creative tools": [
    {
      title: "Photoshop",
      img_src: "/icons/photoshop.svg",
      hover_description: "Adobe Photoshop",
      full_description: "Advanced photo editing and digital image manipulation.",
      competency: 8
    },
    {
      title: "Illustrator",
      img_src: "/icons/illustrator.svg",
      hover_description: "Adobe Illustrator",
      full_description: "Vector graphics and logo design.",
      competency: 8
    },
    {
      title: "InDesign",
      img_src: "/icons/indesign.svg",
      hover_description: "Adobe InDesign",
      full_description: "Page layout and publication design.",
      competency: 6
    },
    {
      title: "Premiere Pro",
      img_src: "/icons/premiere.svg",
      hover_description: "Adobe Premiere",
      full_description: "Video editing and post-production.",
      competency: 8
    },
    {
      title: "After Effects",
      img_src: "/icons/aftereffects.svg",
      hover_description: "Adobe After Effects",
      full_description: "Motion graphics and visual effects.",
      competency: 8
    },
    {
      title: "Affinity Photo",
      img_src: "/icons/affinity-photo.svg",
      hover_description: "Affinity Photo",
      full_description: "Professional photo editing and manipulation with Affinity Photo 2.",
      competency: 7
    },
    {
      title: "Affinity Designer",
      img_src: "/icons/affinity-designer.svg",
      hover_description: "Affinity Designer",
      full_description: "Vector graphics and illustration with Affinity Designer 2.",
      competency: 7
    },
    {
      title: "Affinity Publisher",
      img_src: "/icons/affinity-publisher.svg",
      hover_description: "Affinity Publisher",
      full_description: "Page layout and publishing with Affinity Publisher 2.",
      competency: 2
    },
    {
      title: "Figma",
      img_src: "/icons/figma.svg",
      hover_description: "Figma Design",
      full_description: "UI/UX design and prototyping with Figma.",
      competency: 3
    },
    {
      title: "Blender",
      img_src: "/icons/blender.svg",
      hover_description: "Blender 3D",
      full_description: "3D modeling, animation, and rendering with Blender.",
      competency: 2
    },
    {
      title: "DaVinci Resolve",
      img_src: "/icons/davinci.svg",
      hover_description: "DaVinci Resolve",
      full_description: "Professional video editing and color grading.",
      competency: 3
    }
  ]
};

const SkillsPanel = () => {
  const [currentSkill, setCurrentSkill] = useState(skills.languages[0]);
  const currentSkillRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isAutoScrollingRef = useRef(false);

  // Add scroll event listener on mount
  useEffect(() => {
    const handleUserScroll = () => {
      if (isAutoScrollingRef.current) {
        // Cancel the animation if it's running
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        isAutoScrollingRef.current = false;
      }
    };

    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
    };
  }, []);

  const handleSkillClick = (skill) => {
    setCurrentSkill(skill);
    // Wait for state update to complete before scrolling
    setTimeout(() => {
      if (currentSkillRef.current) {
        const yOffset = -20;
        const element = currentSkillRef.current;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + yOffset;

        // Custom easing function
        const start = window.pageYOffset;
        const distance = offsetPosition - start;
        const duration = 800; // ms
        let startTime = null;

        // Set auto-scrolling flag
        isAutoScrollingRef.current = true;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // Ease-in-out cubic function
          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, start + (distance * ease));

          if (timeElapsed < duration && isAutoScrollingRef.current) {
            animationFrameRef.current = requestAnimationFrame(animation);
          } else {
            // Reset flags when animation completes
            isAutoScrollingRef.current = false;
            animationFrameRef.current = null;
          }
        }

        // Start the animation
        animationFrameRef.current = requestAnimationFrame(animation);
      }
    }, 0);
  };

  return (
    <div className="py-6 space-y-6">
      {/* Current Skill Display */}
      {currentSkill && (
        <div
          ref={currentSkillRef}
          className="p-4 bg-gray-100 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
          style={{
            opacity: currentSkill ? 1 : 0,
            transform: currentSkill ? 'translateY(0)' : 'translateY(1rem)'
          }}
        >
          <div className="flex items-center space-x-4">
            <img src={currentSkill.img_src} alt={currentSkill.title} className="w-16 h-16" />
            <h2 className="text-2xl font-semibold">{currentSkill.title}</h2>
            <CompetencyBar competency={currentSkill.competency} />
          </div>
          <p className="mt-4 text-gray-700">{currentSkill.full_description}</p>
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {skillList.map((skill, index) => (
                <SkillButton
                  key={index}
                  img_src={skill.img_src}
                  hover_description={skill.hover_description}
                  click_effect={() => handleSkillClick(skill)}
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
