import React from "react";

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
    <div className="flex justify-center items-center gap-2 pb-4">
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="dots">...</span>
        ) : (
          <button
            key={index}
            onClick={() => {onPageChange(page); window.scrollTo(0, 0);}}
            className={`border border-green-500 rounded-lg px-3 py-1 cursor-pointer text-white transition-all hover:bg-green-500 hover:scale-110
              ${currentPage === page ? 'border-blue-500 bg-blue-500 hover:bg-blue-500' : ''}`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;