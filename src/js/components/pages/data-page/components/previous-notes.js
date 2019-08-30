import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "./../../../../redux/actions/actions";
import PropTypes from "prop-types";
import NotesPagination from "../../../pagination/notes-pagination";

const PreviousNotes = ({ pageCount, handlePageChange, posts }) => {
    if (posts.length < 1)
        return (
            <h2 className="title title-data-page data-page__wrapper-previous-notes">
                No previous notes yet.
            </h2>
        );

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

const PreviousNotesContainer = () => {
    const dispatch = useDispatch();
    const {
        pagination: { currentPage, postsPerPage },
        previousPosts
    } = useSelector(state => state.data);

    const handlePageChange = ({ selected }) => {
        dispatch(setCurrentPage(selected + 1));
    };

    const PageCount = Math.ceil(previousPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = previousPosts.slice(indexOfFirstPage, indexOfLastPost);

    return (
        <PreviousNotes
            pageCount={PageCount}
            posts={currentPosts}
            handlePageChange={handlePageChange}
        />
    );
};

export default PreviousNotesContainer;
