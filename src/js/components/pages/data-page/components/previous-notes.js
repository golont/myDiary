import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../pagination/pagination";
import { setCurrentPage } from "./../../../../redux/actions/actions";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

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

const PreviousNotes = ({
    pageCount,
    handlePageChange,
    posts,
    postsPerPage,
    currentPage
}) => {
    return (
        <div className="data-page__wrapper data-page__wrapper-previous-notes">
            <div className="data-page__wrapper-title">
                <h2 className="title title-data-page">Previous notes</h2>
                <div
                    className="icon-arrow-down data-page__arrow"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                ></div>
            </div>
            <Notes
                currentPage={currentPage}
                posts={posts}
                postsPerPage={postsPerPage}
            />
            {pageCount > 1 ? (
                <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pagination__number"}
                    activeClassName={"active"}
                />
            ) : (
                ""
            )}
        </div>
    );
};

PreviousNotes.propTypes = {
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number,
    postsPerPage: PropTypes.number,
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

    return (
        <PreviousNotes
            pageCount={PageCount}
            posts={previousPosts}
            handlePageChange={handlePageChange}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
        />
    );
};

export default PreviousNotesContainer;
