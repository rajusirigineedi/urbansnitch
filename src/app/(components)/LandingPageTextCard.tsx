import React from "react";
import { LandingPageTextCardInt } from "../(interfaces)/landingPageTextCard";
import { ChevronRight } from "lucide-react";

const LandingPageTextCard = ({ data }: { data: LandingPageTextCardInt }) => {
  return (
    <div className=" bg-white shadow-lg flex justify-between items-center font-euclid hover:shadow-2xl">
      <div className="w-80 p-4 h-20 md:h-40 flex justify-center items-center gap-2 border border-r-2">
        <div className="flex flex-col gap-2 md:p-6">
          <p className="font-semibold text-xs md:text-md uppercase">
            {data?.title}
          </p>
          <p className="text-xs md:text-[14px]  text-muted w-30 text-slate-500 text-left">
            {data?.description}
          </p>
        </div>
        {/* <ChevronRight className="bg-violet-600 rounded-full" /> */}
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/chevron-right--v2.png"
          alt="chevron-right--v2"
          className="bg-gray-400 rounded-full p-2 hover:bg-violet-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LandingPageTextCard;
