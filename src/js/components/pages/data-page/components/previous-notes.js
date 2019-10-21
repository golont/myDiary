import React from "react";
import PropTypes from "prop-types";
import NotesPagination from "../../../pagination/notes-pagination";

const PreviousNotes = ({ pageCount, handlePageChange, posts }) => {
    return (
        <div className="data-page__wrapper data-page__wrapper-previous-notes">
            <div className="data-page__wrapper-title">
                <h2 className="title title-data-page">Previous notes</h2>
                <div
                    className="icon-arrow-down data-page__arrow"
                    data-aos="fade-down"
                    data-aos-offset="-100"
                    data-aos-duration="1000"
                ></div>
            </div>
            <NotesPagination
                pageCount={pageCount}
                posts={posts}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

PreviousNotes.propTypes = {
    handlePageChange: PropTypes.func,
    PageCount: PropTypes.number,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default PreviousNotes;