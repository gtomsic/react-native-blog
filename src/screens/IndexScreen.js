import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useContext } from "react";

import { Context } from "../context/BlogContext";

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button onPress={addBlogPost} title="Add Post" />
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
};

export default IndexScreen;

const styles = StyleSheet.create({});
