import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);
    const id = navigation.getParam("id");
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textTitle}>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Edit", {
                        id: navigation.getParam("id"),
                    })
                }
            >
                <EvilIcons style={styles.headerIcon} name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

export default ShowScreen;

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 15,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontWeight: "bold",
    },
    headerIcon: {
        marginRight: 15,
    },
});
