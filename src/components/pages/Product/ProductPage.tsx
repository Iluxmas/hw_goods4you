import { useParams } from 'react-router-dom';
import Heading from '@atoms/Heading/Heading';
import Header from '@organisms/Header/Header';
import Product from '@organisms/Product/Product';
import { useGetProduct } from '@/shared/store/api/productsApi';
import DefaultTemplate from '@templates/DefaultTemplate/DefaultTemplate';

function ProductPage() {
  const { id } = useParams();

  const { data } = useGetProduct(id as string, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  return (
    <DefaultTemplate
      header={<Header />}
      title={<Heading>Product {data?.id}</Heading>}
      content={<Product data={data} />}
    />
  );
}

export default ProductPage;
