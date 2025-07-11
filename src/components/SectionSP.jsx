import React,{useRef} from 'react'
import OrbitingAvatars from './OrbitingAvatars'
import VariableProximity from './VariableProximity';

const SectionSP = () => {
  
  const containerRef = useRef(null);

  return (
    <div className='w-full flex items-center justify-between h-full'>

      <div className=" px-2 ">
       <div className="flex flex-col justify-center items-start min-h-screen">
         <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8 max-w-[900px]">
          
<div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={'Hover me! And then star React Bits on GitHub, or else...'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
</div>
           
         </h1>
     
         <div
        
           className=" flex flex-col sm:flex-row justify-start items-start gap-6 mt-5"
         >
           <button className="relative px-8 py-4 rounded-full text-white font-semibold overflow-hidden group transform transition-all duration-300 hover:scale-105">
             <div className="absolute inset-0 w-full h-full bg-[#FF4F0F] transition-all"></div>
             <div className="absolute inset-0.5 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
             <span className="relative z-10">Start Your Project</span>
           </button>
     
           <button className="relative px-8 py-4 font-semibold group">
             <span className="relative z-10">See Our Work</span>
             <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
             <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
           </button>
         </div>
       </div>
     </div>

        <div>
            <OrbitingAvatars/>
        </div>



    </div>
  )
}

export default SectionSP