import React from 'react'


const Demo = () => {

     const boxes = [
    {
      id: 1,
      title: "Web Development",
      content: "Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms. Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences that help businesses grow online."
    },
    {
      id: 2,
      title: "Modern Technologies",
      content: "Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms. Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences that help businesses grow online."
    },
    {
      id: 3,
      title: "Digital Experiences",
      content: "Creating engaging digital experiences requires a deep understanding of user behavior and modern design principles. By focusing on intuitive interfaces and seamless interactions, developers can craft experiences that not only meet business objectives but also delight users and encourage engagement."
    },
    {
      id: 4,
      title: "Responsive Design",
      content: "Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms. Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences that help businesses grow online."
    },
    {
      id: 5,
      title: "Business Growth",
      content: "Web development is the process of building and maintaining websites and web applications. It involves everything from creating simple static pages to complex dynamic platforms. Using technologies like HTML, CSS, JavaScript, and modern frameworks, web development ensures fast, responsive, and user-friendly digital experiences that help businesses grow online."
    },
    {
      id: 6,
      title: "Future Innovations",
      content: "The future of web development lies in embracing emerging technologies like artificial intelligence, progressive web apps, and immersive experiences. Staying ahead requires continuous learning and adaptation to new tools and methodologies that push the boundaries of what's possible online."
    }
  ];
  return (

   <div className="w-full max-w-8xl h-[90vh]  backdrop-blur-sm rounded-2xl  p-6 flex ">
      {/* Left Column */}
      <div className="w-1/4 flex flex-col justify-between gap-6">
        {boxes.slice(0, 3).map(box => (
          <PremiumBox key={box.id} box={box} />
        ))}
      </div>
      
      {/* Center Iframe */}
      <div className="flex-1 rounded-xl overflow-hidden  relative">
        <div className="absolute top-0 left-[250px] h-1.5 text-[#FF4F0F]  text-3xl  font-bold  z-10">Vision SiteKaro </div>
        <iframe 
          src='https://my.spline.design/robotfollowcursorforlandingpage-AeZRUHZSbAt34ApcfvPa7Cpq/'
          className="w-full h-full rounded-xl"
          frameBorder="0"
          title="3D Robot Interaction"
        ></iframe>
      </div>
      
      {/* Right Column */}
      <div className="w-1/4 flex flex-col justify-between gap-6">
        {boxes.slice(3, 6).map(box => (
          <PremiumBox key={box.id} box={box} />
        ))}
      </div>
    </div>

  )
}

export default Demo





const PremiumBox = ({ box }) => {
  return (
    <div className="relative cursor-custom   rounded-xl shadow-md  overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF4F0F]"></div>
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-semibold text-sm shadow-sm">
        {box.id}
      </div>
      <div className="p-6 pt-8 h-full flex flex-col">
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">{box.title}</h3>
        <p className="text-gray-600 leading-relaxed flex-1 overflow-y-auto custom-scrollbar">
          {box.content}
        </p>
      </div>
    </div>
  );
};
