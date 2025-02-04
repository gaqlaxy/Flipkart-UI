import React from "react";
import HeroDealsCard1 from "../Components/HomePage/HeroDealsCard1";
import HeroDealsCard2 from "../Components/HomePage/HeroDealsCard2";
import HeroAdCard2 from "../Components/HomePage/HeroAdCard2";

export default function HeroCards2() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        <HeroDealsCard1 />
        <HeroDealsCard2 />
        <HeroAdCard2 />
      </div>
    </>
  );
}
