import React from 'react';
import bannerImage from '../assets/home-page-banner.jpg';

const Home: React.FC = () => {
  return (
    <div className="relative flex justify-end items-start min-h-screen bg-gray-100 pt-0 md:pt-5">
      <img 
        src={bannerImage} 
        alt="Home Banner" 
        className="w-full md:w-2/3 lg:w-3/5 md:rounded-l-xl"
      />
      <div className="absolute left-0 top-1/4 md:top-1/8 p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg mb-4 p-6 text-left">
          <p className="text-3xl md:text-4xl font-semibold mb-4">
            "<span className="text-red-500">Technology</span> is the best when it brings <span className="block mt-2">people <span className="text-blue-500">together</span>."</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600">Matt Mullenweg</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 text-left max-w-xs md:max-w-sm">
          <p className="text-4xl font-semibold">
            <span className="text-red-500">C</span>onnect.
            <span className="text-blue-500"> I</span>nnovate.
            <span className="block mt-2">
            <span className="text-yellow-500">B</span>uild.
            <span className="text-green-500"> G</span>row.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
