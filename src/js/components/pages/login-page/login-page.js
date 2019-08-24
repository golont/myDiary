import React, { useState } from "react";
import { loginTimeout } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const onChangeHandler = event => {
        setUsername(event.target.value);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        loginTimeout(1000)(dispatch);
    };

    return (
        <section className="login">
            <form className="login__form" onSubmit={onSubmitHandler}>
                <br />
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={onChangeHandler}
                />
                <button>Login</button>
            </form>
        </section>
    );
};

export default Login;
