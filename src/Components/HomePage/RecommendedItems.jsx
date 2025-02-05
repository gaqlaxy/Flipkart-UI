// import React, { useState } from "react";
// import { recommend } from "../../data/Homepage/recommended.json";

// export default function RecommendedItems() {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4;

//   const totalPages = Math.ceil(recommend.length / itemsPerPage);

//   const handleNext = () => {
//     setCurrentIndex(prev => (prev + 1) % totalPages);
//   };
  
//   const handlePrev = () => {
//     setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
//   };

//   return (
//     <>
//       <div className="mx-3 mt-5 bg-slate-600 relative ">
//         <div className=" border-white bg-white p-4 overflow-hidden relative">
//           <div className="flex justify-between items-center">
//             <h1>Home Decor & Furnishings</h1>
//             <img
//               src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
//               alt=""
//               className="w-12 h-12"
//             />
//           </div>
//           <div className="flex transition-transform duration-300 style={{ transform }} items-center justify-around gap-4 relative">
//             {recommend.map((recommended) => (
//               <div key={recommended.id} className="min-w-[25%]">
//                 <img src={recommended.image} alt="" />
//                 <div className="flex flex-col items-center">
//                   <h3>{recommended.title}</h3>
//                   <p>{recommended.price}</p>
//                 </div>
//               </div>
              
//             ))}

// <button
            
//             className="absolute top-[38%] left-0 transform -translate-y-1/2 bg-white/80 bg-opacity-50 p-2 h-20 hover:bg-white"
//             onClick={handlePrev}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
           
//             className="absolute top-[38%] right-0 transform -translate-y-1/2 bg-white/80 bg-opacity-50 p-2 h-20  hover:bg-white"
//             onClick={handleNext}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { recommend } from "../../data/Homepage/recommended.json";

export default function RecommendedItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show at once

  // Calculate total pages  
  const totalPages = Math.ceil(recommend.length / itemsPerPage);

  // Handle next/previous navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Calculate translateX value for sliding
  const getTransformValue = () => {
    return `translateX(-${currentIndex * 100}%)`;

  };

  return (
    <div className="mx-3 mt-5 bg-white p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Deals on Groceries</h1>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
          alt="logo"
          className="w-12 h-12"
        />
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          disabled={currentIndex === 0}
        >
          ❮
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          disabled={currentIndex === totalPages - 1}
        >
          ❯
        </button>

        {/* Items Container */}
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: getTransformValue() }}
        >
          {recommend.map((recommended) => (
            <div 
              key={recommended.id}
              className="min-w-[25%] p-2" // 4 items per view (100% / 4 = 25%)
            >
              <div className="border rounded-lg p-4 hover:shadow-lg">
                <img 
                  src={recommended.image} 
                  alt={recommended.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="text-center">
                  <h3 className="font-medium text-sm mb-1">{recommended.title}</h3>
                  <p className="text-blue-600 font-semibold">{recommended.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}