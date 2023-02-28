import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../../screens/Dashboard';


import ScreenNames from '../../Helpers/ScreenNames';


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    zIndex: 100
                },

                drawerPosition: 'right'
            }}
            initialRouteName={ScreenNames.Dashboard}>
            <Drawer.Screen name="Dashboard" component={Dashboard} />

        </Drawer.Navigator>

    );
};
export default DrawerNavigator;