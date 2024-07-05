import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListViewRoute from './routes/ListViewRoute';

import { contentLoader, contentsLoader } from './loaders/ContentLoader';
import PokemonRoute from './routes/PokemonRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListViewRoute />,
    loader: contentsLoader,
    children: [{
      path: '/pokemon/:id',
      element: <PokemonRoute />,
      loader: contentLoader
    }]
  },
  
]);

const root: Container = document.getElementById("root") as Container;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

