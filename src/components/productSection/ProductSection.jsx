import React from "react";
import ProductSecItem from "./ProductSecItem";
import { storeData } from "../productfilter/ProductData";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-green p-2 w-[55%] mx-auto rounded-lg">
        <h3 className="text-yellow text-center text-lg font-bold">
          SUMMER T-SHIRT SALE UPTO 30%
        </h3>
      </div>
      <div className="grid grid-cols-3 justify-center py-8 gap-6 px-10 w-full">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSecItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                color={product.color}
                size={product.size}
              ></ProductSecItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
