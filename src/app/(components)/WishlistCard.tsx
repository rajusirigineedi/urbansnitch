import React from "react";
import { LandingPageProductCardInt } from "../(interfaces)/landingPageProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistData } from "../redux/wishlistDataSlice";
import { Zoom, toast } from "react-toastify";
import useMediaCustom from "@/hooks/useMediaCustom";
import { message } from "antd";

const WishlistCard = ({ data }: { data: LandingPageProductCardInt }) => {
  const dispatch = useDispatch();
  const isDesktop = useMediaCustom();
  const [messageApi, contextHolder] = message.useMessage();

  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  const removeItemFromWishlist = (data: any) => {
    if (!isDesktop) {
      messageApi.open({
        type: "warning",
        content: "Item Removed from wishlist",
      });
    } else {
      toast.info(<div>Item Removed from wishlist</div>, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
    const filteredWishlistData = wishlistData.filter(
      (item: any) => item?.price != data?.productPrice
    );
    console.log(filteredWishlistData);
    dispatch(setWishlistData(filteredWishlistData));
    localStorage.setItem("wishlistArray", JSON.stringify(filteredWishlistData));
  };
  return (
    <>
      {contextHolder}
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
    </>
  );
};

export default WishlistCard;
