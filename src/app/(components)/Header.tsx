import { Heart, MapPin, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="lg:hidden bg-slate-200 sm:w-[40vh] h-[90vh] gap-5">
      <div className="flex flex-col gap-10 justify-start p-4">
        <p>MENS</p>
        <p>WOMENS</p>
        <p>JEANS</p>
        <p>PANTS</p>
        <p>SHIRTS</p>
        <p>INNERS</p>
      </div>
      <div className="bg-gray-600 h-52 flex flex-col items-start justify-around p-2">
        <div className="flex text-white items-start justify-center">
          <User />
          <p className="ml-4 text-sm">SIGN IN</p>
        </div>
        <div className="flex text-white items-start justify-center">
          <Heart />
          <p className="ml-4 text-sm">WISHLIST</p>
        </div>
        <div className="flex text-white items-start justify-center">
          <MapPin />
          <p className="ml-4 text-sm">FIND A STORE</p>
        </div>
      </div>
      <div className="sm:w-[40vh]">
        <img
          src={
            "https://www.nicobar.com/cdn/shop/files/ae61f3dd72af4d2aabd17ace31a072d8_3x_a90ff2a1-d5f4-4856-809f-9fc8d44df6ac_480x.png?v=1614322188"
          }
        />
      </div>
    </div>
  );
};

export default Header;
