import * as Actions from "./../actions/actions";
import moment from "moment";

const updateSearch = (state, { type, payload }) => {
    switch (type) {
        case Actions.INITIALIZE_SEARCH:
            if (state.data.previousPosts.length > 0) {
                const maxDate = moment(
                    state.data.previousPosts[0].date,
                    "DD.MM.YYYY"
                ).format("YYYY-MM-DD");
                const minDate = moment(
                    state.data.previousPosts[
                        state.data.previousPosts.length - 1
                    ].date,
                    "DD.MM.YYYY"
                ).format("YYYY-MM-DD");
                return {
                    ...state.search,
                    posts: [],
                    fromDate: minDate,
                    toDate: maxDate,
                    maxDate,
                    minDate
                };
            }
        case Actions.SEARCH_POSTS:
            return {
                ...state.search,
                pagination: {
                    ...state.search.pagination,
                    currentPage: 1
                },
                posts: state.data.previousPosts.filter(element => {
                    const before = moment(payload.maxDate, "YYYY-MM-DD");
                    const after = moment(payload.minDate, "YYYY-MM-DD");
                    const elem = moment(element.date, "DD-MM-YYYY");
                    return elem <= before && elem >= after;
                })
            };
        case Actions.SET_SEARCH_CURRENT_PAGE:
            return {
                ...state.search,
                pagination: {
                    ...state.search.pagination,
                    currentPage: payload
                }
            };
        case Actions.SET_SEARCH_POSTS_PER_PAGE:
            return {
                ...state.search,
                pagination: {
                    ...state.search.pagination,
                    postsPerPage: payload
                }
            };
        case Actions.SET_FROM_DATE:
            return {
                ...state.search,
                fromDate: payload
            };
        case Actions.SET_TO_DATE:
            return {
                ...state.search,
                toDate: payload
            };
        default:
            return state.search;
    }
};

export default updateSearch;
