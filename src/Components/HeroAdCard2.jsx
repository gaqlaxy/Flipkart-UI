import React from "react";
import heroad2 from "../data/heroad2.json";

export default function HeroAdCard2() {
  return (
    <>
      <div>
        {heroad2.heroad2.map((adItems) => (
          <div key={adItems.id} className="">
            <img src={adItems.image} alt="" className="w-full h-[400px]" />
          </div>
        ))}
      </div>
    </>
  );
}
