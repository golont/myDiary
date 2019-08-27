import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { login } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserServiceContext from "../../../utils/user-service-context";

const Login = ({ onSubmit, isValid, name, onChange, focus }) => {
    return (
        <section className="login">
            <form className="login__form" onSubmit={onSubmit}>
                <input
                    className={isValid ? "input input-login" : "input input-login invalid"}
                    type="text"
                    placeholder="username"
                    value={name}
                    onChange={onChange}
                    ref={focus}
                />
                <button className="button button-login">Login</button>
            </form>
        </section>
    );
};

Login.propTypes = {
    onSubmit: PropTypes.func,
    onChnage: PropTypes.func,
    isValid: PropTypes.bool,
    name: PropTypes.string,
    focus: PropTypes.object
};

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

    const validateUsername = username => {
        const isValid = username.trim().length > 0;
        return isValid;
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
