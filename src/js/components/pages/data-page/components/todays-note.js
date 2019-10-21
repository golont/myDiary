import React from "react";
import PropTypes from "prop-types";
import DataPageHeader from "./data-page-header";
import DataPageTextarea from "./data-page-textarea";
import DataPageSubmit from "./data-page-submit";

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

export default TodaysNote;