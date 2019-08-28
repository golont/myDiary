import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataPageHeader from "./data-page-header";
import PropTypes from "prop-types";
import DataPageTextarea from "./data-page-textarea";
import DataPageSubmit from "./data-page-submit";
import UserServiceContext from "../../../../utils/user-service-context";
import { onTextChange, onTitleChange } from "../../../../redux/actions/actions";

const TodaysNote = ({
    post: { title, text, date },
    total,
    onTitleChange,
    onTextChange,
    onPostUpdate,
    textAreaRef
}) => {
    return (
        <div className="data-page__wrapper">
            <h2 className="title title-data-page">Today's note</h2>
            <DataPageHeader
                title={title}
                total={total}
                onTitleChange={onTitleChange}
                date={date}
            />
            <DataPageTextarea
                text={text}
                onTextChange={onTextChange}
                textAreaRef={textAreaRef}
            />
            <DataPageSubmit onPostUpdate={onPostUpdate} />
        </div>
    );
};

TodaysNote.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.string
    }),
    total: PropTypes.number,
    onTitleChange: PropTypes.func,
    onTextChange: PropTypes.func,
    onPostUpdate: PropTypes.func,
    textAreaRef: PropTypes.func
};

const TodaysNoteContainer = () => {
    const us = useContext(UserServiceContext);
    const dispatch = useDispatch();
    const { total, lastPost } = useSelector(state => state.data);
    const { _id, title, text } = lastPost;
    const { name } = useSelector(state => state.user);
    const onTitleChangeHandler = event => {
        dispatch(onTitleChange(event.target.value));
    };

    const onTextChangeHandler = event => {
        dispatch(onTextChange(event.target.value));
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    const onPostUpdateHandler = () => {
        us.updateLastPost(name, { id: _id, title, text });
    };

    //sorry for the crutch :c
    const textAreaHeight = element => {
        try {
            element.style.height = `${element.scrollHeight}px`;
        } catch (err) {}
    };

    return (
        <TodaysNote
            textAreaRef={textAreaHeight}
            total={total}
            post={lastPost}
            onPostUpdate={onPostUpdateHandler}
            onTextChange={onTextChangeHandler}
            onTitleChange={onTitleChangeHandler}
        />
    );
};

export default TodaysNoteContainer;
