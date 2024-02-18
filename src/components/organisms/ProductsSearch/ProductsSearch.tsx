import { useEffect, useState } from 'react';
import Search from '@molecules/Search/Search';
import Container from '@atoms/Container/Container';
import ProductsList from '@organisms/ProductsList/ProductsList';
import { useGetWithFilter, useSearch } from '@/shared/store/api/productsApi';

import s from './ProductsSearch.module.css';

function ProductsSearch() {
  const [currPage, setCurrPage] = useState(1);
  const [query, setQuery] = useState('');

  const { data: dataProducts, isFetching: isLoadingMore } = useGetWithFilter(
    { limit: currPage * 9 },
    { refetchOnMountOrArgChange: true }
  );

  console.log(dataProducts);

  const {
    data: foundProducts,
    isLoading,
    isFetching,
  } = useSearch(
    { q: query, limit: currPage * 9 },
    {
      skip: query.length < 3,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    setCurrPage(1);
  }, [query]);

  const products = foundProducts?.products;

  const showMoreBtn =
    query && foundProducts
      ? foundProducts.total / 9 > currPage
      : (dataProducts?.total || 1) / 9 > currPage;

  return (
    <Container className={s.root}>
      <Search onQueryChange={(val) => setQuery(val)} isLoading={isFetching} />
      <ProductsList
        products={query ? products : dataProducts?.products}
        showMoreBtn={showMoreBtn}
        onLoadMore={() => setCurrPage((prev) => prev + 1)}
        isLoadingMore={isLoadingMore}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default ProductsSearch;
