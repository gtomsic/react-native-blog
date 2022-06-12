import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "edit_blogpost":
            const id = action.payload.id;
            return state.map((blogPost) => {
                return blogPost.id === id ? action.payload : blogPost;
            });
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case "add_blogpost":
            return [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    id: state.length + 1,
                },
            ];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({
            type: "add_blogpost",
            payload: { title, content },
        });
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({
            type: "delete_blogpost",
            payload: id,
        });
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
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
    { addBlogPost, deleteBlogPost, editBlogPost },
    [
        {
            title: "Testing post",
            content: "This is a testing post for development pursposes.",
            id: 1,
        },
    ]
);
