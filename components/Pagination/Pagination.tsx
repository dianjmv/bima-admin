import { useEffect, useState } from 'react';
import { Button } from 'evergreen-ui';
import { ceil } from 'lodash';

export default function Pagination({
  size,
  total,
  page,
  previousPage,
  nextPage, dataLength,
}) {
  const [fromPage, setFromPage] = useState(1);
  const [toPage, setToPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  useEffect(() => {
    const toValue = page * size;
    setToPage(toValue > total ? total : toValue);
  }, [size, page]);

  useEffect(() => {
    const last = ceil(total / size);
    setLastPage(last);
  }, [total, size]);

  useEffect(() => {
    const fromValue = toPage - dataLength;
    setFromPage(!fromValue || fromValue <= 0 ? 1 : fromValue+1);
  }, [toPage]);
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{fromPage}</span> to{' '}
          <span className="font-medium">{toPage}</span> of{' '}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <Button
          disabled={fromPage == 1}
          marginRight={16}
          onClick={() => previousPage()}
        >
          Previous
        </Button>
        <Button
          disabled={lastPage == page}
          marginRight={16}
          onClick={() => nextPage()}
        >
          Next
        </Button>
      </div>
    </nav>
  );
}
