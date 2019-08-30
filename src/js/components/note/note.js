import React from "react";
import PropTypes from "prop-types";

const Note = ({ post: { title, date, text } }) => {
    return (
        <div
            className="data-page__note"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
        >
            <div className="data-page__note-header">
                <div className="data-page__note-title">{title}</div>
                <div className="data-page__note-date">{date}</div>
            </div>
            <div className="data-page__note-wrapper">
                <div className="textarea textarea-note data-page__note-text">
                    {text}
                </div>
            </div>
        </div>
    );
};

Note.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        text: PropTypes.string
    })
};

export default Note;
