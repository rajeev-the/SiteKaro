import React,{useState} from 'react'
import webdeio from "../assets/18407473_5995345.jpg"


const ExpertiseSection = () => {
 const [expandedService, setExpandedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Top-level services data
  const topLevelServices = [
    { id: 'ecommerce', name: 'Ecommerce Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'digital', name: 'Digital Transformation' },
    { id: 'microsoft', name: 'Microsoft Solutions' },
    { id: 'marketing', name: 'Digital Marketing' },
  
  ];

  // Ecommerce subservices data
  const ecommerceSubServices = [
    "We specialize in modern, responsive website development tailored to your brand. From design to deployment, we build fast, secure, and user-friendly websites that help your business grow online. Whether it's a portfolio, e-commerce, or corporate site, we deliver professional digital experiences that engage visitors and drive results. ",
    "Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development",
    "Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development Magento Development",
    
  ];

  // Filter services based on search query
  const filteredTopServices = topLevelServices.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSubServices = ecommerceSubServices.filter(service => 
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (serviceId) => {
    if (serviceId === 'ecommerce') {
      setExpandedService(serviceId);
    } else {
      // For other services, you could implement different behaviors
      setExpandedService(null);
      alert(`Navigating to ${serviceId} services`);
    }
  };

  const handleBackClick = () => {
    setExpandedService(null);
    setSearchQuery('');
  };

  return (
    <div className="max-w-8xl mx-auto p-6 ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Your Vision, Our Expertise
        </h1>
        <div className="flex items-center justify-center gap-2 text-[#03A6A1] font-medium">
          <span>or look at our Success Stories</span>
          <button className="flex items-center gap-1 hover:underline">
            <span>🔍</span>
            <span>Case Studies</span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      
      {/* Services Section */}
      <div className="relative">
        {/* Back button when in sub-services view */}
        {expandedService && (
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2  text-white bg-[#03A6A1] py-2 px-2  rounded-xl font-medium mb-4 "
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Services
          </button>
        )}

        {/* Service Title when expanded */}
        {expandedService === 'ecommerce' && (
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ecommerce Development</h2>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {expandedService === 'ecommerce' ? (
            // Ecommerce sub-services
            filteredSubServices.length > 0 ? (
              filteredSubServices.map((service, index) => (
              <div 
  key={index}
  className="bg-[#FF4F0F]  flex flex-col justify-between text-white rounded-lg p-4 transition-all duration-200 cursor-pointer hover:shadow-sm h-[400px"
>
  <div className="font-medium text-white">
    {service}
  </div>

  <button 
    className="mt-auto self-end flex items-center gap-2  text-black py-2 px-3 rounded-xl font-medium"
  >
    Get a Proposal
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
  </button>
</div>

              ))
            ) : (
              <div className="col-span-4 text-center py-8 text-gray-500">
                No sub-services match your search
              </div>
            )
          ) : (
            // Top-level services
            filteredTopServices.length > 0 ? (
              filteredTopServices.map((service) => (
         <div
  key={service.id}
  onClick={() => handleServiceClick(service.id)}
  className={` cursor-custom rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 ${
    service.id === 'ecommerce' ? 'relative group' : 'relative'
  }`}
>
  {/* ⭐ Star Icons */}
  <div className="absolute top-2 right-1 flex z-10">
    {[...Array(3)].map((_, i) => (
      <svg
        key={i}
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.194 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.27a1 1 0 00-.364 1.118l1.194 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.127 2.27c-.784.57-1.838-.197-1.539-1.118l1.193-3.674a1 1 0 00-.364-1.118L3.036 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.951-.69l1.194-3.674z" />
      </svg>
    ))}
  </div>

  {/* Video Section with Overlay Title */}
  <div className=" w-full h-[400px] rounded-t-2xl overflow-hidden relative">
 <video className='w-full' src="https://youtu.be/xhW9up0Gi2E?si=aa5NJglkNRU6Hu0K"></video>


    {/* 🔽 Title Overlay on Bottom of Video */}
    <div className="absolute bottom-0 left-0 w-full  px-4 py-3 flex items-center justify-between text-white">
      <h3 className="text-4xl font-semibold">{service.name}</h3>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</div>



  
  


              ))
            ) : (
              <div className="col-span-4 text-center py-8 text-gray-500">
                No services match your search
              </div>
            )
          )}
        </div>

        {/* Additional services when in expanded view */}
        {expandedService === 'ecommerce' && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Other Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {topLevelServices
                .filter(service => service.id !== 'ecommerce')
                .slice(0, 3) // Show only 3 other services
                .map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg p-4 transition-all duration-200 cursor-pointer hover:border-blue-300 hover:shadow-sm"
                  >
                    <div className="font-medium text-gray-700">{service.name}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertiseSection