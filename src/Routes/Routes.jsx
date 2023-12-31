import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashBoard from "../Layout/DashBoard";
import Profile from "../Pages/DashBoard/Profile/Profile";
import PropertiesDetails from "../Pages/PropertiesDetails/PropertiesDetails";
import ManagePropertise from "../Pages/DashBoard/Admin/ManagePropertise/ManagePropertise";
import AddProperty from "../Pages/DashBoard/Agent/AddProperty.jsx/AddProperty";
import MyPropertise from "../Pages/DashBoard/Agent/MyPropertise/MyPropertise";
import MySoldPropertise from "../Pages/DashBoard/Agent/MySoldPropertise/MySoldPropertise";
import RequestPropertise from "../Pages/DashBoard/Agent/RequestPropertise/RequestPropertise";
import UpdatePropertise from "../Pages/DashBoard/Agent/UpdatePropertise/UpdatePropertise";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import LoginRoute from "../Component/PrivateRoute/LoginRoute";
import Error from "../Pages/Error/Error";
import ReviewsManage from "../Pages/DashBoard/Admin/ReviewsManage/ReviewsManage";
import WishList from "../Pages/DashBoard/User/Wishlist/WishList";
import PropertyBought from "../Pages/DashBoard/User/PropertyBought/PropertyBought";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        element: (
          <LoginRoute>
            {" "}
            <Login></Login>
          </LoginRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <LoginRoute>
            {" "}
            <Signup></Signup>
          </LoginRoute>
        ),
      },
      {
        path: "/propertiesdetails/:id",
        element: (
          <PrivateRoute>
            <PropertiesDetails></PropertiesDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addproperty",
        element: (
          <PrivateRoute>
            {" "}
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdatePropertise></UpdatePropertise>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myaddedproperties",
        element: (
          <PrivateRoute>
            <MyPropertise></MyPropertise>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/mysoldproperties",
        element: (
          <PrivateRoute>
            <MySoldPropertise></MySoldPropertise>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/requestedproperties",
        element: (
          <PrivateRoute>
            <RequestPropertise></RequestPropertise>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageproperties",
        element: (
          <PrivateRoute>
            <ManagePropertise></ManagePropertise>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/managereviews",
        element: (
          <PrivateRoute>
            <ReviewsManage></ReviewsManage>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlists",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/propertybought",
        element: (
          <PrivateRoute>
            <PropertyBought></PropertyBought>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
