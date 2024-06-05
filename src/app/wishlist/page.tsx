import { Link } from "lucide-react";
import React from "react";
import ProductCard from "../(components)/ProductCard";
import WishlistCard from "../(components)/WishlistCard";

const page = () => {
  const landingPageProductData = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
  ];
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase tracking-widester mt-6 text-md md:text-lg underline">
        MY wishlist
      </p>
      <div className="flex flex-col justify-center items-start mt-6">
        <div className="flex flex-wrap gap-2 justify-center items-start">
          {landingPageProductData.map((data, index) => (
            <WishlistCard key={index} data={data} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-start">
          {landingPageProductData.map((data, index) => (
            <WishlistCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
