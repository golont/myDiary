import Note from "../note";
import PropTypes from "prop-types";
import React from "react";

const Notes = ({ currentPage, postsPerPage, posts }) => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

    return (
        <div className="data-page__wrapper">
            {currentPosts.map(post => (
                <Note key={post._id} post={post} />
            ))}
        </div>
    );
};

Notes.propTypes = {
    currentPage: PropTypes.number,
    postsPerPage: PropTypes.number,
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