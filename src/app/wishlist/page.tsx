"use client";
import { Link } from "lucide-react";
import React, { useEffect } from "react";
import ProductCard from "../(components)/ProductCard";
import WishlistCard from "../(components)/WishlistCard";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistData } from "../redux/wishlistDataSlice";
import { useRouter } from "next/navigation";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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
      <p className="uppercase tracking-widester mt-6 text-md md:text-xl text-gray-500">
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
        <div className="w-2/4 flex flex-col justify-center items-center">
          <p className="text-md md:text-lg text-gray-500 font-mono mt-24 uppercase text-center mb-20">
            Your wishlist is empty
            <br />
            <span className="text-xs text-center text-slate-500 lowercase mt-2">
              (but it doesn’t have to be)
            </span>
          </p>
          <button
            className="bg-black text-white md:h-10 md:w-3/4 w-full text-xs md:text-lg h-8 mb-20 uppercase font-semibold font-mono"
            onClick={() => router.push("/collections/men")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
