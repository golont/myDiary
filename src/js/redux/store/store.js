import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";
import { LoremIpsum } from "lorem-ipsum";
import uuid from "uuid";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

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
//     pagination: {
// currentPage: 1,
// postsPerPage: 10
//     }
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
        pagination: {
            currentPage: 1,
            postsPerPage: 10
        },
        previousPosts: [
            {
                _id: uuid(),
                title: lorem.generateWords(9),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
                date: "27.08.2019"
            },
            {
                _id: uuid(),
                title: lorem.generateWords(3),
                text: lorem.generateParagraphs(1),
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
