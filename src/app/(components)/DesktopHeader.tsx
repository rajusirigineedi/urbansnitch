"use client";
import { Heart, LogIn, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";

const DesktopHeader = () => {
  return (
    <div className="p-6 flex items-center justify-between bg-white h-16 w-full shadow-sm border border-b-gray-300 font-euclid">
      <p className="font-bold text-xl font-euclid">Nicobar</p>
      <div className="flex gap-16">
        <p className="text-slate-600 text-sm cursor-pointer font-euclid">Men</p>
        <p className="text-slate-600 text-sm cursor-pointer">Women</p>
        <p className="text-slate-600 text-sm cursor-pointer">Special Prices</p>
        <p className="text-slate-600 text-sm cursor-pointer">New Arrivals</p>
      </div>
      <div className="flex gap-8 ">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <Search size={18} />
          <p className="text-xs text-muted text-slate-600 m-1">Search</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <LogIn size={18} />
          <p className="text-xs text-muted text-slate-600 m-1">Sign in</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <Heart size={18} />
          <p className="text-xs text-muted text-slate-600 m-1">Wishlist</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <HiOutlineShoppingBag />
          <p className="text-xs text-muted text-slate-600 m-1">My Bag</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
