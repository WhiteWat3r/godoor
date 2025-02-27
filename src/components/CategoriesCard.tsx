import { Link } from "react-router-dom";

export const CategoriesCard = ({
  text,
  link,
}: {
  text: string;
  link?: string;
}) => {
  return (
    <div className="border-grey hover:bg-grey group flex flex-col items-start justify-between rounded-[6px] border-2 border-solid px-[50px] py-[97px] transition-colors duration-300">
      <h4 className="title-1 max-w-[230px] text-black-default duration-300 group-hover:text-white">
        {text}
      </h4>
      <Link
        to={link || "/"}
        className="button-title bg-grey rounded-[6px] text-white duration-300 group-hover:bg-white group-hover:text-black-default"
      >
        Смотреть
      </Link>
    </div>
  );
};
