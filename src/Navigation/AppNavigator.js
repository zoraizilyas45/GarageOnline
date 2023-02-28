import React from 'react';
import ScreenNames from '../Helpers/ScreenNames';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import DrawerNavigator from './DrawerNavigation/DrawerNavigation';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/screen/Forgetscreen';
import Confirmation from '../screens/Confirmation';
import CityLists from '../screens/CityLists';
import FindMore from '../screens/FindMore';
import Shoper from '../screens/Shoper';
import Settings from '../screens/Settings';

import ProfileEditScreen from '../screens/ProfileEditScreen/screen/ProfileEditScreen';
import HomeTabNavigator from './BottomNavigator/Hometabnavigator';
import Arslan from '../screens/Arslan';





const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    //const Tab = createBottomTabNavigator();
    return (


        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}

            initialRouteName={ScreenNames.SignIn}
        >
            <Stack.Screen name={ScreenNames.SignIn} component={SignIn} />
            <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
            <Stack.Screen name={ScreenNames.ForgetPasswordScreen} component={ForgetPasswordScreen} />

            <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
            <Stack.Screen name={ScreenNames.FindMore} component={FindMore} />
            <Stack.Screen name={ScreenNames.Shoper} component={Shoper} />
            <Stack.Screen name={ScreenNames.Settings} component={Settings} />

            <Stack.Screen name={ScreenNames.Confirmation} component={Confirmation} />

            <Stack.Screen name={ScreenNames.Arslan} component={Arslan} />


        </Stack.Navigator>

    );

}
export default AppNavigator