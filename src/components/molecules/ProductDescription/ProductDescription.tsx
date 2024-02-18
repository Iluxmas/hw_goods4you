import DescriptionItem from '@atoms/DescriptionItem/DescriptionItem';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';

import s from './ProductDescription.module.css';

const getFinalPrice = (pr: number, disc: number) =>
  ((pr * (100 - disc)) / 100).toFixed(2) + '$';

function ProductDescription({ data }: any) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <BlockHeading className={s.heading}>{data.title}</BlockHeading>
        <DescriptionItem title="SKU ID" text={'000' + data.id} />
      </div>
      <div className={s.discription}>
        <DescriptionItem title="Rating" text={data.rating} />
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
