export const api = {
  getWithFilter: '/products',
  searchProduct: '/products/search',
  getCategories: '/products/categories',
  getSingleProduct: (id: string) => `/products/${id}`,
  getCategoryProducts: (cat: string) => `/products/category/${cat}`,
};
