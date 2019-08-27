export const USER_LOGINING = "USER_LOGINING";
export const userLogining = username => {
    return {
        type: USER_LOGINING,
        payload: username
    };
};

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const authenticateUserRequest = () => {
    return {
        type: AUTHENTICATE_USER_REQUEST
    };
};

export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const authenticateUserSuccess = posts => {
    return {
        type: AUTHENTICATE_USER_SUCCESS,
        payload: posts
    };
};

export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const authenticateUserFailure = error => {
    return {
        type: AUTHENTICATE_USER_FAILURE,
        payload: error
    };
};

export const login = (username, userService) => dispatch => {
    dispatch(userLogining(username));
    const { authenticateUser } = userService;
    dispatch(authenticateUserRequest());
    try {
        authenticateUser(username).then(({ posts }) => {
            dispatch(authenticateUserSuccess(posts));
        });
    } catch (error) {
        dispatch(authenticateUserFailure(error));
    }
};

export const USER_LOGINING_OUT = "USER_LOGINING_OUT";
export const userLoginingOut = () => {
    return {
        type: USER_LOGINING_OUT
    };
};


export const ON_TITLE_CHANGE = "ON_TITLE_CHANGE";
export const onTitleChange = (value)  => {
    return {
        type: ON_TITLE_CHANGE,
        payload: value
    }
} 

export const ON_TEXT_CHANGE = "ON_TEXT_CHANGE";
export const onTextChange = (value)  => {
    return {
        type: ON_TEXT_CHANGE,
        payload: value
    }
}