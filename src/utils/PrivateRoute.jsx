import React from "react";
import { Navigate } from "react-router-dom";

const getToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

const PrivateRoute = ({ component: Component }) => {
  const token = getToken();
  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
