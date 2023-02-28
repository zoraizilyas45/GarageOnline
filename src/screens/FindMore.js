import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames';
//import CityNames from './CityNames';
import SearchResultsScreen from './SearchResults';


const FindMore = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.Dashboard)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />

                </TouchableOpacity>
            </View>
            <View>
                <SearchResultsScreen />
            </View>
        </View>
    )
}

export default FindMore