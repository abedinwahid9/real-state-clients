import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashBoard from "../Layout/DashBoard";
import Profile from "../Pages/DashBoard/Profile/Profile";
import PropertiesDetails from "../Pages/PropertiesDetails/PropertiesDetails";
import ManagePropertise from "../Pages/DashBoard/ManagePropertise/ManagePropertise";
import AddProperty from "../Pages/DashBoard/Agent/AddProperty.jsx/AddProperty";
import MyPropertise from "../Pages/DashBoard/Agent/MyPropertise/MyPropertise";
import MySoldPropertise from "../Pages/DashBoard/Agent/MySoldPropertise/MySoldPropertise";
import RequestPropertise from "../Pages/DashBoard/Agent/RequestPropertise/RequestPropertise";
import UpdatePropertise from "../Pages/DashBoard/Agent/UpdatePropertise/UpdatePropertise";

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
      {
        path: "/propertiesdetails/:id",
        element: <PropertiesDetails></PropertiesDetails>,
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
      {
        path: "/dashboard/addproperty",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdatePropertise></UpdatePropertise>,
      },
      {
        path: "/dashboard/myaddedproperties",
        element: <MyPropertise></MyPropertise>,
      },
      {
        path: "/dashboard/mysoldproperties",
        element: <MySoldPropertise></MySoldPropertise>,
      },
      {
        path: "/dashboard/requestedproperties",
        element: <RequestPropertise></RequestPropertise>,
      },
      {
        path: "/dashboard/manageproperties",
        element: <ManagePropertise></ManagePropertise>,
      },
    ],
  },
]);
