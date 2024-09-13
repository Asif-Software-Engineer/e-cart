import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../productfilter/ProductSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButton = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div className="mr-4" key={index}>
              <Link to={"/productFilter/" + button}>
                <button
                  onClick={() => dispatch(filterProducts(button))}
                  className="hover:bg-green duration-300 ease border border-gray text-lg hover:text-white hover:font-bold p-4 rounded-2xl"
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green p-2 w-[55%] mx-auto rounded-lg">
        <h3 className="text-yellow text-center text-lg font-bold">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4 ">
        <img
          className="h-[600px] w-[70%] rounded-lg shadow-lg shadow-gray object-cover"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButton;
