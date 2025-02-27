import { Link } from "react-router-dom";
import arrow from "@/assets/images/doors/arrow.svg";
import logo from "@/assets/images/doors/logo.png";

const menuItems = [
  {
    id: 1,
    link: "/",
    title: "Главная",
  },
  {
    id: 2,
    link: "/catalog",
    title: "Каталог",
  },
  {
    id: 3,
    link: "/1",
    title: "Новинки?",
  },
  {
    id: 4,
    link: "/2",
    title: "Цены?",
  },
  {
    id: 5,
    link: "/3",
    title: "?",
  },
];

export const Header = () => {
  return (
    <header
      className={`sticky top-0 z-20 w-full flex-col border-b border-solid border-[#E0E0E0] bg-white`}
    >
      <div className="w-full bg-[#4F4F4F] text-[16px] leading-[28px] text-[#FFFFFF]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-[20px] px-[40px]">
          <span className="flex gap-[8px]">
            <img src={arrow} alt="arrow" />
            г. Город, ул. Улица, д. 11 (?)
          </span>
          <span className="ml-auto">+7 (800) 31245125</span>
          <span className="h-[10px] w-[1px] bg-white" />
          <span className="">Пн-Вс: 09:00 - 18:00</span>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-[40px]">
        <nav
          className={`relative flex h-[76px] items-center whitespace-nowrap rounded-[42px] transition-all duration-500`}
        >
          <Link to={"/"} className="mr-auto">
            <img src={logo} alt="GoDoor" className="h-[36px] w-[132px]" />
          </Link>
          {/* <span className="absolute w-full h-full rounded-[42px] top-0 left-0 backdrop-blur-[5px] bg-[#F8F8F8D9]" /> */}
          <ul className="flex h-[22px] gap-[50px]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center border-r border-dashed border-[#D7D7D7] pr-[50px] last:border-none last:pr-0"
              >
                <Link
                  to={item.link}
                  className="text-[16px] font-medium leading-[20px] text-gray-900 hover:text-gray-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
