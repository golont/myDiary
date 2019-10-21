import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import Notes from "../notes";

const NotesPagination = ({ posts, pageCount, handlePageChange }) => {
    return (
        <React.Fragment>
            <Notes posts={posts} />
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
        </React.Fragment>
    );
};

NotesPagination.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            date: PropTypes.string
        })
    ),
    pageCount: PropTypes.number,
    handlePageChange: PropTypes.func
};

export default NotesPagination;
