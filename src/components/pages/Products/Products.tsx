import Header from '@organisms/Header/Header';
import ProductsSearch from '@organisms/ProductsSearch/ProductsSearch';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import React from 'react';

function Products() {
  return (
    <MainTemplate>
      <Header />
      <ProductsSearch />
    </MainTemplate>
  );
}

export default Products;
