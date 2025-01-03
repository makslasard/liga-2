import React from 'react';
import { Button } from '@mui/material';
import { getTaskPagination } from '../api/getTaskPagination';
import { generateListPage } from '../lib/generateListPage';

import styles from './pagination.module.scss';

export const PaginationBase: React.FC = () => {
  const totalPages = 10;
  const pageList = generateListPage(totalPages);

  const changePageById = (pageId = 1) => {
    getTaskPagination({ currentPage: pageId, totalPages });
  };

  return (
    <div className={styles.paginateWrapper}>
      <div>
        {pageList.map((page) => (
          <>
            <Button onClick={() => changePageById(page.id)}>{page.pageNumber}</Button>
          </>
        ))}
      </div>
    </div>
  );
};
