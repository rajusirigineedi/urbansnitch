"use client";
import React from "react";
import { AvatarCardInt } from "../(interfaces)/avatarCard";

const AvatarCard = ({ data }: { data: AvatarCardInt }) => {
  return (
    <div className="flex flex-col justify-center items-center font-euclid cursor-pointer gap-2">
      <img
        src={data?.imageUrl}
        alt=""
        className="rounded-full w-14 h-14 md:w-20 md:h-20"
      />
      <p className="text-xs">{data?.title}</p>
    </div>
  );
};

export default AvatarCard;
