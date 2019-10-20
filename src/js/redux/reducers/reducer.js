import * as Actions from "./../actions/actions";
import updateData from "./update-data";
import updateSearch from "./update-search";

const updateUser = ({ user }, { type, payload }) => {
    switch (type) {
        case Actions.USER_LOGGEDIN:
            return {
                isLoggedIn: true,
                name: payload
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

const reducer = (state, action) => {
    return {
        user: updateUser(state, action),
        data: updateData(state, action),
        search: updateSearch(state, action),
        timer: updateTimer(state, action)
    };
};

export default reducer;
