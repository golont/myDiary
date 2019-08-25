import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const DataPage = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    if (!isLogged) return <Redirect to="/login" />;
    return <div>DataPage</div>;
};

export default DataPage;
