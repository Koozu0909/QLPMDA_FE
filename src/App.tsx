import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllowedAccess from './components/AllowedAccess';
import RouterError from './components/RouterError';
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import Registered from './components/Registered';
import ForgotPassword from './components/Forms/ForgotPassword';
import ChangePassword from './components/Forms/ChangePassword';
import ChangePasswordReady from './components/ChangePasswordReady';
import  MainPage  from './components/MainPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <SignIn />,
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
        <RouterProvider router={router} />
    </>
  )
}

export default App
