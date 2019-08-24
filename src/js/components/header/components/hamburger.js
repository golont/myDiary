import React from "react";

const HamburgerMenu = ({toggleActiveHandler}) => {
    return (
        <div className="header__hamburger">
            <input
                type="checkbox"
                id="checkbox"
                className="checkbox visuallyHidden"
            />
            <label htmlFor="checkbox">
                <div className="hamburger" onClick={toggleActiveHandler}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
    );
};

export default HamburgerMenu;
