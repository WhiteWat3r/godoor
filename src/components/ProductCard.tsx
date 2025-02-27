import { IProduct } from "@/utils/types";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <li className="flex flex-col items-center gap-[24px] rounded-[6px] border-2 border-solid p-[20px] border-grey">
      <img
        src={product.img}
        alt={product.name}
        className="h-[250px] w-[115px] object-cover"
      />
      <div className="flex w-full justify-between items-center">
        <h3 className="font-bold">{product.name}</h3>
        <Link
          to={`/product/${product.id}`}
          className="bg-grey rounded-[6px] px-[24px] py-[12px] text-white hover:bg-grey-2 transition-all duration-300"
        >
          Смотреть
        </Link>
      </div>
    </li>
  );
};
