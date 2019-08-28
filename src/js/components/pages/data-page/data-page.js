import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import PreLoader from "../../preloader/preloader";
import TodaysNote from "./components/todays-note";
import PreviousNotes from "./components/previous-notes";

const DataPageContainer = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const { loading, error } = useSelector(state => state.data);

    if (!isLogged) return <Redirect to="/login" />;

    if (loading)
        return (
            <div className="preloader-align">
                <PreLoader />
            </div>
        );
    if (error) return <div className="error">ERROR</div>;

    return (
        <section className="data-page">
            <TodaysNote />
            <PreviousNotes />
        </section>
    );
};

export default DataPageContainer;
