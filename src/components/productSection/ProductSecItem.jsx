import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";

const ProductSecItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <div className="flex flex-col bg-white hover:shadow-lg border border-gray/20 rounded-lg w-full p-4 relative">
        <div>
          <p className="mb-2 absolute -rotate-45 top-8 right-8 z-10 text-red text-xl font-bold">
            SALE %
          </p>
        </div>
        <div className="overflow-hidden rounded-md h-96 flex justify-center items-center">
          <img className="w-full h-full object-cover" src={img} alt={name} />
        </div>
        <div className="py-4 text-center">
          <h4 className="mb-1 text-xl font-semibold">{name}</h4>
          <p className="text-base text-gray mt-4 font-light">{text}</p>
        </div>
        <div className="flex justify-between items-center p-4 font-bold">
          <p className="gray">Size Left: {defaultSize}</p>
          <p className="flex gap-2">
            <p> Color: </p>
            <span
              className="px-3 rounded-full"
              style={{ backgroundColor: defaultColor }}
            >
              {" "}
            </span>
          </p>
        </div>
        <div className="relative group">
          <div className="absolute bottom transform translate-y-12 translate-x-[50%] mb-2 w-max p-2 bg-black text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add this item into your Cart
          </div>
          <button
            className="px-4 py-2 bg-gray font-bold rounded-lg hover:bg-green"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  name: name,
                  text: text,
                  size: defaultSize,
                  color: defaultColor,
                  price: price,
                  quantity: 1,
                  totalPrice: totalPrice,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSecItem;
