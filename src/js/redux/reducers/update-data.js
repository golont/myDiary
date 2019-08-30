import * as Actions from "./../actions/actions";

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
                total: payload.length,
                pagination: {
                    currentPage: 1,
                    postsPerPage: 10
                }
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

export default updateData;
