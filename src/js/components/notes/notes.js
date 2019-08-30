import Note from "../note";
import PropTypes from "prop-types";
import React from "react";

const Notes = ({ posts }) => {

    return (
        <div className="data-page__wrapper">
            {posts.map(post => (
                <Note key={post._id} post={post} />
            ))}
        </div>
    );
};

Notes.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default Notes;