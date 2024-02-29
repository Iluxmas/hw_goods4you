import { useState } from 'react';
import Input from '@atoms/Input/Input';
import Button from '@atoms/Button/Button';
import useEditProduct from '@/utils/useEditProduct';
import { getFinalPrice } from '@/utils/getFinalPrice';
import { IProduct } from '@/shared/store/api/dto/apiDto';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import { ReactComponent as StarIcon } from '@/icons/star.svg';
import { useUpdateProduct } from '@/shared/store/api/productsApi';
import DescriptionItem from '@atoms/DescriptionItem/DescriptionItem';

import s from './ProductDescription.module.css';

type Props = {
  data: IProduct;
};

function ProductDescription({ data }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateProduct, { isLoading }] = useUpdateProduct();

  const handleSubmitForm = (v: Partial<IProduct>) => {
    const keys = Object.keys(v) as (keyof IProduct)[];

    if (keys.every((key) => v[key] == data[key])) {
      setIsEditing(!isEditing);
      return;
    }

    updateProduct({ id: data.id, data: v })
      .unwrap()
      .then(() => {
        setIsEditing(!isEditing);
      });
  };

  const { values, handleSubmit, setFieldValue, errors } = useEditProduct(
    handleSubmitForm,
    data
  );

  return (
    <div className={s.root}>
      <div className={s.header}>
        <BlockHeading className={s.heading}>{data.title}</BlockHeading>
        <DescriptionItem title="SKU ID" text={'000' + data.id} />
      </div>
      <div className={s.discription}>
        <DescriptionItem title="Rating">
          {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </DescriptionItem>
        {isEditing ? (
          <>
            <Input
              pattern="\d*"
              type="number"
              label="Base price"
              value={values.price}
              disabled={isLoading}
              isError={!!errors.price}
              onChange={(e) => setFieldValue('price', e.target.valueAsNumber)}
            />
            <Input
              type="number"
              pattern="\d*"
              disabled={isLoading}
              label="Discount percentage"
              value={values.discountPercentage}
              isError={!!errors.discountPercentage}
              onChange={(e) =>
                setFieldValue('discountPercentage', e.target.valueAsNumber)
              }
            />
          </>
        ) : (
          <>
            {' '}
            <DescriptionItem title="Base price" text={data.price + '$'} />
            <DescriptionItem
              title="Discount percentage"
              text={data.discountPercentage}
            />
          </>
        )}
        <DescriptionItem
          title="Discount price"
          editMode={isEditing}
          text={getFinalPrice(data.price, data.discountPercentage)}
        />
        {isEditing ? (
          <>
            <Input
              pattern="\d*"
              type="number"
              label="Stock"
              disabled={isLoading}
              value={values.stock}
              isError={!!errors.stock}
              onChange={(e) => setFieldValue('stock', e.target.valueAsNumber)}
            />
            <Input
              label="Brand"
              disabled={isLoading}
              value={values.brand}
              isError={!!errors.brand}
              onChange={(e) => setFieldValue('brand', e.target.value)}
            />
            <Input
              label="Category"
              value={values.category}
              disabled={isLoading}
              isError={!!errors.category}
              onChange={(e) => {
                console.log(errors);
                setFieldValue('category', e.target.value);
              }}
            />
            <Input
              textArea
              label="Description"
              disabled={isLoading}
              value={values.description}
              isError={!!errors.description}
              onChange={(e) => setFieldValue('description', e.target.value)}
            />
          </>
        ) : (
          <>
            <DescriptionItem title="Stock" text={data.stock} />
            <DescriptionItem title="Brand" text={data.brand} />
            <DescriptionItem title="Category" text={data.category} />
            <DescriptionItem title="Description" text={data.description} />
          </>
        )}
      </div>
      <Button
        text={isEditing ? 'Save' : 'Edit'}
        className={s.button}
        isLoading={isLoading}
        disabled={Object.keys(errors).length > 0}
        onClick={() => {
          if (isEditing) {
            handleSubmit();
          } else {
            setIsEditing(true);
          }
        }}
      />
    </div>
  );
}

export default ProductDescription;
