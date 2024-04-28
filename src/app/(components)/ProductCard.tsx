"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductInterface {
  imageUrl: string;
  title: string;
  price: string;
}
const ProductCard = ({ product }: { product: ProductInterface }) => {
  const sizes = ["S", "M", "L", "1XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState<Boolean>(false);
  const [selectedSizeString, setSelectedSizeString] = useState<String>("");
  return (
    <div className="lg:w-96 md:w-72 sm:w-64">
      <div className="shadow-lg rounded-sm border-red sm:p-2 lg:p-2 md:p-2">
        <Image
          className="w-full"
          width={80}
          height={72}
          src={product.imageUrl}
          alt="image"
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-bold text-slate-700 text-md sm:text-sm md:text-sm">
            {product.title}
          </p>
          <Image
            width={5}
            height={5}
            src="/shopping-bag.png"
            alt="shopping-bag"
            className="w-5 h-5 sm:w-3 sm:h-3 md:h-5 md:w-5 cursor-pointer"
            onClick={() =>
              console.log(
                "redirect to cart when everything is ready or show a popup of mini cart."
              )
            }
          />
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
  );
};

export default ProductCard;
