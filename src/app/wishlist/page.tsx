"use client";
import { Link } from "lucide-react";
import React, { useEffect } from "react";
import ProductCard from "../(components)/ProductCard";
import WishlistCard from "../(components)/WishlistCard";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistData } from "../redux/wishlistDataSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistDataFromLocalStorage = localStorage.getItem("wishlistArray");
  console.log(JSON.parse(wishlistDataFromLocalStorage ?? ""));
  useEffect(() => {
    dispatch(setWishlistData(JSON.parse(wishlistDataFromLocalStorage ?? "")));
  }, []);
  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  console.log(wishlistData);
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
                  imageUrl: data?.imageUrl[0],
                  productPrice: data?.price,
                  productTitle: data?.title,
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
