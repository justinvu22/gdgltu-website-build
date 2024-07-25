import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillInstagram, AiFillDiscord } from 'react-icons/ai';
import logo from '../assets/gdsc-footer-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto shadow-upwards rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="logo items-center justify-center mb-4 md:mb-0 flex-1 hidden md:flex">
            <Link to="/">
              <div className="p-4 bg-white rounded-lg shadow-lg shadow-gray-800/50">
                <img src={logo} alt="Logo" className="h-20 md:h-24" />
              </div>
            </Link>
          </div>
          
          {/* Quick Links Section */}
          <div className="flex flex-col items-center mb-4 md:mb-0 flex-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="relative">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">-</span>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 ml-6">Home</Link>
              </li>
              <li className="relative">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">-</span>
                <Link to="/projects" className="hover:text-blue-400 transition-colors duration-300 ml-6">Projects</Link>
              </li>
              <li className="relative">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">-</span>
                <Link to="/about" className="hover:text-blue-400 transition-colors duration-300 ml-6">About</Link>
              </li>
              <li className="relative">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">-</span>
                <Link to="/contact-us" className="hover:text-blue-400 transition-colors duration-300 ml-6">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Icons Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex space-x-4 mb-2">
              <a href="https://www.linkedin.com/company/gdscltu/" className="hover:text-blue-400 transition-colors duration-300">
                <AiFillLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/gdsclatrobe/" className="hover:text-blue-400 transition-colors duration-300">
                <AiFillInstagram size={24} />
              </a>
              <a href="https://discord.gg/QFhjpndYZ5" className="hover:text-blue-400 transition-colors duration-300">
                <AiFillDiscord size={24} />
              </a>
            </div>
            <a href="/admin" className="text-center text-sm text-gray-400">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
