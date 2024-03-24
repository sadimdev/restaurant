"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotalPrice(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>
      {/* options container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="rounded-md p-2 ring-1 ring-red-400"
            style={{
              background: selected === index ? " rgb(248 113 113) " : "white",
              color: selected === index ? " white" : "rgb(248 113 113) ",
            }}
            value={option.additionalPrice}
            onClick={() => {
              setTotalPrice(option.additionalPrice);
              setSelected(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity and add container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="flex justify-between w-full ring-1 p-3 ring-red-400">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
              }}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity((prev) => (prev < 9 ? prev + 1 : 9));
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* add cart */}
        <button className="uppercase bg-red-500 w-56 p-3 text-white rounded-md ring-1 ring-red-400">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
