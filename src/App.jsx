import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import TopOffers from "./Components/TopOffers";
import BestMobileDeals from "./Components/BestMobileDeals";
import Hero_OfferCards1 from "./Components/Hero_OfferCards1";
import HeroCards2 from "./Pages/HeroCards2";
import HeroDealsCard3 from "./Components/HeroDealsCard3";
import HeroCards3 from "./Pages/HeroCards3";
import HeroDealsCard6 from "./Components/HeroDealsCard6";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <TopOffers />
      <BestMobileDeals />
      <Hero_OfferCards1 />
      <HeroCards2 />
      <HeroDealsCard3 />
      <HeroCards3 />
      <HeroDealsCard6 />
    </>
  );
}
