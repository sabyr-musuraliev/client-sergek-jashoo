import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.isAuthenticated);
    if (!isAuth) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PublicRoute;
