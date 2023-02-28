import React from "react";
import { View, FlatList } from "react-native";
import Post from "../../Component/Post";
import feed from "../../Assets/Data/feed";
import ScreenNames from "../../Helpers/ScreenNames";

const SearchResultsScreen = (props) => {

    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultsScreen;