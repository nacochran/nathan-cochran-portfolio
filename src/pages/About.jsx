// src/pages/About.jsx
import { useEffect, useRef, useState } from 'react';
import treeSrc from '../assets/tree.svg';
import Flower from '../components/Flower';
import './About.css';

// Define flower positions relative to the tree container (in percentages)
const flowerPositions = [
  { leftPercent: 9, topPercent: 33, scale: 0.8 },
  { leftPercent: 25, topPercent: 25, scale: 0.6 },
  { leftPercent: 53, topPercent: 10, scale: 0.7 },
  { leftPercent: 58, topPercent: 30, scale: 0.9 },
  { leftPercent: 75, topPercent: 25, scale: 0.7 },
  { leftPercent: 10, topPercent: 55, scale: 0.8 },
  { leftPercent: 25, topPercent: 50, scale: 0.6 },
  { leftPercent: 65, topPercent: 50, scale: 0.7 },
  { leftPercent: 80, topPercent: 45, scale: 0.8 },
  { leftPercent: 38, topPercent: 18, scale: 0.7 },
  { leftPercent: 35, topPercent: 40, scale: 0.9 },
  { leftPercent: 50, topPercent: 45, scale: 0.6 },
];

const About = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    // Initial size
    updateSize();

    // Create ResizeObserver to watch for container size changes
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="page">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Column */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ad imperdiet facilisis metus habitasse neque mus dis at. Tempor nostra habitant parturient fermentum tortor quam fames aliquet. Amet ad euismod sociosqu ad arcu lectus. Ullamcorper nisl accumsan a vehicula inceptos pretium lacus. Et consectetur phasellus mauris primis pellentesque fames maecenas.

            Justo placerat bibendum vel leo lacinia eleifend vulputate in. Augue auctor laoreet massa eleifend dui potenti euismod. In rutrum convallis etiam senectus dictum habitant arcu porttitor aptent. Id quisque ullamcorper molestie duis libero ad massa elit. Diam integer platea posuere ultrices ultricies finibus pulvinar pulvinar. Lacinia lobortis hac natoque; odio suscipit maximus lobortis.
          </p>
        </div>

        {/* Image Column */}
        <div ref={containerRef} className="tree-container order-1 md:order-2 relative">
          <img src={treeSrc} alt="Tree" className="max-w-full h-auto mt-4 mb-4" />
          {containerSize.width > 0 && flowerPositions.map((flower, index) => (
            <Flower
              key={index}
              containerWidth={containerSize.width}
              containerHeight={containerSize.height}
              leftPercent={flower.leftPercent}
              topPercent={flower.topPercent}
              scale={flower.scale}
              delay={Math.random() * 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
