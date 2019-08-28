import React from "react";
import PropTypes from "prop-types";

const DataPageHeader = ({ title, onTitleChange, total, date }) => {
    return (
        <div className="data-page__header">
            <div className="data-page__header-title">
                <input
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                    className="input input-data-title"
                    placeholder={`Post #${total}`}
                />
            </div>
            <div className="data-page__header-date">{date}</div>
        </div>
    );
};

DataPageHeader.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    total: PropTypes.number,
    onTitleChange: PropTypes.func
};

export default DataPageHeader;
