import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cart/CartSlice";

export default function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const { id } = useParams();
  const dispacth = useDispatch();

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[850px] rounded-lg"
                />
              </div>
              <div className="grow-[3] text-left">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-bold leading-none">
                    {item.name}
                  </h5>
                  <p className="text-red text-2xl font-bold pb-4">15% OFF</p>
                  <p className="text-gray text-xl font-bold pb-4">
                    {item.text}
                  </p>
                  <div className="w-full pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-1 text-xl font-bold"
                        >
                          Pick a Size
                        </label>
                        <div className="relative">
                          <select
                            id="size"
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full h-10 bg-transparent placeholder:text-green text-gray border border-green rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md appearance-none cursor-pointer"
                          >
                            {item.size.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                            ;
                          </select>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5"
                          >
                            <path d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-1 text-xl font-bold"
                        >
                          Pick a Size
                        </label>
                        <div className="relative">
                          <select
                            id="size"
                            name="size"
                            disabled={true}
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full h-10 bg-transparent placeholder:text-green text-gray border border-green rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md appearance-none cursor-pointer"
                          >
                            {item?.size?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                            ;
                          </select>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5"
                          >
                            <path d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full pb-4">
                    {item.color ? (
                      <div>
                        <label
                          htmlFor="color"
                          className="block mb-1 text-xl font-bold"
                        >
                          Pick a Color
                        </label>
                        <div className="relative">
                          <select
                            id="color"
                            name="cokor"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full h-10 bg-transparent placeholder:text-green text-gray border border-green rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md appearance-none cursor-pointer"
                          >
                            {item.color.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                            ;
                          </select>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5"
                          >
                            <path d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="color"
                          className="block mb-1 text-xl font-bold"
                        >
                          Pick a Color
                        </label>
                        <div className="relative">
                          <select
                            id="color"
                            name="color"
                            disabled={true}
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full h-10 bg-transparent placeholder:text-green text-gray border border-green rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md appearance-none cursor-pointer"
                          >
                            {item?.color?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                            ;
                          </select>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5"
                          >
                            <path d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative group">
                    <div className="absolute bottom transform translate-y-12 mb-2 w-max p-2 bg-black text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add this item into your Cart
                    </div>
                    <button
                      className="px-4 py-2 bg-gray font-bold rounded-lg hover:bg-green"
                      onClick={() =>
                        dispacth(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            size: size,
                            color: color,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
