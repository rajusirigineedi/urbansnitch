import ProductCard from "@/app/(components)/ProductCard";
import Link from "next/link";
import React from "react";

const MenProdcutCard = () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" flex flex-col justify-center items-center">
      <img
        src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Men_639a5d5e-edd6-4f1f-9546-936f94e2ad86.jpg?v=1712717092"
        alt=""
        className="w-full"
      />
      <p className="text-gray-700 mt-4">
        <Link href={"/"} className="underline">
          Home
        </Link>{" "}
        <span className="text-red-400">/ Men</span>
      </p>
      <div className="flex flex-wrap gap-10 justify-center p-4">
        {arr.map((item: number) => (
          <Link href={`/products/${item}`} key={item}>
            <ProductCard
              product={{
                imageUrl: [
                  "https://www.nicobar.com/cdn/shop/files/NBI032285_1_400x.jpg?v=1712661312",
                  "https://www.nicobar.com/cdn/shop/files/NBI032297_1_400x.jpg?v=1712661314",
                  "https://www.nicobar.com/cdn/shop/files/NBI032279_1_400x.jpg?v=1712661312",
                ],
                title: "Comoros Kurta - Green",
                price: "6750" + item,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenProdcutCard;
