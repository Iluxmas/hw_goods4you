import { useParams } from 'react-router-dom';
import Header from '@organisms/Header/Header';
import Product from '@organisms/Product/Product';
import { useGetProduct } from '@/shared/store/api/productsApi';
import MainTemplate from '@templates/MainTemplate/MainTemplate';

function ProductPage() {
  const { id } = useParams();

  const { data } = useGetProduct(id as string, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  return (
    <MainTemplate>
      <Header />
      <Product data={data} />
    </MainTemplate>
  );
}

export default ProductPage;
