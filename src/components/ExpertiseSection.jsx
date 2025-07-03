import React,{useState} from 'react'

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
    { id: 'fullstack', name: 'Full-Stack Solutions' },
    { id: 'ai', name: 'AI and ML' },
  ];

  // Ecommerce subservices data
  const ecommerceSubServices = [
    "Adobe Commerce Development",
    "Magento Development",
    "Shopify Development",
    "Adobe Experience Manager",
    "Odoo ERP Development",
    "BigCommerce Development",
    "WooCommerce Development",
    "CRM for Commerce",
    "Adobe Analytics",
    "Adobe Target",
    "Mobile Commerce",
    "Adobe Workfront",
    "Adobe Optimizer",
    "Adobe Commerce Cloud",
    "Hyvä Theme Development"
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Your Vision, Our Expertise
        </h1>
        <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
          <span>or look at our Success Stories</span>
          <button className="flex items-center gap-1 hover:underline">
            <span>🔍</span>
            <span>Case Studies</span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-10 text-center">
        <p className="text-gray-600 mb-2">Can't find the right fit?</p>
        <p className="text-gray-600 mb-4">Search your needs below.</p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search... E.g. Sacra product"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative">
        {/* Back button when in sub-services view */}
        {expandedService && (
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2 text-blue-600 font-medium mb-4 hover:underline"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expandedService === 'ecommerce' ? (
            // Ecommerce sub-services
            filteredSubServices.length > 0 ? (
              filteredSubServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg p-4 transition-all duration-200 cursor-pointer hover:border-blue-300 hover:shadow-sm"
                >
                  <div className="font-medium text-gray-700">{service}</div>
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
                  className={`bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg p-4 transition-all duration-200 cursor-pointer hover:border-blue-300 hover:shadow-sm ${
                    service.id === 'ecommerce' ? 'relative group' : ''
                  }`}
                >
                  <div className="font-medium text-gray-700 flex justify-between items-center">
                    {service.name}
                    {service.id === 'ecommerce' && (
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    )}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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