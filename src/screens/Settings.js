
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth'
import CustomActivityIndicator from "../Helpers/CustomActivityIndicator";
import ScreenNames from "../Helpers/ScreenNames";


const Settings = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)

    console.log('>>>>>>  comes here 11 ');
    const logout = () => {
        auth().signOut()
            .then(() => {
                console.log('User Signed Out!')
                navigation.navigate(ScreenNames.SignIn)
            }).catch((error) => {

                console.log('>>>>>> ', error);
            });
    }

    return (
        <View style={{ height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CustomActivityIndicator
                isLoading={isLoading}
            />
            <View style={{ marginLeft: 30, marginTop: -130, }}>
                <Image style={{ marginTop: 0, height: 280, width: 360, marginRight: 30, borderRadius: 15, }} source={require('../Assets/Logout.jpg')} />
            </View>
            <TouchableOpacity
                onPress={logout}
                style={{
                    marginTop: 50,
                    width: '100%',
                    height: 50,
                    backgroundColor: '#FFA500',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;