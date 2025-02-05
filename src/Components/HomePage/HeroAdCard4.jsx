import React from "react";
import { heroad4 } from "../../data/Homepage/heroad4.json";
console.log(heroad4);

export default function HeroAdCard4() {
  return (
    <>
      <div>
        {heroad4.map((adItems) => (
          <div key={adItems.id}>
            <img
              src={adItems.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
