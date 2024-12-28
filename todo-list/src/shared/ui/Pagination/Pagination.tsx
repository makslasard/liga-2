import React, { useState } from 'react';

import styles from './Pagination.module.scss';

export const Pagination: React.FC<{ currentPage: number; totalPages: number }> = ({ currentPage, totalPages }) => {
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handlePageChange = (newPage: number) => {
    // Explicitly specify the type of 'newPage' as 'number'
    setSelectedPage(newPage);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <button
          type="button"
          key="prev"
          className={styles.buttonPagination}
          onClick={() => handlePageChange(selectedPage - 1)}
          disabled={selectedPage === 1}>
          &lt;
        </button>

        {pages.map((page) => (
          <button
            type="button"
            key={page}
            className={page === selectedPage ? styles.buttonPaginationActive : styles.buttonPagination}
            onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}

        <button
          type="button"
          key="next"
          className={styles.buttonPagination}
          onClick={() => handlePageChange(selectedPage + 1)}
          disabled={selectedPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};
