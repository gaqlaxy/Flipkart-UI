import React from "react";
import { heroad4 } from "../../data/Homepage/heroad4.json";
console.log(heroad4);

export default function HeroAdCard4() {
  return (
    <>
 
        {heroad4.map((adItems) => (
          <div key={adItems.id} className="col-span-2 h-full">
            <img
              src={adItems.image}
              alt=""
              className="h-full"
              
            />
          </div>
        ))}
    
    </>
  );
}
