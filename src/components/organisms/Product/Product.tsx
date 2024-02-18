import Loader from '@atoms/loader/Loader';
import Container from '@atoms/Container/Container';
import Carousel from '@molecules/Carousel/Carousel';
import ProductDescription from '@molecules/ProductDescription/ProductDescription';

import s from './Product.module.css';
import Heading from '@atoms/Heading/Heading';

function Product({ data }: any) {
  console.log(data);

  if (!data) {
    return (
      <Container className={s.container}>
        <Loader size={64} className={s.loader} />
      </Container>
    );
  }
  return (
    <Container className={s.container}>
      <Heading className={s.heading}>Product {data.id}</Heading>
      <div className={s.content}>
        <Carousel images={data.images} />
        <ProductDescription data={data} />
      </div>
    </Container>
  );
}

export default Product;