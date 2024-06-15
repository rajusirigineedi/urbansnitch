import React, { useEffect } from "react";
import { LandingPageProductCardInt } from "../(interfaces)/landingPageProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setWishlistData,
  setWishlistDataPrices,
} from "../redux/wishlistDataSlice";
import { Zoom, toast } from "react-toastify";

const WishlistCard = ({ data }: { data: LandingPageProductCardInt }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  let wishlistDataPrices = useSelector(
    (store: any) => store.wishlist.wishlistDataPrices
  );
  useEffect(() => {
    localStorage.setItem("wishlistArray", JSON.stringify(wishlistData));
    localStorage.setItem(
      "wishlistDataPrices",
      JSON.stringify(wishlistDataPrices)
    );
  }, [wishlistData, wishlistDataPrices]);
  const removeItemFromWishlist = (data: any) => {
    const filteredWishlistData = wishlistData.filter(
      (item: any) => item?.price != data?.productPrice
    );
    dispatch(setWishlistData(filteredWishlistData));
    localStorage.setItem("wishlistArray", JSON.stringify(filteredWishlistData));

    console.table(wishlistDataPrices);
    const filteredWishlistPrices = wishlistDataPrices.filter(
      (item: string) => item !== data?.productPrice
    );
    console.table(filteredWishlistPrices);
    dispatch(setWishlistDataPrices(filteredWishlistPrices));
    localStorage.setItem(
      "wishlistDataPrices",
      JSON.stringify(filteredWishlistPrices)
    );
    toast.info(
      <div>
        <p> Item Removed from wishlist</p>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      }
    );
  };
  return (
    <div className="w-[340px] md:w-72 min-h-56 font-euclid p-4">
      <div className="flex flex-col gap-2">
        <img src={data?.imageUrl} alt="" />
        <p className="text-left text-sm md:text-sm text-gray-600 mt-4">
          {data?.productTitle}
        </p>
        <p className="text-sm price sm:text-xs md:text-md mt-2">
          ₹ {data?.productPrice}
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <button
          className="bg-white bg-opacity-70 min-h-10 w-5/6 text-black -mt-52"
          onClick={() => removeItemFromWishlist(data)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
