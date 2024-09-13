import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../../../features/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../slider/SilderData";

export const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div className="flex justify-center items-center align-center">
                {parseInt(item.id) === slideIndex && (
                  <img
                    src={item.img}
                    alt="shoes"
                    className="object-contain max-h-[850px] w-full"
                  />
                )}
              </div>
              <div className="absolute top-4 mx-auto inset-x-1/4">
                <p className="text-white text-2xl w-full font-bold bg-black p-4">
                  {parseInt(item.id) === slideIndex && item.text}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? " bg-green rounded-full p-2 cursor-pointer w-full"
                    : " bg-white rounded-full p-2 cursor-pointer w-full"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-4 bg-white rounded-full font-bold p-2 hover:bg-green hover:text-white"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 bg-white rounded-full font-bold p-2 hover:bg-green hover:text-white"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};
