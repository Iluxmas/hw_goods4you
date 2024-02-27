import { useState } from 'react';
import Button from '@atoms/Button/Button';
import Heading from '@atoms/Heading/Heading';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import OptionsList from '@organisms/OptionsList/OptionsList';
import { useLazyGetCategoryProducts } from '@/shared/store/api/productsApi';
import { IGetProductsResponse, IProduct } from '@/shared/store/api/dto/apiDto';

import s from './Quiz.module.css';
import ProductCard from '@molecules/ProductCard/ProductCard';
import clsx from 'clsx';

function Quiz() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [topProducts, setTopProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [getProducts, { isFetching }] = useLazyGetCategoryProducts();

  const handleToggleCheckbox = (value: boolean, name: string) => {
    if (isFetching) return;

    if (!value) {
      setSelectedItems(selectedItems.filter((i) => i !== name));
    } else {
      setSelectedItems(selectedItems.concat(name));
    }
  };

  const handleLoadProducts = () => {
    if (page === 2) {
      setPage(1);
      return;
    }

    if (selectedItems.length) {
      const result = Promise.all(
        selectedItems.map((category) =>
          getProducts({ category }, true).unwrap()
        )
      );

      result.then((array: IGetProductsResponse[]) => {
        const ratedProducts = array
          .map(({ products }) => products)
          .flat()
          .sort((a, b) => b.rating - a.rating);

        setTopProducts(ratedProducts.slice(0, 3));
        setPage(2);
      });
    }
  };

  return (
    <section className={s.root} id="SELECTION">
      <Container className={s.wrapper}>
        <div className={s.header}>
          <div className={clsx(s.headerPageOne, page === 2 && s.hide)}>
            <Heading>We will select the perfect product for you</Heading>
            <Subtitle className={s.subtitle}>
              Answer three questions and we will send you a catalog with the
              most suitable products for you.
            </Subtitle>
          </div>
          <div className={clsx(s.headerPageTwo, page === 1 && s.hide)}>
            <Heading>Your selection is ready!</Heading>
          </div>
        </div>
        <div className={s.content}>
          {page === 1 && (
            <div className={s.contentWrapper}>
              <BlockHeading>
                What type of product are you considering?
              </BlockHeading>
              <OptionsList
                isLoading={isFetching}
                selected={selectedItems}
                onToggle={handleToggleCheckbox}
              />
            </div>
          )}
          {page === 2 && (
            <div className={s.topProducts}>
              {topProducts.map(({ thumbnail, title, price, id }) => (
                <ProductCard
                  key={id}
                  id={id}
                  photo={thumbnail}
                  name={title}
                  price={price}
                />
              ))}
            </div>
          )}
        </div>
        <div className={s.footer}>
          <p className={s.pagination}>{page} of 2</p>
          <Button
            text={page === 1 ? 'Next step' : 'Change selection'}
            intent="outline"
            isLoading={isFetching}
            disabled={selectedItems.length === 0}
            className={s.button}
            onClick={handleLoadProducts}
          />
        </div>
      </Container>
    </section>
  );
}

export default Quiz;
