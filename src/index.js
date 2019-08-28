import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./js/components/app";
import UserServiceContext from "./js/utils/user-service-context";
import UserService from "./js/services/user-service";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
AOS.init();

const Idx = () => {
    return (
        <Provider store={store}>
            <UserServiceContext.Provider value={new UserService()}>
                <Router>
                    <App />
                </Router>
            </UserServiceContext.Provider>
        </Provider>
    );
};

ReactDOM.render(<Idx />, document.getElementById("root"));
