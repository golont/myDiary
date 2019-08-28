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

export const SET_TIMER_COUNT = "SET_TIMER_COUNT";
export const setTimerCount = time => {
    return {
        type: SET_TIMER_COUNT,
        payload: time
    };
};

export const login = (username, userService) => dispatch => {
    dispatch(userLogining(username));
    const { authenticateUser, getRemainTime } = userService;
    dispatch(authenticateUserRequest());
    try {
        authenticateUser(username).then(({ posts }) => {
            dispatch(authenticateUserSuccess(posts));
        });
        getRemainTime().then(data => {
            dispatch(setTimerCount(data))
        })

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

export const SET_POSTS_PER_PAGE = "SET_POSTS_PER_PAGE";
export const setPostsPerPage = (payload) => {
    return {
        type: SET_POSTS_PER_PAGE,
        payload 
    }
}

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const setCurrentPage = (payload) => {
    return {
        type: SET_CURRENT_PAGE,
        payload
    }
} 