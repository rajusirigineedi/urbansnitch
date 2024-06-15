"use client";
import { Heart, LogIn, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
const DesktopHeader = () => {
  const wishlistItems = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  return (
    <div className="p-6 flex items-center justify-between bg-white h-16 w-full shadow-lg border border-b-gray-300 font-euclid sticky top-0 z-50">
      <Link href={"/"}>
        <p className="font-bold text-xl font-euclid">Hermanhood</p>
      </Link>
      <div className="flex gap-16">
        <p className="text-slate-600 text-sm cursor-pointer font-euclid">
          <Link href={"/collections/men"}>Men</Link>
        </p>
        <p className="text-slate-600 text-sm cursor-pointer">
          <Link href={"/collections/women"}>Women</Link>
        </p>
        <p className="text-slate-600 text-sm cursor-pointer">Special Prices</p>
        <p className="text-slate-600 text-sm cursor-pointer">New Arrivals</p>
        <p className="text-slate-600 text-sm cursor-pointer">
          <Link href={"/Our-Story"}>Our Story</Link>
        </p>
      </div>
      <div className="flex gap-8 ">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <Search size={18} />
          <p className="text-xs text-muted text-slate-600 m-1">Search</p>
        </div>
        {/* <div className="flex flex-col justify-center items-center cursor-pointer">
          <LogIn size={18} />
          <p className="text-xs text-muted text-slate-600 m-1">Sign in</p>
        </div> */}
        <Link href={"/wishlist"}>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <div className="flex">
              <Heart size={18} />
              {wishlistItems?.length > 0 && (
                <p className="mt-1 text-xs text-red-500 font-bold">
                  ({wishlistItems?.length})
                </p>
              )}
            </div>

            <p className="text-xs text-muted text-slate-600 m-1">Wishlist</p>
          </div>
        </Link>
        {/* <div className="flex flex-col justify-center items-center cursor-pointer">
          <HiOutlineShoppingBag />
          <p className="text-xs text-muted text-slate-600 m-1">My Bag</p>
        </div> */}
      </div>
    </div>
  );
};

export default DesktopHeader;
