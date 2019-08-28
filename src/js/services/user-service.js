import axios from "axios";

export default class UserService {
    __apibase =
        "https://cors-anywhere.herokuapp.com/https://calm-coast-96117.herokuapp.com/";

    getRemainTime = async () => {
        const body = await axios.get(`${this.__apibase}time/`);
        return body.data;
    };

    getUser = async username => {
        const body = await axios.get(`${this.__apibase}get-user/${username}`);
        return body.data;
    };

    getUserPosts = async username => {
        const body = await axios.get(
            `${this.__apibase}get-user-posts/${username}`
        );
        return body.data;
    };

    createUser = async username => {
        await axios.post(`${this.__apibase}create-user/`, { username });
    };

    createNewPost = async username => {
        await axios.post(`${this.__apibase}create-new-post/`, { username });
    };

    updateLastPost = async (username, post) => {
        await axios.post(`${this.__apibase}upd-last-post/`, { username, post });
    };

    authenticateUser = async username => {
        return await this.getUser(username)
            .then(({ isUserFound }) => {
                return new Promise((resolve, reject) => {
                    isUserFound ? resolve() : reject();
                });
            })
            .then(resolve => {
                return this.getUserPosts(username);
            })
            .then(({ posts, currentDate }) => {
                const lastPostDate = posts[posts.length - 1].date;
                if (currentDate != lastPostDate) {
                    return this.createNewPost(username).then(() =>
                        this.getUserPosts(username)
                    );
                } else return { posts };
            })
            .catch(() => {
                return this.createUser(username)
                    .then(() => this.createNewPost(username))
                    .then(() => this.getUserPosts(username));
            });
    };
}
