import { useState } from 'react';
import Heading from '@atoms/Heading/Heading';
import Container from '@atoms/Container/Container';
import Filter from '@organisms/Filter/Filter';
import ProductsList from '@organisms/ProductsList/ProductsList';
import {
  useGetProductsByCategory,
  useGetWithFilter,
} from '@/shared/store/api/productsApi';

import s from './Catalog.module.css';

function Catalog() {
  const [currPage, setCurrPage] = useState(1);
  const [category, setCategory] = useState('');

  const { data } = useGetWithFilter(
    { limit: currPage * 9, select: ['thumbnail', 'title', 'price', 'id'] },
    { skip: !!category }
  );

  const { data: productsData } = useGetProductsByCategory(
    { category, limit: 9 },
    {
      skip: !category,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleReset = () => setCurrPage(1);
  const hadnleSubmit = (value: string) => setCategory(value);
  const handleLoadMore = () => setCurrPage((prev) => prev + 1);

  const products = productsData?.products;

  const showMoreBtn =
    category && productsData
      ? productsData.total / 9 > currPage
      : (data?.total || 1) / 9 > currPage;

  return (
    <section className={s.root} id="CATALOG">
      <Container>
        <Heading className={s.heading}>Catalog</Heading>
        <div className={s.wrapper}>
          <Filter onSubmit={hadnleSubmit} onReset={handleReset} />
          <ProductsList
            showMoreBtn={showMoreBtn}
            products={category ? products : data?.products}
            onLoadMore={handleLoadMore}
          />
        </div>
      </Container>
    </section>
  );
}

export default Catalog;
