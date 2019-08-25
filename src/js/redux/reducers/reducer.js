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

const reducer = (state, action) => {
    return {
        user: updateUser(state, action)
    };
};

export default reducer;
