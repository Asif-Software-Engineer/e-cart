import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./CartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  if (!openModal) return null;

  return (
    <div>
      {cart.length > 0 ? (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative m-4 w-2/5 min-w-[45%] max-w-[45%] rounded-lg bg-white text-base font-light leading-relaxed antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 text-2xl antialiased font-semibold leading-snug shrink-0 text-green">
              Shopping Cart
            </div>
            <div className="relative flex flex-col p-4 text-base antialiased font-light leading-relaxed border-t border-b 
            border-t-gray border-b-gray text-gray overflow-y-auto max-h-[60vh]">
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="mb-4 border-b border-b-4 border-b-green">
                      <div className="grid md:grid-cols-2 py-4">
                        <div className="w-[120%]">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-[125px] rounded-lg"
                          ></img>
                          <div className="flex flex-col items-start">
                            <h4 className="text-black font-bold leading-none pt-2">
                              {item.name}
                            </h4>
                            <p className="text-black text-left text-sm pt-2 leading-none">
                              {item.text || "No Description Available"}
                            </p>
                          </div>
                        </div>
                        <div className="text-left lg:ml-12 xl:ml-16 font-medium">
                          <p className="text-black text-sm pt-2 leading-none">
                            Item Size: {item.size}
                          </p>
                          <p className="text-black text-sm pt-2 leading-none">
                            Selected Color: {item.color}
                            <span
                              style={{ backgroundColor: item.color }}
                              className="ml-2 rounded-full text-[item.color] px-2"
                            >
                              {" "}
                            </span>
                          </p>
                          <p className="text-black text-sm leading-none pt-2">
                            Quantity: <span className="ml-2">{item.quantity}</span>
                          </p>
                          <p className="text-black text-sm leading-none pt-2">
                            Single Item Price:{" "}
                            <span className="ml-2">${item.price}</span>
                          </p>
                          <p className="text-black text-sm leading-none pt-2">
                            Total Item Prices:{" "}
                            <span className="ml-2">${item.totalPrice}</span>
                          </p>
                          <div className="relative group pt-4">
                            <div className="absolute bottom transform translate-y-8 mb-2 w-max p-2 bg-black text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Remove from the Cart
                            </div>
                            <button 
                            onClick={() => dispatch(removeFromCart(item))}
                            className="px-4 py-1 font-bold border rounded-xl bg-red/30 text-black hover:bg-black hover:text-white">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="" />
                      <div className="flex justify-start items-center pb-2 font-bold">
                        <p className="text-black leading-none pt-2">
                          Total Price of All Products:{" "}
                          <span className="ml-2"> ${totalPrice}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 gap-4">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-3 mr-1 text-xs font-bold text-black uppercase transition-all rounded-lg middle none center hover:bg-red/30 bg-yellow/60 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-lg bg-gradient-to-tr from-green to-yellow py-3 px-6 text-xs font-bold uppercase text-black shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-green">
              Shopping Cart
            </div>
            <div>
              <h1 className="text-black text-3xl font-bold py-4 leading-none">
                Your bag is empty
              </h1>
              <p className="text-black leading-none">Add some products</p>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-black uppercase transition-all rounded-lg middle none center hover:bg-red/30 bg-yellow/60 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-lg bg-gradient-to-tr from-green to-yellow py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
