"use client";
import { Link } from "lucide-react";
import React from "react";
import ProductCard from "../(components)/ProductCard";
import WishlistCard from "../(components)/WishlistCard";
import { useSelector } from "react-redux";

const WishlistPage = () => {
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
  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  console.log(wishlistData);
  //const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col justify-start items-center min-h-52">
      <p className="uppercase tracking-widester mt-6 text-md md:text-lg underline">
        MY wishlist
      </p>
      {wishlistData?.length > 0 ? (
        <div className="flex flex-col justify-center items-start mt-6">
          <div className="flex flex-wrap gap-2 justify-center items-start">
            {wishlistData.map((data: any, index: number) => (
              <WishlistCard
                key={index}
                data={{
                  imageUrl: data.imageUrl[0],
                  productPrice: data.price,
                  productTitle: data.title,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xl font-euclid mt-24 uppercase text-center">
          Your wishlist is empty
          <br />
          <span className="text-sm text-center">
            (but it doesn’t have to be)
          </span>
        </p>
      )}
    </div>
  );
};

export default WishlistPage;
