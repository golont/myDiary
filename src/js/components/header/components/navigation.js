import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ isActive }) => {
    return (
        <nav className={isActive ? "header__nav active" : "header__nav"}>
            <ul className="header__nav-items">
                <li className="header__nav-item">
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                </li>
                <li className="header__nav-item">
                    <button>
                        <Link to="/search">Search</Link>
                    </button>
                </li>
                <li className="header__nav-item">
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </li>
                <li className="header__nav-item">
                    <button>
                        <Link to="/logout">Logout</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    isActive: PropTypes.bool
};

Navigation.defaultProps = {
    isActive: false
};

export default Navigation;
