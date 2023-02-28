import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView, PermissionsAndroid } from 'react-native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames';
import { showToast } from '../Helpers/Utils';
import Geolocation from '@react-native-community/geolocation';
import CustomActivityIndicator from '../Helpers/CustomActivityIndicator';
import { OrderRideAPI } from '../api/Api'
import { getUserData } from '../Helpers/ApiCalls';
const Confirmation = ({ navigation, route }) => {
    const { item } = route.params
    // console.log('>>>> 11 ', item);

    const [
        currentLongitude,
        setCurrentLongitude
    ] = useState('...');
    const [
        currentLatitude,
        setCurrentLatitude
    ] = useState('...');
    const [
        locationStatus,
        setLocationStatus
    ] = useState('');

    var watchID

    const [address, setAddress] = useState('')
    const [userObject, setUserObject] = useState({})
    const [additionalDetails, setAdditionalDetails] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getUserDataAPI()
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);

    const getUserDataAPI = async () => {
        setIsLoading(true)
        let userData = await getUserData()
        userData = userData._data
        setAddress(userData.address ? userData.address : '')
        setUserObject(userData)
        setIsLoading(false)

        // console.log('>>>>  userData ', userData);
    }

    const requestLocationPermission = async () => {

        if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
        } else {
            console.log('>> 2',)
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Access Required',
                        message: 'This App needs to Access your location',

                    },
                );
                console.log('>> 3',)
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //To Check, If Permission is granted
                    console.log('>> 4',)
                    getOneTimeLocation();
                    subscribeLocationLocation();
                } else {
                    console.log('>> 5',)
                    setLocationStatus('Permission Denied');
                }
            } catch (err) {
                console.log('>> 6',)
                console.warn(err);
            }
        }
    };
    const getOneTimeLocation = () => {
        console.log('>> 7',)
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                console.log('>> 8',)
                setLocationStatus('You are Here');

                //getting the Longitude from the location json
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);

                //getting the Latitude from the location json
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);

                //Setting Longitude state
                setCurrentLongitude(currentLongitude);

                //Setting Longitude state
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                console.log('>> 9', error)
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                //Will give you the location on location change

                setLocationStatus('You are Here');
                console.log(position);

                //getting the Longitude from the location json        
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);

                //getting the Latitude from the location json
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);

                //Setting Longitude state
                setCurrentLongitude(currentLongitude);

                //Setting Latitude state
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };
    console.log('>>> currentLongitude11111 ', currentLongitude, currentLatitude);
    // const user = { name: 'Zoraiz', phone: 777777 }
    return (
        <View>
            <CustomActivityIndicator
                isLoading={isLoading}
            />
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(ScreenNames.CityLists)
                    }}>
                        <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />

                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, marginTop: 20, }}>
                    <Image style={{ marginTop: 0, height: 230, width: 340, marginRight: 30, borderRadius: 15, }} source={require('../Assets/confirm.jpg')} />
                </View>
                <View>
                    <TextInput
                        placeholder='Add Address'
                        value={address}
                        style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 70, paddingStart: 20 }}
                    />

                    <Text style={{ textAlign: 'center', padding: 5, marginTop: 20, backgroundColor: '#FFA500' }} >OR</Text>
                    <TouchableOpacity

                        onPress={() => {
                            console.log('>> 1',)
                            requestLocationPermission()
                        }}
                        style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 20, backgroundColor: 'lightblue', marginLeft: 4, }}
                    >
                        <Text style={{ textAlign: 'center', justifyContent: 'center', paddingVertical: 10 }} >
                            Click to Fetch Location
                        </Text>

                    </TouchableOpacity>

                    {

                        currentLatitude !== '...' && currentLongitude !== '...' ?
                            <Text
                                style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, paddingVertical: 5 }}
                            >
                                {currentLatitude} , {currentLongitude}
                            </Text>
                            :
                            null

                    }

                    <TouchableOpacity

                        style={{ width: '98%', height: 70, borderWidth: 0, borderRadius: 10, marginTop: 30, justifyContent: 'center', borderBottomColor: 'blue', backgroundColor: '#FFA500', marginLeft: 4, }}

                        onPress={async () => {
                            // navigation.navigate(ScreenNames.OrderRide)
                            console.log('--->>>12121212', currentLatitude, currentLongitude)
                            let userTemp = { ...userObject, lat: currentLatitude, long: currentLongitude }
                            let data = { userInfo: userTemp, plan: item }
                            console.log('=>>>', data)
                            OrderRideAPI(data).then(() => {
                                showToast('Confirmed Successfully!')
                                navigation.navigate(ScreenNames.Dashboard)
                                // console.log('Hi success');
                            })
                            console.log('==>>>>', userTemp)

                        }} >

                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'white', marginLeft: 5, marginTop: 5, }} > Confirm </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Confirmation