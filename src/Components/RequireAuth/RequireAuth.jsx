import React, { useContext } from "react";
import { UserContext } from "../../Context/User.Context";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
