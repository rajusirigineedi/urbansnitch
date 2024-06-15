"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setWishlistData,
  setWishlistDataPrices,
} from "../redux/wishlistDataSlice";
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
import toast from "react-hot-toast";
import { FcInfo } from "react-icons/fc";
import { ProductDetails } from "../(interfaces)/productDetails";
import { setProductDetailsData } from "../redux/productDetailsSlice";

interface ProductInterface {
  imageUrl: string[];
  title: string;
  price: string;
}
const ProductCard = ({ product }: { product: ProductInterface }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   const wishlistDataFromLocalStorage =
  //     localStorage?.getItem?.("wishlistArray") ?? "";
  //   dispatch(setWishlistData(JSON.parse(wishlistDataFromLocalStorage ?? "")));
  // }, []);

  // useEffect(() => {
  //   const wishlistDataPricesFromLocalStorage =
  //     localStorage?.getItem?.("wishlistDataPrices") ?? "";
  //   dispatch(
  //     setWishlistData(JSON.parse(wishlistDataPricesFromLocalStorage ?? ""))
  //   );
  // }, []);

  let wishlistData = useSelector((store: any) => store.wishlist.wishlistArray);
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

  const sizes = ["S", "M", "L", "1XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState<Boolean>(false);
  const [selectedSizeString, setSelectedSizeString] = useState<String>("");
  const [val, setVal] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    setTimeout(() => setVal(false), 5000);
  });

  const addToWishlist = (status: boolean, data: any) => {
    setIsWishlisted(true);
    toast.success("Item added to wishlist!!", {
      style: {
        background: "#e6ffff",
        color: "#000000",
        fontStyle: "bold",
      },
    });

    let existingWishlistData = [...wishlistData, data];
    dispatch(setWishlistData(existingWishlistData));
    localStorage.setItem("wishlistArray", JSON.stringify(wishlistData));
    let exisitngWishlistDataPrices = [...wishlistDataPrices, data?.price];
    dispatch(setWishlistDataPrices(exisitngWishlistDataPrices));
    localStorage.setItem(
      "wishlistDataPrices",
      JSON.stringify(exisitngWishlistDataPrices)
    );
  };

  const removeFromWishlist = (status: boolean, data: any) => {
    setIsWishlisted(false);

    const filteredWishlistData = wishlistData.filter(
      (item: any) => item?.price !== data?.price
    );
    const filteredWishlistPrices = wishlistDataPrices.filter(
      (item: string) => item !== data?.price
    );
    dispatch(setWishlistData(filteredWishlistData));
    localStorage.setItem("wishlistArray", JSON.stringify(filteredWishlistData));
    dispatch(setWishlistDataPrices(filteredWishlistPrices));
    localStorage.setItem(
      "wishlistDataPrices",
      JSON.stringify(filteredWishlistPrices)
    );
    toast("Item removed from wishlist", {
      icon: <FcInfo size={20} />,
      style: {
        background: "#e6ffff",
        color: "#000000",
        fontStyle: "bold",
      },
    });
  };

  const gotoProductDetailsPage = (price: string) => {
    console.log("going to product details page");
    let productData: ProductDetails = {
      images: product.imageUrl,
      itemTitle: product.title,
      itemDescription:
        "This classic fit kurta in a cool and refreshing solid lime hue keeps you feeling cool and looking great.",
      itemPrice: product.price,
    };
    let productDataArray: ProductDetails[] = [];
    productDataArray.push(productData);
    localStorage.setItem("productDetails", JSON.stringify(productDataArray));
    dispatch(setProductDetailsData(productDataArray));
    router.push(`/products/${price}`);
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
            <p
              className="font-bold text-slate-700 text-md sm:text-sm md:text-sm cursor-pointer"
              onClick={() => gotoProductDetailsPage(product.price)}
            >
              {product.title}
            </p>

            {wishlistDataPrices?.length > 0 &&
            wishlistDataPrices != undefined &&
            wishlistDataPrices != null &&
            Array.isArray(wishlistDataPrices) &&
            wishlistDataPrices.includes(product.price) ? (
              <img
                width="24"
                height="24"
                src="/red-heart.png"
                alt="heart-suit"
                onClick={() => removeFromWishlist(false, product)}
              />
            ) : (
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
