import React from "react";
import './Pagination.scss'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  if (currentPage > 3) {
    pageNumbers.push(1, 2);
    if (currentPage > 4) {
      pageNumbers.push("...");
    }
  }

  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    pageNumbers.push(i);
  }

  if (currentPage < totalPages - 2) {
    if (currentPage < totalPages - 3) {
      pageNumbers.push("...");
    }
    pageNumbers.push(totalPages - 1, totalPages);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="dots">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => {onPageChange(page); window.scrollTo(0, 0);}}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
