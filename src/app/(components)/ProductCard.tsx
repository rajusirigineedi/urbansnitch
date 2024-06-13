"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Bounce, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistData } from "../redux/wishlistDataSlice";
import { json } from "stream/consumers";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
interface ProductInterface {
  imageUrl: string[];
  title: string;
  price: string;
}
const ProductCard = ({ product }: { product: ProductInterface }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const wishlistData = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );

  const sizes = ["S", "M", "L", "1XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState<Boolean>(false);
  const [selectedSizeString, setSelectedSizeString] = useState<String>("");
  const [val, setVal] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    setTimeout(() => setVal(false), 5000);
  });

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

  const removeFromWishlist = (status: boolean, data: any) => {
    setIsWishlisted(false);
    console.table(data);
    console.table(wishlistData[0]);
    const filteredWishlistData = wishlistData.filter(
      (item: any) => item?.price != data?.price
    );
    dispatch(setWishlistData(filteredWishlistData));
    localStorage.setItem("wishlistArray", JSON.stringify(filteredWishlistData));
    toast.info(
      <div>
        Item removed to wishlist
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
  };

  return (
    <>
      <div className="lg:w-80 md:w-72 sm:w-96 font-euclid">
        <div className="shadow-lg rounded-sm border-red p-4 lg:p-2 md:p-2 cursor-pointer">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  src={product.imageUrl[0]}
                  alt=""
                  className="cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={product.imageUrl[1]}
                  alt=""
                  className="cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={product.imageUrl[2]}
                  alt=""
                  className="cursor-pointer"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
          <div className="flex justify-between items-center mt-3">
            <Link href={`/products/${product.price}`}>
              <p className="font-bold text-slate-700 text-md sm:text-sm md:text-sm">
                {product.title}
              </p>
            </Link>
            {isWishlisted && (
              <img
                width="24"
                height="24"
                src="/red-heart.png"
                alt="heart-suit"
                onClick={() => removeFromWishlist(false, product)}
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
