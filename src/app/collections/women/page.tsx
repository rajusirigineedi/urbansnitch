import ProductCard from "@/app/(components)/ProductCard";
import Link from "next/link";
import React from "react";

const MenProdcutCard = () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" flex flex-col justify-center items-center">
      <img
        src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Women_4a1bad01-1f63-4c0e-a2d8-fb3b4ee9826b.jpg?v=1712717092"
        alt=""
        className="w-full"
      />
      <p className="text-gray-700 mt-4">
        <Link href={"/"} className="underline">
          Home
        </Link>{" "}
        <span className="text-red-400">/ Women</span>
      </p>
      <div className="flex flex-wrap gap-10 justify-center p-4">
        {arr.map((item: number) => (
          <ProductCard
            product={{
              imageUrl: [
                "https://www.nicobar.com/cdn/shop/files/NBI032582_1_400x.jpg?v=1712606847",
                "https://www.nicobar.com/cdn/shop/files/NBI032571_1_400x.jpg?v=1712606841",
                "https://www.nicobar.com/cdn/shop/files/NBI032646_1_400x.jpg?v=1712606847",
              ],
              title: "Shiro Beach Dress - Ivory",
              price: "5750",
            }}
            key={item}
          />
        ))}
      </div>
    </div>
  );
};

export default MenProdcutCard;
