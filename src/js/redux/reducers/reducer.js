import * as Actions from "./../actions/actions";

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
                previousPosts: payload.slice(0, -1),
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
        default:
            return data;
    }
};

const reducer = (state, action) => {
    return {
        user: updateUser(state, action),
        data: updateData(state, action)
    };
};

export default reducer;
