import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] flex flex-col justify-between border-b-2 border-r-2 border-red-500 md:w-1/2 xl:w-1/3 p-4 group even:bg-fuchsia-50"
          key={item.id}
          href={`/product/${item.id}`}
        >
          {/* image container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* text container */}
          <div className="flex items-center justify-between ">
            <h1 className="font-bold uppercase p-2 text-2xl">{item.title}</h1>
            <h2 className="font-bold group-hover:hidden text-xl">
              ${item.price}
            </h2>
            <button className="hidden group-hover:block  uppercase bg-red-500 rounded-md text-white p-2">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
