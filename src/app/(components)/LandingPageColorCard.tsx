import React from "react";
import { LandingPageColorCardInt } from "../(interfaces)/landingPageColorCard";
import Link from "next/link";

const LandingPageColorCard = ({ data }: { data: LandingPageColorCardInt }) => {
  return (
    <div
      className={`${data.bgColor} shadow-lg flex justify-between items-center font-euclid hover:shadow-2xl`}
    >
      <div className="w-80 p-6 h-60 md:h-80 flex flex-col justify-around items-center gap-2 border border-r-2">
        <p className="text-xl md:text-xl text-gray-500">{data?.title}</p>
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="w-24 h-24 md:w-36 md:h-36"
        />
      </div>
    </div>
  );
};

export default LandingPageColorCard;
