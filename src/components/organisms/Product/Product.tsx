import clsx from 'clsx';
import Loader from '@atoms/loader/Loader';
import Heading from '@atoms/Heading/Heading';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';
import Carousel from '@molecules/Carousel/Carousel';
import { IProduct } from '@/shared/store/api/dto/apiDto';
import ProductDescription from '@molecules/ProductDescription/ProductDescription';

import s from './Product.module.css';

type Props = {
  isLoading: boolean;
  data: IProduct | undefined;
};

function Product({ data, isLoading }: Props) {
  if (isLoading) {
    return (
      <Container className={clsx(s.container, s.centered)}>
        <Loader size="large" className={s.loader} />
      </Container>
    );
  }

  if (!data) {
    return (
      <Container className={clsx(s.container, s.centered)}>
        <Heading>404</Heading>
        <Subtitle>
          We couldn't find product you've requested, please check the address is
          correct
        </Subtitle>
      </Container>
    );
  }

  return (
    <Container className={s.container}>
      <div className={s.content}>
        <Carousel images={data.images} />
        <ProductDescription data={data} />
      </div>
    </Container>
  );
}

export default Product;
