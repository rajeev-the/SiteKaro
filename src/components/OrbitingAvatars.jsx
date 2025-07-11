// src/components/OrbitingAvatars.jsx
import React, { useEffect } from 'react';
import { FaReact } from "react-icons/fa";

const OrbitingAvatars = () => {
  // Generate random positions for avatars
  const generatePositions = (count, radius) => {
    const positions = [];
    const angleStep = (2 * Math.PI) / count;
    
    for (let i = 0; i < count; i++) {
      const angle = i * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      // Add some random variation to position
      const variation = radius * 0.1;
      const variedX = x + (Math.random() * variation * 2 - variation);
      const variedY = y + (Math.random() * variation * 2 - variation);
      
      positions.push({ x: variedX, y: variedY, angle: angle * (180 / Math.PI) });
    }
    
    return positions;
  };

  // Avatar data
  const avatars = [
    { name: <FaReact/>, color: "bg-gradient-to-r from-blue-400 to-purple-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-green-400 to-teal-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-pink-400 to-rose-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-indigo-400 to-blue-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-cyan-400 to-emerald-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-amber-400 to-yellow-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-violet-400 to-purple-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-lime-400 to-green-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-fuchsia-400 to-pink-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-red-400 to-orange-500" },
    { name:  <FaReact/>, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-violet-400 to-purple-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-lime-400 to-green-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-fuchsia-400 to-pink-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-red-400 to-orange-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
        { name: <FaReact/>, color: "bg-gradient-to-r from-lime-400 to-green-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-fuchsia-400 to-pink-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-red-400 to-orange-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-violet-400 to-purple-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-lime-400 to-green-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-fuchsia-400 to-pink-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-red-400 to-orange-500" },
    { name: <FaReact/>, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
  ];

  // Generate positions for each ring
  const ring1 = generatePositions(4, 100);
  const ring2 = generatePositions(6, 180);
  const ring3 = generatePositions(8, 260);

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px]  rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Container */}
      <div className="relative w-[90vw] max-w-[800px] aspect-square flex items-center justify-center">
        
        {/* Orbit rings */}
        <div className="absolute w-full h-full animate-[spin_40s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full border border-[#FF4F0F] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[360px] h-[360px] rounded-full border border-[#FF4F0F] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] rounded-full border border-[#FF4F0F] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Reverse spinning rings for visual effect */}
        <div className="absolute w-full h-full animate-[spinReverse_35s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] rounded-full border border-gray-300/20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[440px] h-[440px] rounded-full border border-gray-300/20 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Central circle */}
        <div className="relative z-20 w-48 h-48 flex flex-col items-center justify-center rounded-full bg-[#03A6A1] shadow-xl ">
          <div className="text-5xl font-bold text-transparent bg-black bg-clip-text">20k+</div>
          <div className="text-lg font-medium text-gray-700 mt-2">Specialists</div>
          
          {/* Inner glow */}
          
        </div>
        
        {/* Ring 1 Avatars */}
        <div className="absolute w-full h-full animate-[spin_30s_linear_infinite]">
          {ring1.map((pos, index) => (
            <div 
              key={`ring1-${index}`}
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${-pos.angle}deg)`,
              }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-float ${avatars[index]?.color}`}>
              {avatars[index].name}
              </div>
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-20"></div>
            </div>
          ))}
        </div>
        
        {/* Ring 2 Avatars */}
        <div className="absolute w-full h-full animate-[spinReverse_25s_linear_infinite]">
          {ring2.map((pos, index) => (
            <div 
              key={`ring2-${index}`}
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${-pos.angle}deg)`,
              }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-float2 ${avatars[index+4].color}`}>
                {avatars[index].name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Ring 3 Avatars */}
        <div className="absolute w-full h-full animate-[spin_35s_linear_infinite]">
          {ring3.map((pos, index) => (
            <div 
              key={`ring3-${index}`}
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${-pos.angle}deg)`,
              }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-float3 ${avatars[index+10].color}`}>
                {avatars[index].name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrbitingAvatars;