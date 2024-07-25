import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="path-to-your-image.png" alt="Project Image" className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-700 mb-4">Short description of the project goes here.</p>
          <a href="project-link" className="text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;