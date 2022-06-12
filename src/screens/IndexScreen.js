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

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Show", { id: item.id })
                            }
                        >
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather style={styles.headerIcon} name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
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
        alignItems: "center",
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
        padding: 5,
    },
    headerIcon: {
        marginRight: 15,
    },
});
