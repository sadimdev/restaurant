import FeaturedItem from "@/components/FeaturedItem";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import React from "react";

const Home = () => {
  return (
    <main>
      <Slider />
      <FeaturedItem />
      <Offer />
    </main>
  );
};

export default Home;
