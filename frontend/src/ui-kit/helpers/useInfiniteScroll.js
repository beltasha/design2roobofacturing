import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback, params = {}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);
  const [page, setPage] = useState(params.page || 0);
  const size = params.size || 20;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching || isAllDataLoaded) {
      return;
    }

    callback({page:page + 1, size});
    setPage(page + 1);
  }, [isFetching, isAllDataLoaded]);

  function handleScroll() {
    if (isAllDataLoaded || isFetching) {
      return;
    }

    const innerHeight = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ) + window.innerHeight;

    const offsetHeight = document.documentElement.offsetHeight;

    if (offsetHeight - innerHeight < 20) {
      setIsFetching(true);
    };
  }
  return { isFetching, setIsFetching, setIsAllDataLoaded, page, setPage };
};

export default useInfiniteScroll;