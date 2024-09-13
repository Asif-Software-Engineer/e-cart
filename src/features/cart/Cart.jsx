import React from "react";
import { useSelector } from "react-redux";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
            className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-green">
            Shopping Cart
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-gray border-b-gray text-gray">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I'm never giving up, I'm just
              getting started. I'm up to something. Fan luv.
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
              <h1 className="text-black text-3xl font-bold py-4 leading-none">Your bag is empty</h1>
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
