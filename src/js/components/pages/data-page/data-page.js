import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useContext } from "react";
import PreLoader from "../../preloader/preloader";
import { onTitleChange, onTextChange } from "../../../redux/actions/actions";
import UserServiceContext from "../../../utils/user-service-context";
import Timer from "../../timer";

const DataPage = ({
    title,
    text,
    total,
    date,
    onTitleChangeHandler,
    onTextChangeHandler,
    onPostUpdateHandler,
    textAreaRef
}) => {
    return (
        <div className="data-page__wrapper">
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
                    ref={textAreaRef}
                    className="textarea"
                    placeholder="Note your thoughts"
                    value={text}
                    onChange={onTextChangeHandler}
                ></textarea>
            </div>
            <div className="data-page__submit">
                <Timer />
                <button
                    className="button button-data-page"
                    onClick={onPostUpdateHandler}
                >
                    Save post
                </button>
            </div>
        </div>
    );
};

const DataPageContainer = () => {
    const us = useContext(UserServiceContext);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLoggedIn);
    const {
        loading,
        error,
        total,
        lastPost: { _id, title, text, date }
    } = useSelector(state => state.data);
    const { name } = useSelector(state => state.user);

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
        <section className="data-page">
            <DataPage
                textAreaRef={textAreaHeight}
                title={title}
                text={text}
                total={total}
                date={date}
                onPostUpdateHandler={onPostUpdateHandler}
                onTextChangeHandler={onTextChangeHandler}
                onTitleChangeHandler={onTitleChangeHandler}
            />
        </section>
    );
};

export default DataPageContainer;
