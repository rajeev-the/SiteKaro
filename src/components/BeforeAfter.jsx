import React,{useState} from 'react'
import DecayCard from './DecayCard ';
import { MdNavigateNext } from "react-icons/md";

const BeforeAfter = () => {
      const [activeCategory, setActiveCategory] = useState('eCommerce');
    const categories = [
    { id: 'eCommerce', name: 'eCommerce' },
    { id: 'web', name: 'Web Solutions' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'erp', name: 'ERP/CRM' },
    { id: 'marketing', name: 'Digital Marketing' },
      { id: 'mobile', name: 'Mobile Apps' },
    { id: 'erp', name: 'ERP/CRM' },
    { id: 'marketing', name: 'Digital Marketing' },
  ];
  return (
    <div className='flex mt-10  w-full flex-col items-center  '>

          
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 ">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#FF4F0F] to-[#FF8140] text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className='flex w-[80%]  mt-10  justify-evenly  items-center '>
         <div>
            <DecayCard width={600} height={350} image="https://picsum.photos/300/400?grayscale">
  <h2>Before</h2>
</DecayCard>
         </div>
         <div><MdNavigateNext  size={50} color='#03A6A1' /></div>
         <div>
            <DecayCard width={600} height={350} image="https://picsum.photos/300/400?grayscale">
  <h2>After</h2>
</DecayCard>
         </div>
        </div>
    </div>
  )
}

export default BeforeAfter