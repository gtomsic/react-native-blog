import { StyleSheet } from "react-native";
import React, { useContext } from "react";

import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam("id");
    const blogPost = state.find((blog) => blog.id === id);

    const editBlogPostHandler = (title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
    };
    return (
        <BlogPostForm
            initialValues={{
                title: blogPost.title,
                content: blogPost.content,
                labelTitle: "Edit Title",
                labelContent: "Edit Content",
            }}
            onSubmit={(title, content) => editBlogPostHandler(title, content)}
        />
    );
};

export default EditScreen;

const styles = StyleSheet.create({});
