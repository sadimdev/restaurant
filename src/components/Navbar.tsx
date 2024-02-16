import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* logo */}
      <div className="text-xl font-semibold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>

      {/* right links */}
      <div className="hidden md:flex md:items-center justify-end gap-4 flex-1">
        <div className="flex md:absolute top-4 right-3 lg:static gap-2 items-center cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login </Link>
        ) : (
          <Link href="/order">Orders </Link>
        )}
        <CartIcon />
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
