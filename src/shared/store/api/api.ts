export const api = {
  getWithFilter: '/products',
  searchProduct: '/products/search',
  getCategories: '/products/categories',
  updateProduct: (id: number) => `/products/${id}`,
  getSingleProduct: (id: string) => `/products/${id}`,
  getCategoryProducts: (cat: string) => `/products/category/${cat}`,
};
