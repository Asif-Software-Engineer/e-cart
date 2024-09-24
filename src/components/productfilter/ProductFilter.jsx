import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductFilter = () => {
  const products = useSelector((state) => state.products.filterProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <div className="">
        <h1 className="text-4xl text-gray font-bold pl-4">{type}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index} >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  ></ProductCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
