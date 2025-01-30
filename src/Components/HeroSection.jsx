import React, { useState } from "react";
import { slides } from "../data/heroimages.json";
console.log(slides);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <>
      <main className="mx-3 my-3">
        <div className="relative h-[300px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full h-[400px] flex-shrink-0">
                <img src={slide.url} className="w-full  object-cover" />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-[38%] left-0 transform -translate-y-1/2 bg-white/80 bg-opacity-50 p-2 h-20 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-[38%] right-0 transform -translate-y-1/2 bg-white/80 bg-opacity-50 p-2 h-20  hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* slide indicators  */}
        <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-red-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </main>
    </>
  );
}
