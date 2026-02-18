import { useState } from "react";
import Counter from "./counter";
import HeroSection from "./heroSection";
import FlashSales from "./flashSales";
import Categories from "./categories";
import BestSellingProducts from "./bestSellingProducts";
import MusicBanner from "./musicBanner";
import ExploreProducts from "./exploreProducts";
import NewArrival from "./newArrival";
import Features from "./features";
import Footer from "./footer";
function App() {
  return (
    <div>
      <Counter />;
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <MusicBanner />
      <ExploreProducts />
      <NewArrival />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
