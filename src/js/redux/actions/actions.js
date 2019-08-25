export const USER_LOGINING = "USER_LOGINING";
export const userLogining = username => {
    return {
        type: USER_LOGINING,
        payload: username
    };
};

export const loginTimeout = username => timeout => dispatch => {
    setTimeout(() => {
        dispatch(userLogining(username));
    }, timeout);
};

export const USER_LOGINING_OUT = "USER_LOGINING_OUT";
export const userLoginingOut = () => {
    return {
        type: USER_LOGINING_OUT
    };
};
