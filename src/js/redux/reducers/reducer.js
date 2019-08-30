import * as Actions from "./../actions/actions";
import moment from "moment";

const updateUser = ({ user }, { type, payload }) => {
    switch (type) {
        case Actions.USER_LOGINING:
            return {
                isLoggedIn: true,
                name: payload.trim()
            };
        case Actions.USER_LOGINING_OUT:
            return {
                isLoggedIn: false,
                name: null
            };
        default:
            return user;
    }
};

const updateData = ({ data }, { type, payload }) => {
    switch (type) {
        case Actions.AUTHENTICATE_USER_REQUEST:
            return {
                ...data,
                loading: true,
                error: false
            };
        case Actions.AUTHENTICATE_USER_SUCCESS:
            return {
                ...data,
                loading: false,
                error: false,
                lastPost: payload[payload.length - 1],
                previousPosts: payload.slice(0, -1).reverse(),
                total: payload.length
            };
        case Actions.AUTHENTICATE_USER_FAILURE:
            return {
                ...data,
                loading: false,
                error: true
            };
        case Actions.ON_TITLE_CHANGE:
            return {
                ...data,
                lastPost: {
                    ...data.lastPost,
                    title: payload
                }
            };
        case Actions.ON_TEXT_CHANGE:
            return {
                ...data,
                lastPost: {
                    ...data.lastPost,
                    text: payload
                }
            };
        case Actions.SET_CURRENT_PAGE:
            return {
                ...data,
                pagination: {
                    ...data.pagination,
                    currentPage: payload
                }
            };
        case Actions.SET_POSTS_PER_PAGE:
            return {
                ...data,
                pagination: {
                    ...data.pagination,
                    postsPerPage: payload
                }
            };
        default:
            return data;
    }
};

const updateTimer = ({ timer }, { type, payload }) => {
    switch (type) {
        case Actions.SET_TIMER_COUNT:
            return {
                ...timer,
                time: payload.time,
                date: payload.date
            };
        default:
            return timer;
    }
};

const updateSearch = (state, { type, payload }) => {
    switch (type) {
        case Actions.SET_MIN_MAX_DATES:
            if (state.data.previousPosts.length > 0)
                return {
                    ...state.search,
                    maxDate: moment(
                        state.data.previousPosts[0].date,
                        "DD.MM.YYYY"
                    ).format("YYYY-MM-DD"),
                    minDate: moment(
                        state.data.previousPosts[
                            state.data.previousPosts.length - 1
                        ].date,
                        "DD.MM.YYYY"
                    ).format("YYYY-MM-DD")
                };
        case Actions.SEARCH_POSTS:
            return {
                ...state.search,
                posts: state.data.previousPosts.filter(element => {
                    const before = moment(payload.maxDate, "YYYY-MM-DD");
                    const after = moment(payload.minDate, "YYYY-MM-DD");
                    const elem = moment(element.date, "DD-MM-YYYY");
                    return elem <= before && elem >= after;
                })
            };
        default:
            return state.search;
    }
};

const reducer = (state, action) => {
    return {
        user: updateUser(state, action),
        data: updateData(state, action),
        search: updateSearch(state, action),
        timer: updateTimer(state, action)
    };
};

export default reducer;
