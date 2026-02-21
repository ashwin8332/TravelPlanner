import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              to="/itinerary"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              My Itinerary
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;