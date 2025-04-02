import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { entranceDoors } from "@/utils/constants";
import { CatalogPagination } from "@/components/CatalogPagination/CatalogPagination";

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Показывать 16 карточек на странице

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(entranceDoors.length / itemsPerPage);

  // Получаем текущие элементы для отображения
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return entranceDoors.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  // Обработчик изменения страницы
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Прокрутка вверх при смене страницы
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="my-[20px]">
      <SectionTitle text={"Входные двери"} />
      <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentItems.map((door) => (
          <ProductCard product={door} key={door.id} />
        ))}
      </ul>

      {/* Отображаем пагинацию только если есть больше одной страницы */}
      {totalPages > 1 && (
        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};
