const paginationInit = {
    currentPage: 1,
    postsPerPage: 10
};

export const initialState = {
    user: {
        isLoggedIn: false,
        name: null
    },
    data: {
        error: false,
        loading: false,
        lastPost: {},
        previousPosts: [],
        pagination: paginationInit
    },
    search: {
        minDate: "",
        maxDate: "",
        fromDate: "",
        toDate: "",
        posts: [],
        pagination: paginationInit
    },
    timer: {
        time: ""
    }
};
