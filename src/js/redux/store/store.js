import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";

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
        pagination: {
            currentPage: 1,
            postsPerPage: 10
        }
    },
    timer: {
        time: ""
    }
};
// const initialState =
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
