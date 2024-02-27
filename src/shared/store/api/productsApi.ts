import { api } from './api';
import { baseApi } from './baseApi';
import {
  IGetCategoryProductsRequest,
  IGetProductsRequest,
  IGetProductsResponse,
  IGetWithFiltersRequest,
  IProduct,
  IUpdateProductRequest,
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
      providesTags: (res, err, args) => {
        return [
          {
            type: 'products',
            id: args,
          },
        ];
      },
    }),

    getCategoryProducts: builder.query<
      IGetProductsResponse,
      IGetCategoryProductsRequest
    >({
      query: ({ category, limit }) => ({
        url: api.getCategoryProducts(category),
        params: { limit },
        method: 'GET',
      }),
      providesTags: (_result, _error, arg) => [
        { type: 'products', id: arg.category },
      ],
    }),

    updateProduct: builder.mutation<IProduct, IUpdateProductRequest>({
      query: ({ data, id }) => ({
        url: api.updateProduct(id),
        body: data,
        method: 'PUT',
      }),
      async onQueryStarted({ data, id }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            productApi.util?.updateQueryData(
              'getSingleProduct',
              String(id),
              (draft) => {
                if (!draft) return;
                Object.assign(draft, data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery: useGetCategories,
  useGetWithFilterQuery: useGetWithFilter,
  useSearchProductQuery: useSearch,
  useGetCategoryProductsQuery: useGetProductsByCategory,
  useLazyGetCategoryProductsQuery: useLazyGetCategoryProducts,
  useGetSingleProductQuery: useGetProduct,
  useUpdateProductMutation: useUpdateProduct,
} = productApi;
