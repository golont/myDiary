import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useContext } from "react";
import PreLoader from "../../preloader/preloader";
import { onTitleChange, onTextChange } from "../../../redux/actions/actions";
import UserServiceContext from "../../../utils/user-service-context";
import DataPageHeader from "./components/data-page-header";
import PropTypes from "prop-types";
import DataPageTextarea from "./components/data-page-textarea";
import DataPageSubmit from "./components/data-page-submit";

const DataPage = ({
    title,
    text,
    total,
    date,
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

DataPage.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    total: PropTypes.number,
    onTitleChange: PropTypes.func,
    onTextChange: PropTypes.func,
    onPostUpdate: PropTypes.func,
    textAreaRef: PropTypes.func
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
                onPostUpdate={onPostUpdateHandler}
                onTextChange={onTextChangeHandler}
                onTitleChange={onTitleChangeHandler}
            />
        </section>
    );
};

export default DataPageContainer;
