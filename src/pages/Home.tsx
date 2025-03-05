import preview from "@/assets/images/doors/preview.png";

import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IProduct } from "@/utils/types";
import { ProductCard } from "@/components/ProductCard";

import door from "@/assets/images/doors/main-door.png";
import door1 from "@/assets/images/doors/door1.png";
import door2 from "@/assets/images/doors/door2.png";
import door3 from "@/assets/images/doors/door3.png";
import door4 from "@/assets/images/doors/door4.png";
import door5 from "@/assets/images/doors/door5.png";
import door6 from "@/assets/images/doors/door6.png";
import door7 from "@/assets/images/doors/door7.png";
import collection1 from "@/assets/images/doors/collection/Link1.png";
import collection2 from "@/assets/images/doors/collection/Link2.png";
import collection3 from "@/assets/images/doors/collection/Link3.png";
import collection4 from "@/assets/images/doors/collection/Link4.png";
import collection5 from "@/assets/images/doors/collection/Link5.png";
import collection6 from "@/assets/images/doors/collection/Link6.png";
import collection7 from "@/assets/images/doors/collection/Link7.png";
import collection8 from "@/assets/images/doors/collection/Link8.png";
import { CategoriesCard } from "@/components/CategoriesCard";
import { ContactForm } from "@/components/ContactForm";
import { CollectionCard } from "@/components/CollectionCard";

const doorModels: IProduct[] = [
  { id: 1, name: "М 118 Э", img: door },
  { id: 2, name: "М 118 Э", img: door1 },
  { id: 3, name: "М 118 Э", img: door2 },
  { id: 4, name: "М 118 Э", img: door3 },
  { id: 5, name: "М 118 Э", img: door4 },
  { id: 6, name: "М 118 Э", img: door5 },
  { id: 7, name: "М 118 Э", img: door6 },
  { id: 8, name: "М 118 Э", img: door7 },
];

const collections: IProduct[] = [
  { id: 1, name: "Входные двери недорого", img: collection1 },
  { id: 2, name: "Двери в дом", img: collection2 },
  { id: 3, name: "Входная дверь в квартиру купить", img: collection3 },
  { id: 4, name: "Входные двери с зеркалом", img: collection4 },
  { id: 5, name: "Двери в квартиру", img: collection5 },
  { id: 6, name: "Входная дверь со стеклом", img: collection6 },
  { id: 7, name: "Входные двери со стеклом", img: collection7 },
  { id: 8, name: "Двери входные металлические", img: collection8 },
];

export const Home = () => {
  return (
    <>
      <section className="pt-[50px]">
        <img src={preview} alt="Подробнее" />
      </section>

      <section className="uppercase">
        <SectionTitle text={"Категории"} />

        <div className="flex w-full gap-[20px]">
          <div className="flex w-[50%] justify-between rounded-[6px] bg-grey px-[50px]">
            <div className="flex flex-col items-start py-[97px] text-white">
              <h4 className="title-1 max-w-[400px]">Межкомнатные двери</h4>
              <Link
                to={"/"}
                className="button-title rounded-[6px] bg-white text-black-default"
              >
                Смотреть
              </Link>
            </div>
            <img
              src={door}
              alt="Межкомнатные двери"
              className="mt-auto h-[286px] w-[133px]"
            />
          </div>
          <CategoriesCard text={"Входные двери"} />
          <CategoriesCard text={"Двери из массива"} />
        </div>
      </section>
      <section>
        <SectionTitle text={"Популярные модели"} />
        <ul className="grid grid-cols-4 gap-[20px]">
          {doorModels.map((model) => (
            <ProductCard product={model} key={model.id} />
          ))}
        </ul>
      </section>
      <section className="rounded-[6px] bg-[#3A3A3A] text-white">
        <div className="m-7">
          <h3 className="title-1">
            Будут вопросы - звоните +7 (950) 341-31-16
          </h3>
          <p className="text-lg">
            Хотите перезвоним Вам? Тогда отправьте ваш номер телефона.
          </p>
          <ContactForm />
        </div>
      </section>
      <section>
        <SectionTitle text={"Подборка дверей"} />
        <ul className="grid grid-cols-4 gap-[20px]">
          {collections.map((collection) => (
            <CollectionCard collection={collection} key={collection.id} />
          ))}
        </ul>
        <Link
          to={`/`} //ссылка на подобрки
          className="mx-auto mb-4 mt-8 block w-full max-w-[250px] rounded-[6px] bg-[#67381A] py-[15px] text-center font-bold text-white transition-all duration-300 hover:bg-[#ba5c22]"
        >
          Загрузить больше
        </Link>
      </section>
    </>
  );
};
