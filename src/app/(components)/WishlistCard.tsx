import React from "react";
import { LandingPageProductCardInt } from "../(interfaces)/landingPageProductCard";

const WishlistCard = ({ data }: { data: LandingPageProductCardInt }) => {
  return (
    <div className="w-[340px] md:w-72 min-h-56 font-euclid p-4">
      <div className="flex flex-col gap-2">
        <img src={data?.imageUrl} alt="" />
        <p className="text-left text-sm md:text-sm text-gray-600 mt-4">
          {data?.productTitle}
        </p>
        <p className="text-sm price sm:text-xs md:text-md mt-2">
          ₹ {data?.productPrice}
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-white bg-opacity-70 min-h-10 w-5/6 text-black -mt-52">
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
