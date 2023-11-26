import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashBoard from "../Layout/DashBoard";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome";
import Profile from "../Pages/DashBoard/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
