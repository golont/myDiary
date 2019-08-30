import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notes from "../../notes";
import {
    searchPosts,
    setFromDate,
    setSearchCurrentPage
} from "../../../redux/actions/actions";
import ReactPaginate from "react-paginate";

const SearchPage = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    if (!isLogged) return <Redirect to="/login" />;

    const {
        posts,
        pagination: { currentPage, postsPerPage },
        fromDate,
        toDate
    } = useSelector(state => state.search);
    const hasPosts = useSelector(state => state.data.previousPosts.length < 1);
    const { minDate, maxDate } = useSelector(state => state.search);

    const onDateFromChangeHandler = event => {
        dispatch(setFromDate(event.target.value));
    };
    const onDateToChangeHandler = event => {
        dispatch(setToDate(event.target.value));
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        dispatch(searchPosts(fromDate, toDate));
    };

    const handlePageChange = ({ selected }) => {
        dispatch(setSearchCurrentPage(selected + 1));
    };

    const pageCount = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

    if (hasPosts)
        return (
            <h2 className="title title-data-page">No previous notes yet.</h2>
        );

    return (
        <section className="search-page">
            <h2 className="title title-data-page">Search notes</h2>
            <div className="search-page__wrapper">
                <form className="search-page__form" onSubmit={onSubmitHandler}>
                    <div className="search-page__form-date">
                        <div className="search-page__form-from">
                            from
                            <input
                                className="input input-date"
                                type="date"
                                min={minDate}
                                max={toDate}
                                onChange={onDateFromChangeHandler}
                                value={fromDate}
                            />
                        </div>
                        <div className="search-page__form-to">
                            to
                            <input
                                className="input input-date"
                                type="date"
                                min={fromDate}
                                max={maxDate}
                                onChange={onDateToChangeHandler}
                                value={toDate}
                            />
                        </div>
                    </div>
                    <button className="button button-data-page button-search-page">
                        Search
                    </button>
                </form>
            </div>
            <Notes posts={currentPosts} />
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
        </section>
    );
};

export default SearchPage;
