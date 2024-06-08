"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Link } from "lucide-react";
import { Bounce, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistData } from "../redux/wishlistDataSlice";
import { json } from "stream/consumers";
interface ProductInterface {
  imageUrl: string[];
  title: string;
  price: string;
}
const ProductCard = ({ product }: { product: ProductInterface }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );

  const sizes = ["S", "M", "L", "1XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState<Boolean>(false);
  const [selectedSizeString, setSelectedSizeString] = useState<String>("");
  const [currentImageUrl, setCurrentImageUrl] = useState(product.imageUrl[0]);
  const [currentCard, setCurrentCard] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [val, setVal] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    setTimeout(() => setVal(false), 5000);
  });
  const handleLeftClick = () => {
    setCurrentImageIndex(
      currentImageIndex - 1 >= 0
        ? currentImageIndex - 1
        : product.imageUrl.length - 1
    );
    setCurrentImageUrl(product.imageUrl[currentImageIndex]);
  };
  const handleRightClick = () => {
    setCurrentImageIndex(
      currentImageIndex + 1 < product.imageUrl.length
        ? currentImageIndex + 1
        : 0
    );
    setCurrentImageUrl(product.imageUrl[currentImageIndex]);
  };

  const addToWishlist = (status: boolean, data: any) => {
    console.log(data);
    setIsWishlisted(true);
    toast.success(
      <div>
        Item added to wishlist
        <div className="flex flex-col">
          <a href="/wishlist" className="underline">
            Go to Wishlist
          </a>
        </div>
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
    dispatch(setWishlistData([...wishlistData, data]));
    localStorage.setItem("wishlistArray", JSON.stringify(wishlistData));
    console.log(wishlistData);
  };

  const removeFromWishlist = (status: boolean) => {
    setIsWishlisted(false);
    toast.info(
      <div>
        Item Removed from wishlist
        <p>
          <a href="/wishlist" className="underline">
            Go to Wishlist
          </a>
        </p>
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
    <>
      <div className="lg:w-80 md:w-72 sm:w-96 font-euclid">
        <div className="shadow-lg rounded-sm border-red p-4 lg:p-2 md:p-2 cursor-pointer">
          <img className="w-[370px]" src={currentImageUrl} alt="image" />
          <div className="flex justify-between mt-4">
            <ChevronLeft size={30} onClick={handleLeftClick} />
            <ChevronRight size={30} onClick={handleRightClick} />
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="font-bold text-slate-700 text-md sm:text-sm md:text-sm">
              {product.title}
            </p>
            {isWishlisted && (
              <img
                width="24"
                height="24"
                src="/red-heart.png"
                alt="heart-suit"
                onClick={() => removeFromWishlist(false)}
              />
            )}
            {!isWishlisted && (
              <Heart size={24} onClick={() => addToWishlist(true, product)} />
            )}
          </div>
          <div className="flex gap-4 text-xs mt-2">
            {sizes.map((item) => (
              <p
                className={
                  selectedSize && selectedSizeString === item
                    ? `border border-gray-300 rounded-full px-2 text-xs cursor-pointer bg-slate-100`
                    : `rounded-full px-1 cursor-pointer`
                }
                key={item}
                onClick={() => {
                  setSelectedSize(true);
                  setSelectedSizeString(item);
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <p className="text-sm price sm:text-xs md:text-md mt-2">
            ₹ {product.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
