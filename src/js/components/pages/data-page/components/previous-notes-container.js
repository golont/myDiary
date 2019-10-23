import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "./../../../../redux/actions/actions";
import PreviousNotes from "./previous-notes";

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

    if (currentPosts.length < 1)
        return (
            <h2 className="title title-data-page data-page__wrapper-previous-notes">
                No previous notes yet.
            </h2>
        );

    return (
        <PreviousNotes
            pageCount={PageCount}
            posts={currentPosts}
            handlePageChange={handlePageChange}
            initPage={currentPage - 1}
        />
    );
};

export default PreviousNotesContainer;
