import React from "react";
import heroad3 from "../data/heroad3.json";

export default function HeroAdCard2() {
  return (
    <>
      <div>
        {heroad3.heroad3.map((adItems) => (
          <div key={adItems.id} className="">
            <img src={adItems.image} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}
