import { api } from './api';
import { baseApi } from './baseApi';
import {
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

    searchProduct: builder.query<IGetProductsResponse, string>({
      query: (q) => ({
        url: api.searchProduct,
        params: { q },
        method: 'GET',
      }),
    }),

    getCategories: builder.query<TGetAllCategoriesResponse, void>({
      query: () => ({
        url: api.getCategories,
        method: 'GET',
      }),
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
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetWithFilterQuery: useGetWithFilter,
  useSearchProductQuery: useSearch,
  useGetSingleProductQuery: useGetProduct,
} = productApi;
