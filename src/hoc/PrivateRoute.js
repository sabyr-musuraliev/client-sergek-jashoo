import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuth, "from Private route");
    if (isAuth) {
        return children;
    }
    return <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
