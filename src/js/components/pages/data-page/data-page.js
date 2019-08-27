import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import PreLoader from "../../preloader/preloader";
import { onTitleChange, onTextChange } from "../../../redux/actions/actions";

const DataPage = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const {
        loading,
        error,
        total,
        lastPost: { title, text, date }
    } = useSelector(state => state.data);

    if (!isLogged) return <Redirect to="/login" />;

    if (loading)
        return (
            <div className="preloader-align">
                <PreLoader />
            </div>
        );
    if (error) return <div className="error">ERROR</div>;
    const onTitleChangeHandler = event => {
        dispatch(onTitleChange(event.target.value));
    };

    const onTextChangeHandler = event => {
        dispatch(onTextChange(event.target.value));
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
        <section className="data-page">
                <h2 className="title title-data-page">Today's note</h2>
                <div className="data-page__header">
                    <div className="data-page__header-title">
                        <input
                            type="text"
                            value={title}
                            onChange={onTitleChangeHandler}
                            className="input input-data-title"
                            placeholder={`Post #${total}`}
                        />
                    </div>
                    <div className="data-page__header-date">{date}</div>
                </div>
                <div className="data-page__text">
                    <textarea
                        className="textarea"
                        placeholder="Note your thoughts"
                        value={text}
                        onChange={onTextChangeHandler}
                    ></textarea>
                </div>
                <div className="data-page__submit">
                    <div className="timer">20:13:12</div>
                    <button className="button button-data-page">Save post</button>
                </div>
        </section>
    );
};

export default DataPage;
