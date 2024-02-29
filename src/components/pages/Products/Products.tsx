import Heading from '@atoms/Heading/Heading';
import Header from '@organisms/Header/Header';
import ProductsSearch from '@organisms/ProductsSearch/ProductsSearch';
import DefaultTemplate from '@templates/DefaultTemplate/DefaultTemplate';

function Products() {
  return (
    <DefaultTemplate
      header={<Header />}
      title={<Heading data-testid="products-header">All products</Heading>}
      content={<ProductsSearch />}
    />
  );
}

export default Products;
