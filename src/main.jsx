import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import App from './App.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import Error404 from './components/NotFound/Error404.jsx';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='/products/:product' element={<ProductDetails />} />
      <Route path='*' element={<Error404 />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>,
)
