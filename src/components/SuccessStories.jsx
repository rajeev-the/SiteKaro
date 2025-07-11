// src/components/SuccessStories.jsx
import React, { useState } from 'react';

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('eCommerce');
  
  // Categories for filtering
  const categories = [
    { id: 'eCommerce', name: 'eCommerce' },
    { id: 'web', name: 'Web Solutions' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'erp', name: 'ERP/CRM' },
    { id: 'marketing', name: 'Digital Marketing' },
      { id: 'mobile', name: 'Mobile Apps' },
    { id: 'erp', name: 'ERP/CRM' },
    { id: 'marketing', name: 'Digital Marketing' },
  ];
  
  // Success stories data
  const stories = [
    {
      id: 1,
      category: 'eCommerce',
      title: 'Delivering User-Centric Experiences with B2B and B2C Integration',
      description: 'Find out how a renowned US lighting firm leveraged Adobe Commerce to integrate their B2B and B2C capabilities...',
    },
    {
      id: 2,
      category: 'eCommerce',
      title: 'Driving 5x Conversions with Adobe Commerce Business Automation',
      description: 'Discover how business automation via Adobe Commerce deployment enabled the largest US residential cabinet manufacturer to achieve...',
    },
    {
      id: 3,
      category: 'mobile',
      title: 'Mobile Shopping Experience Transformation',
      description: 'How we helped a fashion retailer increase mobile conversions by 150% with a custom mobile app solution...',
    },
    {
      id: 4,
      category: 'erp',
      title: 'Streamlining Operations with Custom ERP Solution',
      description: 'Manufacturing company reduced operational costs by 30% after implementing our custom ERP solution...',
    },
      {
      id: 4,
      category: 'erp',
      title: 'Streamlining Operations with Custom ERP Solution',
      description: 'Manufacturing company reduced operational costs by 30% after implementing our custom ERP solution...',
    },
      {
      id: 4,
      category: 'erp',
      title: 'Streamlining Operations with Custom ERP Solution',
      description: 'Manufacturing company reduced operational costs by 30% after implementing our custom ERP solution...',
    },
  ];
  
  // Filter stories by active category
  const filteredStories = stories.filter(story => 
    activeCategory === 'all' || story.category === activeCategory
  );

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#FF4F0F] to-[#FF8140] text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="relative">
          {/* Decorative elements */}
      
          {/* Stories Grid */}
     <div className="flex w-full  h-[500px] flex-row  justify-center   items-center  space-x-[-10px] mt-8 lg:mt-0 relative z-10">
  <iframe
    width="320"
    height="300"
    src="https://www.youtube.com/embed/xhW9up0Gi2E?si=aa5NJglkNRU6Hu0K"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="rounded-xl shadow-xl mt-[25px] z-10"
  ></iframe>

  <iframe
  width="660"
  height="500"
  src="https://www.youtube.com/embed/xhW9up0Gi2E?autoplay=1&loop=1&mute=1&controls=0&playlist=xhW9up0Gi2E&rel=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className="rounded-xl shadow-2xl z-30"
/>


  <iframe
    width="320"
    height="300"
    src="https://www.youtube.com/embed/xhW9up0Gi2E?si=aa5NJglkNRU6Hu0K"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="rounded-xl shadow-xl mt-[25px] z-20"
  ></iframe>
</div>

          
          {/* Empty state */}
         
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;