import React from "react";
import ProductCard from "../(components)/ProductCard";

const page = () => {
  return (
    <div className="p-5 flex flex-wrap gap-2">
      <ProductCard
        product={{
          imageUrl: [
            "https://www.nicobar.com/cdn/shop/files/NBI032273_1_400x.jpg?v=1712661312",
            "https://www.nicobar.com/cdn/shop/files/NBI033408_1_400x.jpg?v=1711309965",
            "https://www.nicobar.com/cdn/shop/files/NBI030498_1_400x.jpg?v=1696851893",
          ],
          title: "Midnight marvel jacket - Black",
          price: "6750",
        }}
      />
    </div>
  );
};

export default page;
