import { Link } from 'react-router-dom';

function Footer() {
  // Get the current year for the copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 px-10">
      <div className="container mx-auto px-4 max-w-1200px">
        {/* Footer Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Column 1: About the Website */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About the Website</h4>
            <p className="text-sm">
              Built using key technologies such as React.js, Tailwind CSS, and Vite. I utilized the Affinity suite as my main vector and image editing software for graphics on the website.
            </p>
          </div>

          {/* Column 2: Reach Out */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Reach Out</h4>
            <p className="text-sm">
              Interested in hiring me for a job? Send me an email or phone call!
              <br /><br />
              <a href="mailto:nacochranpb@gmail.com" className="text-blue-400 hover:underline">nacochranpb@gmail.com</a>
              <br />
              <a href="tel:+15738015326" className="text-blue-400 hover:underline">573-801-5326</a>
            </p>

          </div>

          {/* Column 3: Follow Me */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <ul>
              <li>
                <Link to="https://www.facebook.com/cochrandev" className="text-sm hover:text-blue-400" target="_blank" rel="noopener noreferrer">Facebook</Link>
              </li>
              <li>
                <Link to="https://github.com/nacochran" className="text-sm hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/nathan-cochran/" className="text-sm hover:text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Socket: Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {currentYear} Nathan Cochran. All rights reserved.
          </p>
        </div>
      </div >
    </footer >
  );
}

export default Footer;
