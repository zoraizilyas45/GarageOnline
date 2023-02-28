import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames';

const CityLists = ({ navigation }) => {
    return (
        <View style={{ marginLeft: 10, }}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.HomeTabNavigator)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />

                </TouchableOpacity>
            </View>

            <View >

                <TouchableOpacity

                    style={{ width: '98%', height: 120, borderWidth: 0, borderRadius: 10, marginTop: 0, justifyContent: 'center', backgroundColor: '#D3D3D3', }}
                    onPress={() => {
                        navigation.navigate(ScreenNames.ListCity)
                    }} >

                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginLeft: 30, marginTop: -20, }} > Travel Around Cities</Text>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: '#999', }} >Pakistan</Text>
                    <Icon name="place" size={30} style={{ color: '#FFA500', width: '25%', height: 50, borderRadius: 10, marginTop: -35, justifyContent: 'center', marginLeft: 110, }} />
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 12, color: '#999', marginLeft: 80, marginTop: -7, }} >Start Discovering more Cities.</Text>

                    <Image style={{
                        marginTop: -100,
                        borderRadius: 15,
                        marginLeft: 10,

                        height: 80,
                        width: 80
                    }} source={require('../Assets/Local.jpg')}


                    />
                </TouchableOpacity>

            </View>
            <View >

                <TouchableOpacity

                    style={{ width: '98%', height: 120, borderWidth: 0, borderRadius: 10, marginTop: 20, justifyContent: 'center', backgroundColor: '#D3D3D3', }}
                    onPress={() => {
                        navigation.navigate(ScreenNames.ListArea)
                    }} >

                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginLeft: 30, marginTop: -20, }} > Travel In City</Text>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: '#999', }} >Lahore</Text>
                    <Icon name="place" size={30} style={{ color: '#FFA500', width: '25%', height: 50, borderRadius: 10, marginTop: -35, justifyContent: 'center', marginLeft: 110, }} />
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 12, color: '#999', marginLeft: 80, marginTop: -7, }} >Discover Places in Lahore.</Text>

                    <Image style={{
                        marginTop: -100,
                        borderRadius: 15,
                        marginLeft: 10,

                        height: 80,
                        width: 80
                    }} source={require('../Assets/city.jpg')}


                    />
                </TouchableOpacity>

            </View>
            <View >

                <TouchableOpacity

                    style={{ width: '98%', height: 120, borderWidth: 0, borderRadius: 10, marginTop: 20, justifyContent: 'center', backgroundColor: '#D3D3D3', }}
                    onPress={() => {
                        navigation.navigate(ScreenNames.Countries)
                    }} >

                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginLeft: 30, marginTop: -20, }} > Deliver Something</Text>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: '#999', }} >Pakistan</Text>
                    <Icon name="place" size={30} style={{ color: '#FFA500', width: '25%', height: 50, borderRadius: 10, marginTop: -35, justifyContent: 'center', marginLeft: 110, }} />
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 12, color: '#999', marginLeft: 80, marginTop: -7, }} >Start Delivering Items.</Text>

                    <Image style={{
                        marginTop: -100,
                        borderRadius: 15,
                        marginLeft: 10,

                        height: 80,
                        width: 80
                    }} source={require('../Assets/Deliver.jpg')}


                    />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default CityLists