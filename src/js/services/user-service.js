import axios from "axios";

export default class UserService {
    __apibase =
        "https://cors-anywhere.herokuapp.com/https://calm-coast-96117.herokuapp.com/";

    getRemainTime = async () => {
        const body = await axios.get(`${this.__apibase}time/`);
        return body.data;
    };

    updateLastPost = async (username, post) => {
        await axios.post(`${this.__apibase}upd-last-post/`, { username, post });
    };

    _getUser = async username => {
        const body = await axios.get(`${this.__apibase}get-user/${username}`);
        return body.data;
    };

    _getUserPosts = async username => {
        const body = await axios.get(
            `${this.__apibase}get-user-posts/${username}`
        );
        return body.data;
    };

    _createUser = async username => {
        await axios.post(`${this.__apibase}create-user/`, { username });
    };

    _createNewPost = async username => {
        await axios.post(`${this.__apibase}create-new-post/`, { username });
    };

    authenticateUser = async username => {
        const { isUserFound } = await this._getUser(username);
        if (isUserFound) {
            const { posts, currentDate } = await this._getUserPosts(username);
            const lastPostDate = posts[posts.length - 1].date;
            if (currentDate !== lastPostDate) {
                await this._createNewPost(username);
                const { posts } = await this._getUserPosts(username);
                return posts;
            } else {
                return posts;
            }
        } else {
            await this._createUser(username);
            await this._createNewPost(username);
            const { posts } = await this._getUserPosts(username);
            return posts;
        }
    };
}
