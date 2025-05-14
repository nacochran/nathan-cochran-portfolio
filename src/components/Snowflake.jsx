import React from 'react';
import PropTypes from 'prop-types';

class Snowflake extends React.Component {
  constructor(props) {
    super(props);
    // Generate random rotation duration between 4 and 8 seconds
    const rotationDuration = 8 + Math.random() * 4;
    // Randomly choose rotation direction
    const rotationDirection = Math.random() < 0.5 ? 'clockwise' : 'counterclockwise';

    this.state = {
      left: `${props.position}%`,
      top: `${props.startingY}px`,
      opacity: 0.2,
      rotationAnimation: `rotate-${rotationDirection} ${rotationDuration}s linear infinite`,
      drift: -10 + Math.random() * 20 // Small random drift between -10px and +10px
    };
  }

  componentDidMount() {
    // Start the falling animation after a short delay
    requestAnimationFrame(() => {
      this.setState({ top: '320px' }); // Match the snowfall animation end point
    });

    const animationDuration = 16000;
    const fadeOutTime = animationDuration * 0.95;

    this.fadeTimeout = setTimeout(() => {
      this.setState({ opacity: 0 });
    }, fadeOutTime);

    this.removeTimeout = setTimeout(() => {
      this.props.onComplete(this.props.id);
    }, animationDuration);
  }

  componentWillUnmount() {
    clearTimeout(this.fadeTimeout);
    clearTimeout(this.removeTimeout);
  }

  render() {
    const { left, top, opacity, rotationAnimation, drift } = this.state;

    return (
      <div
        className="snowflake"
        style={{
          left: `calc(${left} + ${drift}px)`,
          top,
          opacity,
          transform: 'translate(-50%, -50%)',
          animation: rotationAnimation,
          transition: 'top 16s linear, opacity 0.4s ease-out'
        }}
      />
    );
  }
}

Snowflake.propTypes = {
  id: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  startingY: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Snowflake; 