import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProfile from "../pages/Profile/MyProfile";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ServiceDetails from "../pages/Services/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;