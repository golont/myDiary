import React from "react";
import PropTypes from "prop-types";
import Timer from "../../../timer";

const DataPageSubmit = ({onPostUpdate}) => {
    return (
        <div className="data-page__submit">
            <Timer />
            <button className="button button-data-page" onClick={onPostUpdate}>
                Save post
            </button>
        </div>
    );
};

DataPageSubmit.propTypes = {
    onPostUpdate: PropTypes.func
};

export default DataPageSubmit;
