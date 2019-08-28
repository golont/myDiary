import React from "react";
import PropTypes from "prop-types";

const DataPageTextarea = ({ textAreaRef, text, onTextChange }) => {
    return (
        <div className="data-page__text">
            <textarea
                ref={textAreaRef}
                className="textarea"
                placeholder="Note your thoughts"
                value={text}
                onChange={onTextChange}
            ></textarea>
        </div>
    );
};

DataPageTextarea.propTypes = {
    text: PropTypes.string,
    textAreaRef: PropTypes.func,
    onTextChange: PropTypes.func
};

export default DataPageTextarea;
