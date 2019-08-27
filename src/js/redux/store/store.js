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
//     }
// };
const initialState = {
    user: {
        isLoggedIn: true,
        name: "suka"
    },
    data: {
        error: false,
        loading: false,
        total: 3,
        lastPost: {
            _id: "5d65a1594b640a00041ef7dd",
            title: "Post #3",
            text: "",
            date: "27.08.2019"
        },
        previousPosts: [
            {
                _id: "5d65a1264b640a00041ef7db",
                title: "Post #1",
                text: "",
                date: "25.08.2019"
            },
            {
                _id: "5d65a1414b640a00041ef7dc",
                title: "Post #2",
                text: "",
                date: "26.08.2019"
            }
        ]
    }
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
