import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="page">
      <div className={`text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-300 leading-none select-none">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            It looks like the page you're looking for has wandered off into the digital wilderness. 
            Don't worry though - let's get you back to familiar territory!
          </p>
        </div>

        {/* Navigation options */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link 
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link 
            to="/projects"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            View Projects
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            Lost? Try checking the navigation menu above for all available pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
