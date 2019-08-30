import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import HamburgerMenu from "./components/hamburger";

const Header = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const [isActive, toggleActive] = useState(false);
    const toggleActiveHandler = () => {
        isActive ? toggleActive(false) : toggleActive(true);
    };

    return (
        <header className="header">
            <Logo />
            <Navigation isActive={isActive} isLogged={isLogged} />
            <HamburgerMenu toggleActiveHandler={toggleActiveHandler} />
        </header>
    );
};

export default Header;
