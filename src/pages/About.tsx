// src/pages/About.tsx
import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/firebaseConfig';
import bannerImage from '../assets/about-page-banner.jpg';

interface Organizer {
  ImageLink: string;
  Name: string;
  Position: string;
}

const About: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [organizers, setOrganizers] = useState<Organizer[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch description
        const descriptionRef = ref(database, 'About/description');
        const descriptionSnapshot = await get(descriptionRef);
        if (descriptionSnapshot.exists()) {
          setDescription(descriptionSnapshot.val());
        } else {
          console.log('No description found.');
        }

        // Fetch organizers
        const organizersRef = ref(database, 'About/organizers');
        const organizersSnapshot = await get(organizersRef);
        if (organizersSnapshot.exists()) {
          const data = organizersSnapshot.val();
          const sortedOrganizers = Object.keys(data)
            .map(key => data[key] as Organizer)
            .sort((a: Organizer, b: Organizer) => parseInt(a.Position) - parseInt(b.Position));
          setOrganizers(sortedOrganizers);
        } else {
          console.log('No organizers found.');
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Image */}
        <div className="mb-12">
          <img 
            src={bannerImage}
            alt="Top Image" 
            className="w-full h-64 object-cover rounded-t-lg" 
          />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </section>

        {/* Organizers Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={organizer.ImageLink} alt={organizer.Name} className="w-full h-48 object-cover"/>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{organizer.Name}</h3>
                  <p className="text-gray-600">{organizer.Position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
