import { IProduct } from "@/utils/types";
import { Link } from "react-router-dom";

export const CollectionCard = ({ collection }: { collection: IProduct }) => {
  return (
    <li className="flex flex-col items-center gap-[24px] rounded-[6px] bg-white shadow-md">
      <img
        src={collection.img}
        alt={collection.name}
        className="h-[130px] w-[325px] rounded-t-lg object-cover"
      />
      <div className="flex w-full flex-col items-center justify-between">
        <h3 className="self-start font-bold ml-3">{collection.name}</h3>
        <Link
          to={`/product/${collection.id}`}
          className="max-w-[300px] mt-8 mb-4 w-full rounded-[6px] border-2 border-[#67381A] bg-white px-[24px] py-[10px] text-center font-bold text-[#67381A] transition-all duration-300 hover:bg-[#67381A] hover:text-white"
        >
          Подробнее
        </Link>
      </div>
    </li>
  );
};
