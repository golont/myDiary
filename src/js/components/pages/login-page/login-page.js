import React from "react";
import PropTypes from "prop-types";

const Login = ({ onSubmit, isValid, name, onChange, focus }) => {
    return (
        <section className="login">
            <form className="login__form" onSubmit={onSubmit}>
                <input
                    className={
                        isValid
                            ? "input input-login"
                            : "input input-login invalid"
                    }
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

export default Login;
