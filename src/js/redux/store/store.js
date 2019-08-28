import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";

// const initialState = {
//     user: {
//         isLoggedIn: false,
//         name: null
//     },
//     data: {
//         error: false,
//         loading: false,
//         lastPost: {},
//         previousPosts: []
//     },
//     timer: {
//         time: ""
//     }
// };
const initialState = {
    user: {
        isLoggedIn: true,
        name: "lol"
    },
    data: {
        error: false,
        loading: false,
        lastPost: {
            _id: "5d664651c20444000447ab9b",
            title: "Post #2",
            text: "Post #2 what can be better?",
            date: "28.08.2019"
        },
        previousPosts: [
            {
                _id: "5d65b3ef6f6efd0004d0dee0",
                title: "My things everywhere",
                text: "Note My things",
                date: "27.08.2019"
            }
        ],
        total: 2
    },
    timer: {
        time: "12:28:41",
        date: "2019-08-28"
    }
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
