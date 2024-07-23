import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/full_logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => location.pathname === path ? 'text-black' : 'text-[#a4a4a4]';

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between rounded-b-none lg:rounded-b-xl">
      <Link to="/" className="lg:ml-6">
        <img src={logo} alt="Logo" className="h-10 lg:h-14" />
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 right-0 lg:top-auto lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:flex-row flex-col lg:items-center lg:space-y-0 space-y-4 lg:space-x-8 px-6 lg:px-0 py-4 lg:py-0 rounded-b-none lg:rounded-b-xl`}
      >
        <li><Link to="/" className={`${isActive('/')} hover:text-blue-600 font-medium text-lg transition duration-300`}>Home</Link></li>
        <li><Link to="/projects" className={`${isActive('/projects')} hover:text-blue-600 font-medium text-lg transition duration-300`}>Projects</Link></li>
        <li><Link to="/about" className={`${isActive('/about')} hover:text-blue-600 font-medium text-lg transition duration-300`}>About</Link></li>
        <li><Link to="/contact-us" className={`${isActive('/contact-us')} hover:text-blue-600 font-medium text-lg transition duration-300`}>Contact Us</Link></li>
        <li>
          <a
            href="https://gdsc.community.dev/la-trobe-university-melbourne-australia/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium text-lg transition duration-300 hover:bg-blue-600"
          >
            Join Us!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
