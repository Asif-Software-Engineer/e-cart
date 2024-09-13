import React, { useState } from "react";
import Cart from "../../features/cart/Cart";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full">
        <div className="bg-black w-full">
          <h3 className="text-white p-4 font-bold text-2xl animate-[bounce_3s_ease-in-out_infinite] ">
            Welcome ALL
          </h3>
        </div>
        <div className="flex justify-between bg-white px-12 py-4">
          <div className="w-16">
            <img src="../assets/images/logo.png" alt="" />
          </div>
          <div className="flex ">
            <button className="text-center border px-8 py-2 rounded-full hover:bg-black hover:text-white font-bold">
              Logout
            </button>
            <div className="flex flex-row justify-center items-center ml-4 border px-4 py-2 rounded-full hover:bg-black hover:text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className="px-2">Whish List</p>
            </div>
            <div
              onClick={handleOpen}
              className="flex flex-row justify-center items-center mx-4 border px-4 py-2 rounded-full hover:bg-black hover:text-white font-bold"
            >
              {totalAmount > 0 ? (
                <span className="rounded-full bg-gray/30 hover:bg-white hover:text-black px-2 mr-1 cursor-pointer">
                  {totalAmount}
                </span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              )}
              <p className="px-2">Shopping Bag</p>
              <div>
                {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-black justify-between text-white px-32 py-4">
          <div className="text-center tracking-normal">50% OFF</div>
          <div className="text-center">Free shipping and returns</div>
          <div className="text-center">Different payment methods</div>
        </div>
      </div>
    </div>
  );
};
