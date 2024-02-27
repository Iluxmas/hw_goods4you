export interface IGetWithFiltersRequest {
  limit?: number;
  skip?: number;
  select?: string[];
}

export type TGetAllCategoriesResponse = string[];

export interface IGetProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IGetProductsRequest {
  q: string;
  limit?: number;
  skip?: number;
  select?: string[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IUpdateProductRequest {
  id: number;
  data: Partial<IProduct>;
}

export interface IGetCategoryProductsRequest {
  category: string;
  limit?: number;
}
