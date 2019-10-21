import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserServiceContext from "../../../../utils/user-service-context";
import { onTextChange, onTitleChange } from "../../../../redux/actions/actions";
import TodaysNote from "./todays-note";

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
