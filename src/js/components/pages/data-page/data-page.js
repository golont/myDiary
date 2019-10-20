import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import TodaysNote from "./components/todays-note";
import PreviousNotes from "./components/previous-notes";

const DataPageContainer = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    
    if (!isLogged) return <Redirect to="/login" />;

    return (
        <section className="data-page">
            <TodaysNote />
            <PreviousNotes />
        </section>
    );
};

export default DataPageContainer;
