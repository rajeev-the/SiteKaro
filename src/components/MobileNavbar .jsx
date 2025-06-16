// MobileNavbar.jsx
import React, { useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";

const MobileNavbar = ({ mobilemenu }) => {
  const menuRef = useRef();

  const navdata = [
    { name: "Home" },
    {
      name: "Services ▾",
      submenu: ["SEO", "Paid Ads", "Lead Gen", "Consulting"],
    },
    {
      name: "Our Work ▾",
      submenu: ["Case Studies", "Portfolio", "Client Results"],
    },
    { name: "About" },
    { name: "Contact Us" },
  ];

  const [submenuOpenKey, setSubmenuOpenKey] = React.useState(null);

  const toggleSubmenu = (key) => {
    setSubmenuOpenKey((prevKey) => (prevKey === key ? null : key));
  };

  // GSAP animation on open/close
  useEffect(() => {
    if (mobilemenu) {
      gsap.to(menuRef.current, {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        display: "flex",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.3,
        y: 20,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [mobilemenu]);

  return (
    <div
      ref={menuRef}
      className="sm:hidden flex-col items-center justify-center px-[30px] text-white z-50 gap-5 mt-[350px] opacity-0 translate-y-5 hidden"
    >
      <div className="w-full bg-red-500 rounded-2xl p-4 flex flex-col space-y-3 shadow-lg">
        {navdata.map((item, idx) => {
          const key = item.name.includes("Services")
            ? "Services"
            : item.name.includes("Work")
            ? "Work"
            : null;
          const isOpen = submenuOpenKey === key;

          return (
            <div key={idx} className="text-sm font-bold">
              {item.submenu ? (
                <>
                  <div
                    className="flex items-center justify-between px-3 py-2 bg-white/10 rounded-md hover:bg-white/20 transition cursor-pointer"
                    onClick={() => toggleSubmenu(key)}
                  >
                    {item.name.replace(" ▾", "")}
                    {isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {isOpen && (
                    <div className="pl-6 pt-1 space-y-1">
                      {item.submenu.map((subItem, subIdx) => (
                        <div
                          key={subIdx}
                          className="text-white text-sm px-3 py-1 rounded hover:bg-white/10 transition cursor-pointer"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="px-4 py-2 bg-white/10 rounded-md hover:bg-white/20 transition cursor-pointer">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
