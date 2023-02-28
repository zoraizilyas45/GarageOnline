import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles.js';
import ScreenNames from '../../Helpers/ScreenNames.js';
import { useNavigation } from '@react-navigation/native';
const days = 7;

const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = ({ navigation }) => {
        navigation.navigate(ScreenNames.Confirmation, { item: post });
    }

    return (
        <Pressable onPress={() => {
            navigation.navigate(ScreenNames.Confirmation, { item: post })
        }} style={styles.container}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            //    
            />

            {/* Space & Toatll  */}


            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/*  Old price & new price */}


            {/*  Total price */}

        </Pressable>
    );
};

export default Post;