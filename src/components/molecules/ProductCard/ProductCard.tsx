import Price from '@atoms/Price/Price';
import Title from '@atoms/Title/Title';
import Image from '@atoms/Image/Image';

import s from './ProductCard.module.css';

type Props = {
  name: string;
  photo: string;
  price: number;
};

function ProductCard({ photo, name, price }: Props) {
  return (
    <div className={s.root}>
      <Image src={photo} className={s.image} />
      <Title text={name} className={s.title} />
      <Price value={price} />
    </div>
  );
}

export default ProductCard;
