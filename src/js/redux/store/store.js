import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";

const paginationInit = {
    currentPage: 1,
    postsPerPage: 10
};

const initialState = {
    user: {
        isLoggedIn: false,
        name: null
    },
    data: {
        error: false,
        loading: false,
        lastPost: {},
        previousPosts: [],
        pagination: paginationInit
    },
    search: {
        minDate: "",
        maxDate: "",
        fromDate: "",
        toDate: "",
        posts: [],
        pagination: paginationInit
    },
    timer: {
        time: ""
    }
};
// const initialState =
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
