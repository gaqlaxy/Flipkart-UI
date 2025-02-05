import React from "react";
import Header from "./Components/HomePage/Header";
import Navbar from "./Components/HomePage/Navbar";
import HeroSection from "./Components/HomePage/HeroSection";
import TopOffers from "./Components/HomePage/TopOffers";
import BestMobileDeals from "./Components/HomePage/BestMobileDeals";
import Hero_OfferCards1 from "./Components/HomePage/Hero_OfferCards1";
import HeroCards2 from "./Pages/HeroCards2";
import HeroDealsCard3 from "./Components/HomePage/HeroDealsCard3";
import HeroCards3 from "./Pages/HeroCards3";
import HeroDealsCard6 from "./Components/HomePage/HeroDealsCard6";
import HeroCards4 from "./Pages/HeroCards4";
import RecommendedItems from "./Components/HomePage/RecommendedItems";
import BrandDirectories from "./Components/HomePage/BrandDirectories";

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
      <HeroCards4 />
      <RecommendedItems />
      <BrandDirectories />
    </>
  );
}
