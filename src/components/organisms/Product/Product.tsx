import Loader from '@atoms/loader/Loader';
import Container from '@atoms/Container/Container';
import Carousel from '@molecules/Carousel/Carousel';
import { IProduct } from '@/shared/store/api/dto/apiDto';
import ProductDescription from '@molecules/ProductDescription/ProductDescription';

import s from './Product.module.css';

type Props = {
  data: IProduct | undefined;
};

function Product({ data }: Props) {
  if (!data) {
    return (
      <Container className={s.container}>
        <Loader size={64} className={s.loader} />
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
