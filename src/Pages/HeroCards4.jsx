import React from "react";
import HeroDealsCard7 from "../Components/HomePage/HeroDealsCard7";
import HeroAdCard4 from "../Components/HomePage/HeroAdCard4";

export default function HeroCards4() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-3 mx-3">
        <HeroDealsCard7 />
        <HeroAdCard4 />
      </div>
    </>
  );
}
