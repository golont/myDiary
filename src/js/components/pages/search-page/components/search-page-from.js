import React from "react";
import PropTypes from "prop-types";

const SearchPageFrom = ({
    handlers: {
        onSubmitHandler,
        onDateFromChangeHandler,
        onDateToChangeHandler
    },
    date: { minDate, maxDate, toDate, fromDate }
}) => {
    return (
        <div className="search-page__wrapper">
            <form className="search-page__form" onSubmit={onSubmitHandler}>
                <div className="search-page__form-date">
                    <div className="search-page__form-from">
                        from
                        <input
                            className="input input-date"
                            type="date"
                            min={minDate}
                            max={toDate}
                            onChange={onDateFromChangeHandler}
                            value={fromDate}
                        />
                    </div>
                    <div className="search-page__form-to">
                        to
                        <input
                            className="input input-date"
                            type="date"
                            min={fromDate}
                            max={maxDate}
                            onChange={onDateToChangeHandler}
                            value={toDate}
                        />
                    </div>
                </div>
                <button className="button button-data-page button-search-page">
                    Search
                </button>
            </form>
        </div>
    );
};

SearchPageFrom.propTypes = {
    handlers: PropTypes.shape({
        onSubmitHandler: PropTypes.func,
        onDateToChangeHandler: PropTypes.func,
        onDateFromChangeHandler: PropTypes.func
    }),
    dates: PropTypes.shape({
        minDate: PropTypes.string,
        maxDate: PropTypes.string,
        fromDate: PropTypes.string,
        toDate: PropTypes.string
    })
};

export default SearchPageFrom;
