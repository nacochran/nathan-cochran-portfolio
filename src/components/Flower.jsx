import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import './Flower.css';

const Flower = ({
  containerWidth,
  containerHeight,
  leftPercent,
  topPercent,
  delay,
  scale = 1
}) => {
  const flowerRef = useRef(null);
  const rotation = Math.random() * 360;
  const floatDuration = 3 + Math.random() * 2;
  const floatDistance = 10 + Math.random() * 10;

  // Calculate pixel positions based on container size and percentages
  const leftPx = (containerWidth * leftPercent) / 100;
  const topPx = (containerHeight * topPercent) / 100;

  // Scale the flower size based on container width
  const containerScale = Math.min(containerWidth / 1000, 1); // Normalize scale for very large screens
  const finalScale = scale * containerScale;

  useEffect(() => {
    const element = flowerRef.current;
    if (!element) return;

    // Add float animation after popup completes
    const timeoutId = setTimeout(() => {
      element.classList.add('floating');
    }, (delay + 0.6) * 1000); // 0.6s is popup duration

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div
      ref={flowerRef}
      className="flower-petal"
      style={{
        left: `${leftPx}px`,
        top: `${topPx}px`,
        '--rotation': `${rotation}deg`,
        '--scale': finalScale + 0.5,
        '--delay': `${delay}s`,
        '--float-duration': `${floatDuration}s`,
        '--float-distance': `${floatDistance}px`
      }}
    >
      <img src="/flower_petal.png" alt="" />
    </div>
  );
};

Flower.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
  leftPercent: PropTypes.number.isRequired,
  topPercent: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  scale: PropTypes.number
};

export default Flower; 