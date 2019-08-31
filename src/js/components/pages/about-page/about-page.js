import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <section className="about-page">
            <h2 className="title title-data-page">About the project</h2>
            <div className="about-page__text">
                <p>
                    This project is a personal diary, where you can note your
                    thoughts.
                </p>
                <p>
                    It's created to perfom how I'm building single page
                    application using react/redux.
                </p>
                <p>
                    To view the demo version of the project{" "}
                    <Link to="/login">login</Link> with one of usernames:
                    "username", "demo", "preview".
                </p>
            </div>
            <div className="about-page__text">
                Source:
                <ol className="about-page__source-list">
                    <li><a href="https://github.com/golont/myDairy" target="_blank" rel="noopener noreferrer">front-end</a></li>
                    <li><a href="https://github.com/golont/myDairyApi" target="_blank" rel="noopener noreferrer">rest-api</a></li>
                </ol>
            </div>
        </section>
    );
};

export default AboutPage;
