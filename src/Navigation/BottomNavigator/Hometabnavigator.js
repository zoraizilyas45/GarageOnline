// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
// import ProfileEditScreen from '../../screens/ProfileEditScreen/screen/ProfileEditScreen';
// // import ProfileEditScreen from '../../Screens/ProfileEditScreen/screen/ProfileEditScreen';

// // import Settings from '../../Screens/Settings';

// import ScreenNames from '../../Helpers/ScreenNames';






// const Tab = createBottomTabNavigator();
// const HomeTabNavigator = () => {
//     const MyTabBar = ({ state, descriptors, navigation }) => {
//         let backColor = '#BDEFDE'
//         if (state.index === 1) {
//             backColor = '#D7F79A'
//         }
//         else if (state.index === 2) {
//             backColor = '#DDCBE5'
//         }
//         else if (state.index === 3) {
//             backColor = '#DDCBE5'
//         }

//         return (
//             <View style={{ backgroundColor: '#FFA500' }} >
//                 <View style={{ flexDirection: 'row', height: 70, backgroundColor: 'white', padding: 20, overflow: 'hidden', shadowColor: '#FFA500', shadowRadius: 2, }}>
//                     {state.routes.map((route, index) => {
//                         const { options } = descriptors[route.key];
//                         const label =
//                             options.tabBarLabel !== undefined
//                                 ? options.tabBarLabel
//                                 : options.title !== undefined
//                                     ? options.title
//                                     : route.name;

//                         const isFocused = state.index === index;

//                         const onPress = () => {
//                             const event = navigation.emit({
//                                 type: 'tabPress',
//                                 target: route.key,
//                             });

//                             if (!isFocused && !event.defaultPrevented) {
//                                 navigation.navigate(route.name);
//                             }
//                         };

//                         const onLongPress = () => {
//                             navigation.emit({
//                                 type: 'tabLongPress',
//                                 target: route.key,
//                             });
//                         };

//                         return (
//                             <TouchableOpacity
//                                 accessibilityRole="button"
//                                 accessibilityState={isFocused ? { selected: true } : {}}
//                                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                                 testID={options.tabBarTestID}
//                                 onPress={onPress}
//                                 onLongPress={onLongPress}
//                                 style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//                             >
//                                 {label === ScreenNames.DrawerNavigator && <Icon name="home" color={'#FFA500'} size={25} />}


//                                 {label === ScreenNames.Profile && <Icon name="person" color={'#FFA500'} size={25} />}
//                                 {console.log('> 00', label)}

//                                 <Text style={{ color: isFocused ? '#FFA500' : '#222' }}>
//                                     {label === ScreenNames.DrawerNavigator ? "Dashboard" : label}
//                                 </Text>


//                             </TouchableOpacity>
//                         );
//                     })}

//                 </View>
//             </View >
//         );
//     }

//     return (

//         <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}
//             screenOptions={{
//                 headerShown: false,
//             }}
//             initialRouteName={ScreenNames.DrawerNavigator}
//         >
//             <Tab.Screen
//                 name={ScreenNames.DrawerNavigator}
//                 component={DrawerNavigation}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name="Home" color={color} size={size} />
//                     ),
//                 }}
//             />



//             <Tab.Screen
//                 name='Profile'
//                 component={ProfileEditScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name="person" color={color} size={size} />
//                     ),
//                 }}
//             />

//         </Tab.Navigator>

//     );
// }
// export default HomeTabNavigator;
