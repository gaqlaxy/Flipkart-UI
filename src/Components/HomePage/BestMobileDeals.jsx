import React from "react";
import { deals } from "../../Data/Homepage/mobileDeals.json";
console.log(deals);

export default function BestMobileDeals() {
  return (
    <>
      <div className="mx-3 mt-5 bg-white p-3">
        <h1 className="text-2xl font-semibold">Best of Mobiles </h1>
        <div className="flex justify-around">
          {deals.map((mobileDeals, index) => (
            <div key={index} className=" p-3 my-3 flex flex-col items-center gap-5">
              <img
                src={mobileDeals.image}
                alt=""
                className="w-auto h-52"
              />
              <h2 className="text-lg font-semibold">{mobileDeals.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
