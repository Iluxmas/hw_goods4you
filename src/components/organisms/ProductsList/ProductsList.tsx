import Button from '@atoms/Button/Button';
import Loader from '@atoms/loader/Loader';
import { IProduct } from '@/shared/store/api/dto/apiDto';
import ProductCard from '@molecules/ProductCard/ProductCard';

import s from './ProductsList.module.css';

type Props = {
  isLoading?: boolean;
  products?: IProduct[];
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
};

function ProductsList({
  products,
  isLoading,
  onLoadMore,
  isLoadingMore,
}: Props) {
  return (
    <div className={s.root}>
      {isLoading ? (
        <Loader size={64} />
      ) : (
        <>
          <div className={s.wrapper}>
            {products?.map(({ thumbnail, title, price, id }) => (
              <ProductCard
                key={id}
                photo={thumbnail}
                name={title}
                price={price}
              />
            ))}
          </div>
          {products && (
            <Button
              text="Show more"
              onClick={onLoadMore}
              isLoading={isLoadingMore}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ProductsList;
