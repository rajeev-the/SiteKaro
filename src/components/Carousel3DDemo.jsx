// src/components/Carousel3DDemo.jsx
import React, { useEffect, useState } from "react";
import {
  Globe,
  BookOpen,
  Palette,
  Rocket
} from "lucide-react";

const CarouselCard = ({ card, onClick }) => {
  return (
    <div
      className="relative w-[300px] h-[460px] bg-[#FF4F0F] text-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-400 cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm text-white opacity-80">
          {card.icon}
          <span>{card.category}</span>
        </div>
        <h3 className="text-2xl font-extrabold tracking-wide">
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed opacity-90">
          {card.preview}
        </p>
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2.5">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: `${card.growth}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1 text-white font-semibold">Growth: {card.growth}%</p>
        </div>
      </div>
    </div>
  );
};

const Carousel3DDemo = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const randomGrowthValues = Array.from({ length: 4 }, () => Math.floor(Math.random() * 101));
    let progress = Array(4).fill(0);

    const interval = setInterval(() => {
      let updated = [...progress];
      let completed = true;

      for (let i = 0; i < 4; i++) {
        if (updated[i] < randomGrowthValues[i]) {
          updated[i]++;
          completed = false;
        }
      }

      setCards([
        {
          id: "1",
          category: "DESTINATION: Paris, France",
          title: "The City of Lights",
          icon: <Globe />, 
          preview: "Experience the timeless romance and grandeur of Paris.",
          imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
          growth: updated[0],
        },
        {
          id: "2",
          category: "DESTINATION: Kyoto, Japan",
          title: "Tranquility and Tradition",
          icon: <BookOpen />, 
          preview: "Step into Japan’s serene blend of nature, temples, and timeless culture.",
          imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
          growth: updated[1],
        },
        {
          id: "3",
          category: "DESTINATION: Santorini, Greece",
          title: "Aegean Elegance",
          icon: <Palette />, 
          preview: "Where whitewashed beauty meets deep blue horizons.",
          imageUrl: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
          growth: updated[2],
        },
        {
          id: "4",
          category: "DESTINATION: Cape Town, South Africa",
          title: "Adventure Meets Coast",
          icon: <Rocket />, 
          preview: "A thrilling mix of mountain, ocean, and vibrant city life.",
          imageUrl: "https://images.pexels.com/photos/29049/pexels-photo.jpg",
          growth: updated[3],
        },
      ]);

      progress = updated;
      if (completed) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 space-y-16 ">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Remarkable Results</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover the most iconic travel locations with real-time growth indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card) => (
          <CarouselCard
            key={card.id}
            card={card}
            onClick={() => alert(card.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel3DDemo;
