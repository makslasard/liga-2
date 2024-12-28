interface PageItem {
  id: number;
  pageNumber: number;
}

export const generateListPage = (totalPages: number): PageItem[] => {
  const pages: PageItem[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push({ id: i, pageNumber: i });
  }
  return pages;
};
