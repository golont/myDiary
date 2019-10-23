import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    searchPosts,
    setFromDate,
    setSearchCurrentPage,
    setToDate
} from "../../../redux/actions/actions";
import NotesPagination from "../../pagination/notes-pagination";
import SearchPageFrom from "./components/search-page-from";

const SearchPage = () => {
    const isLogged = useSelector(state => state.user.isLoggedIn);
    if (!isLogged) return <Redirect to="/login" />;

    const hasPosts = useSelector(state => state.data.previousPosts.length < 1);
    if (hasPosts)
        return (
            <h2 className="title title-data-page">No previous notes yet.</h2>
        );

    const dispatch = useDispatch();
    const {
        posts,
        pagination: { currentPage, postsPerPage },
        fromDate,
        toDate,
        minDate,
        maxDate
    } = useSelector(state => state.search);

    const onDateFromChangeHandler = event => {
        dispatch(setFromDate(event.target.value));
    };
    const onDateToChangeHandler = event => {
        dispatch(setToDate(event.target.value));
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        dispatch(searchPosts(fromDate, toDate));
        dispatch(setSearchCurrentPage(1));
    };

    const handlePageChange = ({ selected }) => {
        dispatch(setSearchCurrentPage(selected + 1));
    };

    const pageCount = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

    const date = {
        minDate,
        maxDate,
        fromDate,
        toDate
    };

    const handlers = {
        onSubmitHandler,
        onDateFromChangeHandler,
        onDateToChangeHandler
    };

    return (
        <section className="search-page">
            <h2 className="title title-data-page">Search notes</h2>
            <SearchPageFrom date={date} handlers={handlers} />
            <NotesPagination
                initPage={currentPage - 1}
                posts={currentPosts}
                pageCount={pageCount}
                handlePageChange={handlePageChange}
            />
        </section>
    );
};

export default SearchPage;
