import { useState } from "react";
import Counter from "./counter";
import HeroSection from "./heroSection";
import FlashSales from "./flashSales";
function App() {
  return (
    <div>
      <Counter />;
      <HeroSection />
      <FlashSales />
    </div>
  );
}

export default App;
