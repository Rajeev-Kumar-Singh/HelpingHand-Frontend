import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdminLoggedIn } from "lib/adminAuth";

const ProtectedAdminRoute = ({ children }) => {
  const location = useLocation();

  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin/signin" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedAdminRoute;
