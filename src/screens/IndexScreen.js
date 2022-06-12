import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <Button onPress={addBlogPost} title="Add Post" />
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity
                                onPress={() => deleteBlogPost(item.id)}
                            >
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default IndexScreen;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#dedede",
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});
