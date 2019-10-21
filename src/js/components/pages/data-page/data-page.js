import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import TodaysNote from "./components/todays-note-container";
import PreviousNotes from "./components/previous-notes-container";

const DataPage = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    
    if (!isLogged) return <Redirect to="/login" />;

    return (
        <section className="data-page">
            <TodaysNote />
            <PreviousNotes />
        </section>
    );
};

export default DataPage;
