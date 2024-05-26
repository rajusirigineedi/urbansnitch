import React from "react";
import { LandingPageProductCardInt } from "../(interfaces)/landingPageProductCard";
const LandingPageProductCard = ({
  data,
}: {
  data: LandingPageProductCardInt;
}) => {
  return (
    <div className="w-72 md:w-56 min-h-56 font-euclid p-4">
      <div className="flex flex-col gap-2 ">
        <img src={data?.imageUrl} alt="" />
        <p className="text-left text-xs md:text-sm">{data?.productTitle}</p>
        <p className="text-violet-600 font-semibold text-xs md:text-sm">
          From &#x20b9; {data?.productPrice}
        </p>
      </div>
    </div>
  );
};

export default LandingPageProductCard;
