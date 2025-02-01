import React from "react";
import herodeals1 from "../data/herodealscard1.json";
console.log(herodeals1);

export default function HeroDealsCard1() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        {herodeals1.cardeals1.map((dealItems) => (
          <div key={dealItems.id}>
            <div  className="flex flex-col items-center justify-center text-lg gap-1">
              <img src={dealItems.image} alt="" className="w-28 h-32" />
              <h3>{dealItems.title}</h3>
              <p className="font-bold text-gray-400">{dealItems.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
