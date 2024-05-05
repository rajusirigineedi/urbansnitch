import ProductCard from "@/app/(components)/ProductCard";
import React from "react";

const MenProdcutCard = () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-wrap gap-10 justify-center p-4">
      {arr.map((item: number) => (
        <ProductCard
          product={{
            imageUrl: [
              "https://www.nicobar.com/cdn/shop/files/NBI032285_1_400x.jpg?v=1712661312",
              "https://www.nicobar.com/cdn/shop/files/NBI032297_1_400x.jpg?v=1712661314",
              "https://www.nicobar.com/cdn/shop/files/NBI032279_1_400x.jpg?v=1712661312",
            ],
            title: "Comoros Kurta - Green",
            price: "6750",
          }}
          key={item}
        />
      ))}
    </div>
  );
};

export default MenProdcutCard;
