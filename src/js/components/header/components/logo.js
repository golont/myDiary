import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="header__logo">
            <Link to="/">
                <img src="/assets/img/logo.png" alt="Bear logo" />
            </Link>
        </div>
    );
};

export default Logo;
