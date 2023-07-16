import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ProductsOverview from './components/ProductsOverview.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import HamburgerMenuExpanded from './components/HamburgerMenuExpanded.jsx';
import Product from './components/Product.jsx';
import Homepage from './components/Homepage.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/shop',
//         element: <ProductsOverview />,
//         children: [
//           {
//             path: '/shop/product/',
//             element: <Product />,
//           },
//         ],
//       }
//     ]
//   },
//       // {
//       //   path: '/cart',
//       //   element: <ShoppingCart />,
//       // },
//       // {
//       //   path: '/menu',
//       //   element: <HamburgerMenuExpanded />,
//       // },
//   {
//     path: '/cart',
//     element: <ShoppingCart />,
//   },
//   {
//     path: '/menu',
//     element: <HamburgerMenuExpanded />,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider 
      router={router}
    /> */}
  </React.StrictMode>,
)
