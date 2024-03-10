"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always cripsy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver you order wherever you are in NP",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1)),
      2000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text container */}
      <div className="flex items-center justify-center flex-col gap-6 p-4  text-red-500 font-bold flex-1">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white px-8 py-4">order now</button>
      </div>
      {/* Image container */}
      <div className="w-full relative flex-1">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
