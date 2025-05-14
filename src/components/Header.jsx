import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Snowflake from './Snowflake';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Header = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [snowflakeCount, setSnowflakeCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'About';
      case '/skills':
        return 'Skills';
      case '/projects':
        return 'Projects';
      case '/services':
        return 'Services';
      case '/contact':
        return 'Contact';
      default:
        return 'About';
    }
  };

  const currentPage = getPageName(location.pathname);

  // Update screen width when window resizes
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBaseInterval = useCallback(() => {
    if (screenWidth > 1920) return 300;
    if (screenWidth > 1440) return 400;
    if (screenWidth > 1024) return 500;
    return 1000;
  }, [screenWidth]);

  useEffect(() => {
    // Calculate number of sections based on screen width
    const sections = Math.ceil(screenWidth / 200); // One section per 200px
    const sectionWidth = 100 / sections;
    const baseInterval = getBaseInterval();

    // Create snowflakes at a faster rate, but in batches
    const interval = setInterval(() => {
      // Create an array of new snowflakes with evenly distributed x positions
      const newFlakes = Array.from({ length: sections }, (_, index) => {
        const position = (index * sectionWidth) + (Math.random() * sectionWidth);
        // Distribute snowflakes vertically between -10vh and -30vh
        const startingY = -50 - Math.random() * 200; // -100px to -300px
        return {
          id: snowflakeCount + index,
          position,
          startingY
        };
      });

      // Shuffle the array to randomize the order
      const shuffledFlakes = shuffleArray([...newFlakes]);

      setSnowflakes(prevSnowflakes => [...prevSnowflakes, ...shuffledFlakes]);
      setSnowflakeCount(prev => prev + sections);
    }, baseInterval * 5);

    return () => clearInterval(interval);
  }, [snowflakeCount, screenWidth, getBaseInterval]);

  const removeSnowflake = (id) => {
    setSnowflakes(prevSnowflakes =>
      prevSnowflakes.filter(flake => flake.id !== id)
    );
  };

  return (
    <header className="header">
      <div className="background-image"></div>
      <div className="snowflake-container">
        {snowflakes.map(flake => (
          <Snowflake
            key={flake.id}
            id={flake.id}
            position={flake.position}
            startingY={flake.startingY}
            onComplete={removeSnowflake}
          />
        ))}
      </div>
      <div className="header-top">
        <img
          src="src/assets/profile_pic.png"
          alt="Profile"
          className="header-image"
        />
        <div className="header-content">
          <h1 className="text-3xl font-bold">Nathan Cochran</h1>
          <p>Web Developer | Designer | Software Engineer</p>
        </div>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-header" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="current-page">{currentPage}</span>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className="dropdown-menu">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
