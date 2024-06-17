import ProductCard from "@/app/(components)/ProductCard";
import { menProductData, productSampleData } from "@/app/(utils)/constants";
import Link from "next/link";
import React from "react";
import { mendata } from "../../(utils)/men";

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
        {menProductData.map((item) => (
          <ProductCard
            product={{
              imageUrl: item.contents.imageList,
              title: item.product_name,
              price: item.price.toString(),
              description: item.product_details,
              itemUrl: item.url,
            }}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MenProdcutCard;
