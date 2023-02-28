import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles.js';
import ScreenNames from '../../Helpers/ScreenNames.js';
import { useNavigation } from '@react-navigation/native';
const days = 7;

const Post_1 = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = ({ navigation }) => {
        navigation.navigate(ScreenNames.OrderRide, { item: post });
    }

    return (
        <Pressable onPress={() => {
            navigation.navigate(ScreenNames.OrderRide, { item: post })
        }} style={styles.container}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            //    
            />

            {/* Space & Toatll  */}
            <Text style={styles.bedrooms}>
                {post.Space} Persons {post.Totall} Persons
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/*  Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>Rs{post.oldPrice}</Text>
                <Text style={styles.price}>  Rs{post.newPrice} </Text>
                / Ride
            </Text>

            {/*  Total price */}
            <Text style={styles.totalPrice}>Rs{post.newPrice} total</Text>
        </Pressable>
    );
};

export default Post_1;