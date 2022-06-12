import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    const createBlogPostHandler = (title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
    };
    return (
        <BlogPostForm
            onSubmit={(title, content) => createBlogPostHandler(title, content)}
        />
    );
};

export default CreateScreen;

const styles = StyleSheet.create({});
