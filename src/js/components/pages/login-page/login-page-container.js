import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../redux/actions/actions";
import UserServiceContext from "../../../utils/user-service-context";
import Login from "./login-page";
import { validateUsername } from "./../../../utils/validate-username";
import PreLoader from "../../preloader/preloader";

const LoginContainer = () => {
    const us = useContext(UserServiceContext);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const { loading, error } = useSelector(state => state.data);
    const [username, setUsername] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(true);

    const onChangeHandler = event => {
        setUsername(event.target.value.trim());
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

    if (loading) {
        return (
            <div className="preloader-align">
                <PreLoader />
            </div>
        );
    }

    // if (error) {
    //     return <div className="error">ERROR</div>;
    // }

    if (isLogged) {
        return <Redirect to="/" />;
    }

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
