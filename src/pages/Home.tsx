import React from 'react';
import bannerImage from '../assets/home-page-banner.jpg';

const Home: React.FC = () => {
  return (
    <div>
      {/* Row 1 */}
      <div className="relative flex justify-end items-start min-h-screen bg-gray-100 pt-0 md:pt-5">
        <img 
          src={bannerImage} 
          alt="Home Banner" 
          className="w-full md:w-2/3 lg:w-3/5 md:rounded-l-xl"
        />
        <div className="absolute left-10 top-1/4 bg-gray-100 p-6 rounded-xl">
          <p className="text-4xl font-bold mb-4">
          <span className="text-gray-900">"<span className="text-red-500">Technology</span> is the best when it brings <br />
            people<span className="text-blue-500"> together</span>."</span>
          </p>
          <p className="text-2xl text-gray-500">
            Matt Mullenweg
          </p>
        </div>
      </div>
      
      {/* Row 2 */}
      <div className="bg-gray-300 py-16">
        {/* Content for Row 2 here */}
      </div>

      {/* Row 3 */}
      <div className="bg-gray-100 py-16">
        {/* Content for Row 3 here */}
      </div>
    </div>
  );
}

export default Home;
