import React from "react";

const OrderPage = () => {
  return (
    <div className="p-4 lg:p-20 xl:p-40">
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base py-6 px-1 bg-red-100">
            <td className="hidden md:block">12334343</td>
            <td className="py-6 px-1">28/03/2024</td>
            <td className="py-6 px-1">89.90</td>
            <td className="py-6 px-1 hidden md:block">
              Big Burger menu (2), Veggie pizza (2) , Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base py-6 px-1 odd:bg-gray-100">
            <td className="hidden md:block">12334343</td>
            <td className="py-6 px-1">28/03/2024</td>
            <td className="py-6 px-1">89.90</td>
            <td className="py-6 px-1 hidden md:block">
              Big Burger menu (2), Veggie pizza (2) , Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base py-6 px-1 odd:bg-gray-100">
            <td className="hidden md:block">12334343</td>
            <td className="py-6 px-1">28/03/2024</td>
            <td className="py-6 px-1">89.90</td>
            <td className="py-6 px-1 hidden md:block">
              Big Burger menu (2), Veggie pizza (2) , Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
