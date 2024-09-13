import React from "react";
import { singleProduct } from "./ProductSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function ProductCard({ id, name, text, img, price, colors }) {
  const dispatch = useDispatch();
  const { type } = useParams;

  return (
    <Link className="px-8 " to={`/productFilter/${type}/` + id}>
      <div
        className="relative flex flex-col my-6 p-4 bg-white shadow-md border border-slate-200 rounded-xl w-80"
        onClick={() => dispatch(singleProduct(id))}
      >
        <div className="relative h-72" color="green">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover rounded-xl"
            style={{ boxShadow: "0px 8px 0px 0px #4ade80" }}
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">{name}</h6>
          <p className="text-slate-600 leading-normal font-light">{text}</p>
        </div>
        <hr />
        <div className="px-4 pb-4 pt-0 mt-2">
          <p>${price}</p>
          <p variant="small" color="gray" className="flex gap-2">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </p>
          
          {/* <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button> */}
        </div>
      </div>
    </Link>
  );
}
