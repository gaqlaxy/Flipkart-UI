import React, { useState } from "react";
import { recommend } from "../../data/Homepage/recommended.json";

export default function RecommendedItems() {
  return (
    <>
      <div className="mx-3 mt-5 bg-slate-600 ">
        <div className=" border-white bg-white p-4">
          <div className="flex justify-between items-center">
            <h1>Home Decor & Furnishings</h1>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
              alt=""
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-around gap-4">
            {recommend.map((recommended) => (
              <div key={recommended.id}>
                <img src={recommended.image} alt="" />
                <div className="flex flex-col items-center">
                  <h3>{recommended.title}</h3>
                  <p>{recommended.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
