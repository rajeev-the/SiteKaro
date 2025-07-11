import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingText from "./RotatingText";

gsap.registerPlugin(ScrollTrigger);

const GrowthSection = () => {
    const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const buttonsRef = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Set up animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(line1Ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(line2Ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "+=0.2"
    )
    .fromTo(line3Ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "+=0.2"
    )
    .fromTo(buttonsRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "+=0.1"
    )
    .fromTo(".video-mask",
      { scale: 0.8, opacity: 0, rotate: -15 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.8)" },
      "-=0.5"
    );
    
    // Continuous subtle animation for video
    gsap.to(".video-mask", {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
     
     
    <> 
   
<style>{`
        @keyframes scrollVertical {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        .scroll-vertical {
          animation: scrollVertical 20s linear infinite;
        }
      `}</style>
    
     <section 
     
      className="hero-container w-full min-h-screen flex items-center justify-between  px-4  "
     
    >
     <div className="">
  <div className="flex flex-col justify-center items-start min-h-screen">
    <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8 max-w-[900px]">
      <div ref={line1Ref} className="opacity-0 transform">
        Maximize Your
      </div>
      <div ref={line2Ref} className="opacity-0 transform">
        Brand Potential
      </div>
      <div
        ref={line3Ref}
        className="opacity-0 transform inline-flex items-center justify-start flex-wrap"
      >
        with
        <span className="relative mx-2 mt-2 sm:mt-0">
          <RotatingText
            texts={[
              'Intelligent Growth',
             
              'Creative Strategy!',
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#03A6A1]  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <div className="video-mask absolute top-5 -right-8 md:-top-[90px] md:-right-[80px] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl transform">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://d30vckqumv6wyn.cloudfront.net/wp-content/uploads/2025/04/04145651/digital-marketing-agency-hero-pill2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </span>
      </div>
    </h1>

    <div
      ref={buttonsRef}
      className="opacity-0 flex flex-col sm:flex-row justify-start items-start gap-6 mt-8"
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

<div className=" h-screen overflow-hidden bg-white/60 backdrop-blur-md rounded-xl mx-[50px] px-4 py-4 ">
  <div className=" w-[100px] scroll-vertical">
    <div className="flex flex-col gap-2 items-center text-xl font-medium text-black">
      {[
        "HITACHI", "Similarweb", "SKECHERS", "MyHeritage", "NETFLIX",
        "L'ORÉAL", "Unilever", "MyHeritage", "NETFLIX", "L'ORÉAL",
        "Unilever", "Unilever", "NETFLIX", "L'ORÉAL", "Unilever", "MyHeritage"
      ].map((brand, index) => (
        <span key={index}>{brand}</span>
      ))}

      {/* Duplicate list for infinite loop */}
      {[
        "HITACHI", "Similarweb", "SKECHERS", "MyHeritage", "NETFLIX",
        "L'ORÉAL", "Unilever", "MyHeritage", "NETFLIX", "L'ORÉAL",
        "Unilever", "Unilever", "NETFLIX", "L'ORÉAL", "Unilever", "MyHeritage"
      ].map((brand, index) => (
        <span key={`loop-${index}`}>{brand}</span>
      ))}
    </div>
  </div>
</div>




    </section>
    </>
  )
}

export default GrowthSection