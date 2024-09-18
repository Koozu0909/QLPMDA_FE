import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllowedAccess from './components/Auth/AllowedAccess';
import RouterError from './components/RouterError';
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import Registered from './components/Auth/Registered';
import ForgotPassword from './components/Forms/ForgotPassword';
import ChangePassword from './components/Forms/ChangePassword';
import ChangePasswordReady from './components/Auth/ChangePasswordReady';
import Carousel from './components/MainPage_component/SlideShow';
import Container1 from "./components/MainPage_component/Container1";
import Header from "./components/Header/Header";
import FooterRaw from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Cart/Checkout";
import PaymentResponse from "./components/Cart/PaymentResponse";


const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
    <Carousel />
    <Container1 api="/api/Products/GetAll" />
    <Container1 api="/api/Products/GetAll" />
  </div>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },{
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/payment/return",
    element: <PaymentResponse />,
  },
  {
    path: "/u",
    element: <AllowedAccess />,
    errorElement: <RouterError />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <RouterError />,
  },
  {
    path: "/registered",
    element: <Registered/>,
    errorElement: <RouterError />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
    errorElement: <RouterError />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword/>,
    errorElement: <RouterError />,
  },
  {
    path: "/changepasswordready",
    element: <ChangePasswordReady/>,
    errorElement: <RouterError />,
  },
  
  
]);

function App() {

  return (
    <>
     <Header />
     <RouterProvider router={router} />
     <FooterRaw />
    </>
  )
}

export default App
