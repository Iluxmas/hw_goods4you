import React from 'react';
import Heading from '@atoms/Heading/Heading';
import Container from '@atoms/Container/Container';
import Filter from '@organisms/Filter/Filter';
import ProductsList from '@organisms/ProductsList/ProductsList';
import { products } from '@/constants/products';

import s from './Catalog.module.css';

function Catalog() {
  return (
    <section className={s.root}>
      <Container>
        <Heading className={s.heading}>Catalog</Heading>
        <div className={s.wrapper}>
          <Filter />
          <ProductsList products={products} />
        </div>
      </Container>
    </section>
  );
}

export default Catalog;
