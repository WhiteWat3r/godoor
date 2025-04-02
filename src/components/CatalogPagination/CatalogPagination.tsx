import type React from "react";
import { ArrowLeft } from "@/components/ui/icons/ArrowLeft";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";
import "./CatalogPagination.css"; // Импортируем стили для пагинации

interface CatalogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CatalogPagination: React.FC<CatalogPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) {
      pageNumbers.push("ellipsis-start");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsis-end");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination-container">
      <div className="pagination-content">
        {currentPage > 1 && (
          <button
            className="pagination-nav-button"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Предыдущая страница"
          >
            <ArrowLeft height="14px" width="14px" />
          </button>
        )}

        <div className="pagination-numbers">
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                  ...
                </span>
              );
            }

            return (
              <button
                key={index}
                className={`pagination-number ${currentPage === page ? "pagination-number-active" : ""}`}
                onClick={() => onPageChange(Number(page))}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {currentPage < totalPages && (
          <button
            className="pagination-nav-button"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Следующая страница"
          >
            <ArrowRight height="14px" width="14px" />
          </button>
        )}
      </div>
    </div>
  );
};
