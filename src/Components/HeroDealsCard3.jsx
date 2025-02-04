import React from "react";
import { herodeals3 } from "../data/herodealscard3.json";
console.log(herodeals3);

export default function HeroDealsCard3() {
  return (
    <>
    
      <div className="grid grid-cols-3 gap-4 mx-3 ">
        {herodeals3.map((dealItems) => (
          <div key={dealItems.id} className={dealItems.id === 1 ? "col-span-3" : "col-span-1"}>
            <div className="flex flex-col items-center justify-center text-lg gap-1">
              <img src={dealItems.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
