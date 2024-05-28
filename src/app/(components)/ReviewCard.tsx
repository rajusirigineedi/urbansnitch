import React from "react";
import { ReviewCardInt } from "../(interfaces)/reviewCardInt";

const ReviewCard = ({ data }: { data: ReviewCardInt }) => {
  return (
    <div className="rounded-3xl gap-4 flex main w-[330px] min-h-32 md:min-h-36 md:w-[330px] justify-center items-start p-4 font-euclid flex-col shadow-xl bg-white">
      <div className="flex justify-start items-center gap-4">
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="rounded-full md:w-12 md:h-12 w-11 h-11"
        />
        <div className="flex flex-col justify-center items-start">
          <p>{data?.title}</p>
          <p>{data?.subtitle}</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SWqyCWWKfGeqWb3_5tI6jWMFWbfIZlnjhg&s"
          alt="twitter icon"
          className="w-6 h-6 ml-20"
        />
      </div>
      <p>{data?.review}</p>
    </div>
  );
};

export default ReviewCard;
