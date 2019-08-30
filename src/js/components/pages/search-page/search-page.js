import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Notes from "../../notes";

const SearchPage = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    if (!isLogged) return <Redirect to="/login" />;

    const posts = useSelector(state => state.data.previousPosts.length < 1);
    const { minDate, maxDate } = useSelector(state => state.search);
    const [dateFrom, setDateFrom] = useState(minDate);
    const [dateTo, setDateTo] = useState(maxDate);

    const onDateFromChangeHandler = event => {
        setDateFrom(event.target.value);
    };

    const onDateToChangeHandler = event => {
        setDateTo(event.target.value);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
    };

    if (posts)
        return (
            <h2 className="title title-data-page">No previous notes yet.</h2>
        );

    return (
        <section className="search-page">
            <h2 className="title title-data-page">Search notes</h2>
            <div className="search-page__wrapper">
                <form className="search-page__form" onSubmit={onSubmitHandler}>
                    <div className="search-page__form-date">
                        <div className="search-page__form-from">
                            from
                            <input
                                className="input input-date"
                                type="date"
                                min={minDate}
                                max={dateTo}
                                onChange={onDateFromChangeHandler}
                                value={dateFrom}
                            />
                        </div>
                        <div className="search-page__form-to">
                            to
                            <input
                                className="input input-date"
                                type="date"
                                min={dateFrom}
                                max={maxDate}
                                onChange={onDateToChangeHandler}
                                value={dateTo}
                            />
                        </div>
                    </div>
                    <button className="button button-data-page button-search-page">
                        Search
                    </button>
                </form>
            </div>
            <Notes
            />
        </section>
    );
};

export default SearchPage;
