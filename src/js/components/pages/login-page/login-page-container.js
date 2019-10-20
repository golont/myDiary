import React, { useState, useContext } from "react";
import { login } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserServiceContext from "../../../utils/user-service-context";
import Login from "./login-page";
import { validateUsername } from './../../../utils/validate-username';


const LoginContainer = () => {
    const us = useContext(UserServiceContext);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const [username, setUsername] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(true);

    const onChangeHandler = event => {
        setUsername(event.target.value);
        setIsValidUsername(true);
    };

    const usernameInput = React.createRef();
    const onSubmitHandler = event => {
        event.preventDefault();
        if (validateUsername(username)) {
            login(username, us)(dispatch);
            return;
        }
        setIsValidUsername(false);
        usernameInput.current.focus();
    };

    if (isLogged) return <Redirect to="/" />;

    return (
        <Login
            onSubmit={onSubmitHandler}
            name={username}
            isValid={isValidUsername}
            onChange={onChangeHandler}
            focus={usernameInput}
        />
    );
};

export default LoginContainer;
