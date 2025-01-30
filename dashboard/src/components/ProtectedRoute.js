import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const validateToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decoded.exp < currentTime) {
      return false; // Token expired
    }
    return true; // Token is valid
  } catch (error) {
    return false; // Invalid token
  }
};

const ProtectedRoute = ({ children }) => {
  const isAuthorized = validateToken();

  if (!isAuthorized) {
    alert("You are not authorized. Please log in again.");
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component if authorized
};

export default ProtectedRoute;
