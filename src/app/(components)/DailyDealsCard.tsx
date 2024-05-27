"use client";
import React from "react";
import { DailyDealsCardInt } from "../(interfaces)/dailyDetailCardInt";

const DailyDealsCard = ({ data }: { data: DailyDealsCardInt }) => {
  return (
    <div className="gap-4 flex main border p-2 border-gray-300 w-80 h-60 md:h-56 md:w-96 justify-start items-center font-mono">
      <div className="image-card">
        <img src={data?.imageUrl} alt={data?.title} className="w-48 h-48" />
      </div>
      <div className="details-card flex flex-col justify-center items-start gap-2">
        <p className="text-sm font-semibold ">{data?.title}</p>
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-sm line-through text-gray-400">
              ${data?.actualPrice}
            </p>
            <p className="text-xs md:text-sm">${data?.price}</p>
          </div>
          <button className="bg-violet-400 p-2 text-white h-8 w-14 flex justify-center items-center text-xs md:text-sm font-bold">
            -{data?.discountPercents} &#37;
          </button>
        </div>
        {/* count down timer*/}
        <div className="flex bg-slate-500/10 shadow-lg p-1">
          <div>
            <span className="countdown font-mono text-md">
              <span>15</span>
            </span>
            <span className="text-sm">days</span>
          </div>
          <div>
            <span className="countdown font-mono text-md">
              <span>10</span>
            </span>
            <span className="text-sm">hrs</span>
          </div>
          <div>
            <span className="countdown font-mono text-md">
              <span>24</span>
            </span>
            <span className="text-sm">min</span>
          </div>
          <div>
            <span className="countdown font-mono text-md">
              <span>37</span>
            </span>
            <span className="text-sm">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDealsCard;
