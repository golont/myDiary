export const USER_LOGINING = "USER_LOGINING";
export const userLogining = username => {
    return {
        type: userLogining,
        payload: username
    };
};

export const loginTimeout = (timeout) => dispatch => {
    setTimeout(() =>{
        dispatch(userLogining);
    }, timeout); 
}