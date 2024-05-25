import React from "react";
import { LandingPageColorCardInt } from "../(interfaces)/landingPageColorCard";

const LandingPageColorCard = ({ data }: { data: LandingPageColorCardInt }) => {
  return (
    <div
      className={`${data.bgColor} shadow-lg flex justify-between items-center font-euclid`}
    >
      <div className="w-80 p-6 h-80 flex flex-col justify-around items-center gap-2 border border-r-2 ">
        <p className="text-2xl text-gray-500">{data?.title}</p>
        <img src={data?.imageUrl} alt={data?.title} width={100} height={100} />
      </div>
    </div>
  );
};

export default LandingPageColorCard;
