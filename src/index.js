import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/redux/store/store";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./js/components/app";

const Idx = () => {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
};

ReactDOM.render(<Idx />, document.getElementById("root"));
