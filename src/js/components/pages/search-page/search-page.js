import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchPage = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    if (!isLogged) return <Redirect to="/login" />;
    return <div>Search Page</div>;
};

export default SearchPage;
