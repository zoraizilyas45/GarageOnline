import React from "react";
import { View, FlatList } from "react-native";
import Post from "../../Component/Post";
import feed1 from "../../Assets/Data/feed1";
import ScreenNames from "../../Helpers/ScreenNames";

const SearchResultsScreen_1 = (props) => {

    return (
        <View>
            <FlatList
                data={feed1}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultsScreen_1;