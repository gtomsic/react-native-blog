import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.label}>{initialValues.labelTitle}</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>{initialValues.labelContent}</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                onPress={() => onSubmit(title, content)}
                title="Save Blog Post"
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: "",
        labelTitle: "Enter Title",
        labelContent: "Enter Content",
    },
};

export default BlogPostForm;

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 15,
        marginHorizontal: 15,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#dedede",
        backgroundColor: "#ffffff",
        padding: 10,
    },
    label: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 5,
    },
    buttonStyle: {
        marginTop: 15,
    },
});
