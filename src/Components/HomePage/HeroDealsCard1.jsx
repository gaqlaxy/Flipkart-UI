import React from "react";
import herodeals1 from "../../data/Homepage/herodealscard1.json";
console.log(herodeals1);

export default function HeroDealsCard1() {
  return (
    <>
      
      <div className=" border-white bg-white p-4">
        <div className="flex justify-between items-center">
          <h1>Home Decor & Furnishings</h1>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
            alt=""
            className="w-12 h-12"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {herodeals1.cardeals1.map((item) => (
            <div key={item.id} className="bg-white p-2">
              <img
                src={item.image}
                alt=""
                className="w-full h-48 object-contain"
              />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
