/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthProvider } from "../../AuthProvider/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
