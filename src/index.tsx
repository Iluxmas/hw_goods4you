import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '@pages/Main/Main';
import ProductPage from '@pages/Product/ProductPage';
import Products from '@pages/Products/Products';
import ReduxProvider from './shared/store/ReduxProvider';

import './index.css';

export const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
