import React from "react";
import { herodeals7 } from "../../data/Homepage/herodealscard7.json";

export default function HeroDealsCard7() {
  return (
    <>
      <div className=" border-white bg-white p-4">
        <div className="flex justify-between items-center">
          <h1>You may like...</h1>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
            alt=""
            className="w-12 h-12"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 my-3 mx-3">
          {herodeals7.map((dealItems) => (
            <div key={dealItems.id}>
              <div className="flex flex-col items-center justify-center text-lg gap-1">
                <img src={dealItems.image} alt="" className="w-52 " />
                <h3>{dealItems.name}</h3>
                <p className="font-bold text-gray-400">{dealItems.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
