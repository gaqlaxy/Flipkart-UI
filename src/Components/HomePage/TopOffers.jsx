import { useState } from "react";
import productsData from "../../data/Homepage/topoffers.json";

export default function TopOffers() {
  const [products, setProducts] = useState(productsData.products);

  // Add to cart logic

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-3">
        <div className="col-span-2 bg-fuchsia-500">
          <h1>Top Offers</h1>
        </div>
        <div className="col-span-1 bg-yellow-400">
          <h1>Adv Banner</h1>
        </div>
      </div>
    </>
  );
}
