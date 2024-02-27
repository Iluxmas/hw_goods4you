import Price from '@atoms/Price/Price';
import Title from '@atoms/Title/Title';
import Image from '@atoms/Image/Image';
import { Link } from 'react-router-dom';

import s from './ProductCard.module.css';

type Props = {
  name: string;
  photo: string;
  price: number;
  id: number;
};

function ProductCard({ photo, name, price, id }: Props) {
  return (
    <div className={s.root}>
      <div className={s.imageWrapper}>
        <Image src={photo} />
      </div>
      <Link to={`/products/${id}`} className={s.title}>
        <Title text={name} className={s.title} />
      </Link>
      <Price value={price} />
    </div>
  );
}

export default ProductCard;
