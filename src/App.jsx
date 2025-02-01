import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import TopOffers from "./Components/TopOffers";
import BestMobileDeals from "./Components/BestMobileDeals";
import Hero_OfferCards1 from "./Components/Hero_OfferCards1";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <TopOffers />
      <BestMobileDeals />
      <Hero_OfferCards1 />
    </>
  );
}
