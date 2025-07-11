import React from 'react'

const Democp = () => {
  return (
    <div className="w-full h-screen p-4 flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-[1600px] h-full flex gap-6">
    
    {/* Left Column */}
    <div className="flex flex-col justify-between gap-4 w-1/4">
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 text-gray-800 text-sm leading-relaxed">
        Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms.
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 text-gray-800 text-sm leading-relaxed">
        Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences.
      </div>
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-xl text-center font-medium text-gray-700">
        Box 3
      </div>
    </div>

    {/* Center Iframe */}
    <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-AeZRUHZSbAt34ApcfvPa7Cpq/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full"
        title="3D Robot"
      ></iframe>
    </div>

    {/* Right Column */}
    <div className="flex flex-col justify-between gap-4 w-1/4">
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 text-gray-800 text-sm leading-relaxed">
        Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms.
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 text-gray-800 text-sm leading-relaxed">
        Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences.
      </div>
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-xl text-center font-medium text-gray-700">
        Box 6
      </div>
    </div>
    
  </div>
</div>

  )
}

export default Democp