import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLoginingOut } from "../../../redux/actions/actions";

const Logout = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();
    if (isLogged) {
        dispatch(userLoginingOut());
    }
    return <Redirect to="/" />;
};

export default Logout;
