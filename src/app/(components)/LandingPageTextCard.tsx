import React from "react";
import { LandingPageTextCardInt } from "../(interfaces)/landingPageTextCard";
import { ChevronRight } from "lucide-react";

const LandingPageTextCard = ({ data }: { data: LandingPageTextCardInt }) => {
  return (
    <div className=" bg-white shadow-lg flex justify-between items-center font-euclid">
      <div className="w-80 p-6 h-40 flex justify-center items-center gap-2 border border-r-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-md uppercase">{data?.title}</p>
          <p className="text-sm  text-muted w-30 text-gray-400">
            {data?.description}
          </p>
        </div>
        {/* <ChevronRight className="bg-violet-600 rounded-full" /> */}
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/chevron-right--v2.png"
          alt="chevron-right--v2"
          className="bg-gray-400 rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default LandingPageTextCard;
