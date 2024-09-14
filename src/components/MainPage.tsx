import React from 'react';
import Header from './Header/Header';
import FooterRaw from './Footer/Footer';
import Carousel from './MainPage_component/SlideShow';
import Container1 from './MainPage_component/Container1';
import Cart from './Cart/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const MainPage = () => {
  // /Cart => render component cart
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Carousel />
          <Container1 api="/api/Products/GetAll" />
          <Container1 api="/api/Products/GetAll" />
        </div>
      ),
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
   
  );
};

export default MainPage;
