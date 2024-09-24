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
        className="relative flex flex-col my-6 p-4 bg-white shadow-md border border-gray/30 rounded-xl w-80"
        onClick={() => dispatch(singleProduct(id))}
      >
        <div className="relative h-72" color="green">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover rounded-xl"
            style={{ boxShadow: "0px 2px 8px 2px #4ade80" }}
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-gray text-xl font-semibold">{name}</h6>
          <p className="text-gray leading-normal font-light">{text}</p>
        </div>
        <hr />
        <div className="flex px-4 pt-0 mt-2 justify-between">
          <p>${price}</p>
          <p variant="small" color="gray" className="flex gap-2">
            {colors?.map((color, index) => {
              return (
                <span
                  className="rounded-full mr-4 mt-[3px]"
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: "18px",
                    height: "18px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}
