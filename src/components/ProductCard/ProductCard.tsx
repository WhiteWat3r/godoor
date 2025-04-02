import type { IProduct } from "@/utils/types";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-custom.css";
import { ArrowLeft } from "../ui/icons/ArrowLeft";
import { ArrowRight } from "../ui/icons/ArrowRight";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 2;

  const renderBullets = () => {
    return Array.from({ length: totalSlides }).map((_, index) => (
      <span
        key={index}
        className={`custom-bullet ${index === activeIndex ? "custom-bullet-active" : ""}`}
        onClick={() => swiper?.slideTo(index)}
      ></span>
    ));
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
  };

  return (
    <li className="flex w-full flex-col items-center gap-[24px] overflow-hidden rounded-[6px] border-2 border-solid border-grey p-[20px]">
      <div className="product-swiper-container relative w-full">
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          className="product-swiper w-full"
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <img
              src={product.innerImg || "/placeholder.svg"}
              alt={product.name}
              className="mx-auto h-[250px] w-auto max-w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={product.outerImg || "/placeholder.svg"}
              alt={product.name}
              className="mx-auto h-[250px] w-auto max-w-full object-contain"
            />
          </SwiperSlide>
        </Swiper>

        {/* Кастомные кнопки навигации */}
        <div ref={prevRef} className="swiper-button-prev-custom">
          <ArrowLeft />
        </div>
        <div ref={nextRef} className="swiper-button-next-custom">
          <ArrowRight />
        </div>

        {/* Кастомная пагинация */}
        <div ref={paginationRef} className="custom-pagination">
          {renderBullets()}
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <h3 className="font-bold">{product.name.split(" ")[0]}</h3>
        <p className="normal-nums">{product.price}₽</p>
        <Link
          to={`/product/${product.id}`}
          className="rounded-[6px] bg-grey px-[24px] py-[12px] text-white transition-all duration-300 hover:bg-grey-2"
        >
          Смотреть
        </Link>
      </div>
    </li>
  );
};
