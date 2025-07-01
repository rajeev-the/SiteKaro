import React, { useState } from 'react';

const SectionHome2 = () => {
  return (
    <div className="min-h-screen text-white font-inter">
      {/* What do you want to achieve? Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12 text-center rounded-lg">
          What do you want to achieve?
        </h2>
        <div className="w-full mx-auto space-y-[-10px]">
          <AchievementButton text="Motivate" color="bg-[#FF4F0F]" />
          <AchievementButton text="Grow" color="bg-[#FF5B1E]" />
          <AchievementButton text="Inspire" color="bg-[#FF682D]" />
          <AchievementButton text="Attract" color="bg-[#FF743C]" />
          <AchievementButton text="Change" color="bg-[#FF804B]" />
          <AchievementButton text="Maximize" color="bg-[#FF8C5A]" />
        </div>
      </section>

   
    </div>
  );
};

export default SectionHome2;

// Reusable Button with Dropdown
function AchievementButton({ text, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full ${color} text-white text-3xl md:text-4xl lg:text-5xl font-bold py-3 px-9 rounded-full flex items-center justify-between shadow-lg hover:shadow-xl`}
      >
        <span className="text-8xl">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 md:h-10 md:w-10 transform transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dropdown content */}
      {open && (
        <div className={` p-4  max-w-7xl ${color}  ml-[53px]    text-white text-lg shadow-md transition-all duration-300`}>
          This is the dropdown content for <strong>{text}</strong>.
            This is the dropdown content for <strong>{text}</strong>.
              This is the dropdown content for <strong>{text}</strong>.
                This is the dropdown content for <strong>{text}</strong>.
                  This is the dropdown content for <strong>{text}</strong>.
                    This is the dropdown content for <strong>{text}</strong>.
                      This is the dropdown content for <strong>{text}</strong>.
                        This is the dropdown content for <strong>{text}</strong>.
                          This is the dropdown content for <strong>{text}</strong>.
                            This is the dropdown content for <strong>{text}</strong>.  This is the dropdown content for <strong>{text}</strong>.

        </div>
      )}
    </div>
  );
}
