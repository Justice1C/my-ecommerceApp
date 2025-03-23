import React from 'react';
import { Categories } from '../../assets/mockData';
import HeroImage from '../../assets/images/HeroImage.jpg';
import InfoSection from '../InfoSection';
import CategorySection from '../CategorySection';

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        {/* Sidebar for Categories */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-120 relative">
          <img className="w-full h-full" src={HeroImage} alt="Hero" />
          <div className="rounded-lg py-5 px-6 absolute top-10 left-2">
            <p className="text-white font-extrabold mb-4">Code with Chima</p>
            <h2 className="text-3xl text-white font-extrabold">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold text-white">MILLIONS+ PRODUCTS</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <InfoSection />
      <CategorySection />
    </div>
  );
};

export default Home;