import { number, string } from 'yup';
import { object } from 'yup';
import { useFormik } from 'formik';
import { IProduct } from '@/shared/store/api/dto/apiDto';

interface TEditProductForm extends Partial<IProduct> {
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
}

const trimField = (val: string) => {
  return val.trim() !== '';
};

class EditProductValidationClass {
  price = number().required('Price is required').min(0);
  discountPercentage = number()
    .required('Discount value is required')
    .min(0)
    .max(100);
  stock = number().required('Stock value is required').min(0);
  brand = string().required('Brand value is required');
  category = string().required('Category is required');
  description = string().required('Description is required');
}

const EditProductValidation = new EditProductValidationClass();

export default function useEditProduct(
  onSubmit: (v: TEditProductForm) => void,
  initial: TEditProductForm
) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      price: initial.price,
      discountPercentage: initial.discountPercentage,
      stock: initial.stock,
      brand: initial.brand,
      category: initial.category,
      description: initial.description,
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: object().shape({
      price: EditProductValidation.price,
      discountPercentage: EditProductValidation.discountPercentage,
      stock: EditProductValidation.stock,
      brand: EditProductValidation.brand,
      category: EditProductValidation.category,
      description: EditProductValidation.description,
    }),
    onSubmit,
  });
  return formik;
}
