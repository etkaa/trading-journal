import React, { useContext } from "react";
import { UserContext } from "../../Context/User.Context";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const NotRequireAuth = () => {
  const { isAuthenticated } = useContext(UserContext);
  const location = useLocation();

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default NotRequireAuth;
