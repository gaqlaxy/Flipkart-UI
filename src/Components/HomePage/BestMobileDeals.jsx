import React from "react";
import { deals } from "../../Data/Homepage/mobileDeals.json";
console.log(deals);

export default function BestMobileDeals() {
  return (
    <>
      <div className="mx-3 mt-5 bg-slate-600 ">
        <h1>Best Mobile </h1>
        <div className="flex justify-around">
          {deals.map((mobileDeals, index) => (
            <div key={index} className=" p-3 my-3">
              <img
                src="{mobileDeals.image}"
                alt=""
                className="w-[220px] h-52"
              />
              <h2>{mobileDeals.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
