import ProductCard from "@/components/shared/ProductCard";
import SideBar from "@/components/shared/SideBar";
import React from "react";
import { products } from "@/constants";
const page = () => {
  const product = products[0];
  return (
    <div className="flex-center w-full h-full">
      <div className="flex-center gap-6 flex-col md:flex-row columns-2 flex-wrap px-5">
        {
          products.map((product, index) => (
            <ProductCard key={index} img={product.img} name={product.name} price={product.price}/>
          ))
        }
      </div>
    </div>
      );
};

export default page;
