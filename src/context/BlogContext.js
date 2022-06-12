import createDataContext from "./createDataContext";

import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "get_blogposts":
            return action.payload;
        case "edit_blogpost":
            const id = action.payload.id;
            return state.map((blogPost) => {
                return blogPost.id === id ? action.payload : blogPost;
            });
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const { data } = await jsonServer.get("/blogposts");
        dispatch({ type: "get_blogposts", payload: data });
    };
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const { data } = await jsonServer.post("/blogposts", {
            title,
            content,
        });
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({
            type: "delete_blogpost",
            payload: id,
        });
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { id, title, content });
        dispatch({
            type: "edit_blogpost",
            payload: { id, title, content },
        });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);
