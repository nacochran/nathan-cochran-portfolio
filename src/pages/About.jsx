// src/pages/About.jsx
import React from 'react';
import treeSrc from '../assets/tree.svg';

const About = () => {
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
        <div className="flex justify-center order-1 md:order-2">
          <img src={treeSrc} alt="Tree" className="max-w-full h-auto mt-4 mb-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
