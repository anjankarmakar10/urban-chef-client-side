import React from "react";
import { useAuth } from "../context/AuthContext";
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="hero-hight grid place-content-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <>
      <Navigate state={{ pathname: location.pathname }} to={"/signin"} />{" "}
    </>
  );
};

export default PrivateRoute;
