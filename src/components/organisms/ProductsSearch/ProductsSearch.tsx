import React, { useState } from 'react';
import Search from '@molecules/Search/Search';
import Heading from '@atoms/Heading/Heading';
import Container from '@atoms/Container/Container';
import { useGetWithFilter, useSearch } from '@/shared/store/api/productsApi';
import ProductsList from '@organisms/ProductsList/ProductsList';

import s from './ProductsSearch.module.css';

function ProductsSearch() {
  const [limit, setLimit] = useState(9);
  const [query, setQuery] = useState('');

  const { data: dataProducts, isFetching: isLoadingMore } = useGetWithFilter(
    { limit: limit },
    { refetchOnMountOrArgChange: true }
  );

  console.log(dataProducts);
  const { data, isFetching } = useSearch(query, {
    skip: query.length < 3,
    refetchOnMountOrArgChange: true,
  });

  const products = data?.products;

  return (
    <Container className={s.root}>
      <Heading>All products</Heading>
      <Search onQueryChange={(val) => setQuery(val)} isLoading={isFetching} />
      <ProductsList
        products={query ? products : dataProducts?.products}
        onLoadMore={() => setLimit(limit + 9)}
        isLoadingMore={isLoadingMore}
        isLoading={isFetching}
      />
    </Container>
  );
}

export default ProductsSearch;
