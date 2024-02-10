import { useState } from 'react';
import Button from '@atoms/Button/Button';
import ProductCard from '@molecules/ProductCard/ProductCard';
import { TProduct } from '@/types/product';

import s from './ProductsList.module.css';

type Props = {
  products: TProduct[];
};

function ProductsList({ products }: Props) {
  const [showAmount, setShowAmount] = useState<number>(9);

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        {products.slice(0, showAmount).map(({ photo, name, price, id }) => (
          <ProductCard key={id} photo={photo} name={name} price={price} />
        ))}
      </div>
      {showAmount < products.length && (
        <Button
          text="Show more"
          onClick={() => setShowAmount((prev) => prev + 9)}
        />
      )}
    </div>
  );
}

export default ProductsList;
