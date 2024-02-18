import { api } from './api';
import { baseApi } from './baseApi';
import {
  IGetProductsRequest,
  IGetProductsResponse,
  IGetWithFiltersRequest,
  IProduct,
  TGetAllCategoriesResponse,
} from './dto/apiDto';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWithFilter: builder.query<IGetProductsResponse, IGetWithFiltersRequest>({
      query: (params) => ({
        url: api.getWithFilter,
        params: params,
        method: 'GET',
      }),
    }),

    searchProduct: builder.query<IGetProductsResponse, IGetProductsRequest>({
      query: (data) => ({
        url: api.searchProduct,
        params: data,
        method: 'GET',
      }),
    }),

    getCategories: builder.query<TGetAllCategoriesResponse, void>({
      query: () => ({
        url: api.getCategories,
        method: 'GET',
      }),
      providesTags: ['categories'],
    }),

    getSingleProduct: builder.query<IProduct, string>({
      query: (id) => ({
        url: api.getSingleProduct(id),
        method: 'GET',
      }),
    }),

    getCategoryProducts: builder.query<IGetProductsResponse, string>({
      query: (category) => ({
        url: api.getCategoryProducts(category),
        params: { limit: 9 },
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery: useGetCategories,
  useGetWithFilterQuery: useGetWithFilter,
  useSearchProductQuery: useSearch,
  useGetCategoryProductsQuery: useGetProductsByCategory,
  useGetSingleProductQuery: useGetProduct,
} = productApi;
