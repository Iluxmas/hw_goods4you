import { IProduct } from '@/shared/store/api/dto/apiDto';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import { ReactComponent as StarIcon } from '@/icons/star.svg';
import DescriptionItem from '@atoms/DescriptionItem/DescriptionItem';

import s from './ProductDescription.module.css';

const getFinalPrice = (pr: number, disc: number) =>
  ((pr * (100 - disc)) / 100).toFixed(2) + '$';

type Props = {
  data: IProduct;
};

function ProductDescription({ data }: Props) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <BlockHeading className={s.heading}>{data.title}</BlockHeading>
        <DescriptionItem title="SKU ID" text={'000' + data.id} />
      </div>
      <div className={s.discription}>
        <DescriptionItem title="Rating">
          {Array.from({ length: Math.floor(data.rating) }, (_) => (
            <StarIcon />
          ))}
        </DescriptionItem>
        <DescriptionItem title="Base price" text={data.price + '$'} />
        <DescriptionItem
          title="Discount percentage"
          text={data.discountPercentage}
        />
        <DescriptionItem
          title="Discount price"
          text={getFinalPrice(data.price, data.discountPercentage)}
        />
        <DescriptionItem title="Stock" text={data.stock} />
        <DescriptionItem title="Brand" text={data.brand} />
        <DescriptionItem title="Category" text={data.category} />
        <DescriptionItem title="Description" text={data.description} />
      </div>
    </div>
  );
}

export default ProductDescription;
