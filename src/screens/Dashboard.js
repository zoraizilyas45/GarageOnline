import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenNames from '../Helpers/ScreenNames'
//import { getOrdersRideAPI } from '../api/Api';
import { getOrdersRideAPI } from '../api/Api'
import Search from './Search';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getUserData } from '../Helpers/ApiCalls';
import { SearchBar } from 'react-native-elements';
import colors from '../Helpers/colors';

const Dashboard = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [picUrl, setPicUrl] = useState('')
  const [fuelOrdersList, setRideOrdersList] = useState([])

  useEffect(() => {
    getRideOrderApi()
  }, [])
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getUserDataAPI()
    });

    return unsubscribe;
  }, [navigation]);

  const getRideOrderApi = async () => {
    setIsLoading(true)
    await getUserDataAPI()
    setIsLoading(false)
  }
  const getUserDataAPI = async () => {

    let user = await getUserData()
    user = user._data
    console.log('>>> user >>', user);
    setUserName(user.name)
    setPicUrl(user.profileUrl)
    setTypeUser(user.type)
    setUserObj(user)


  }


  console.log('>>Search', Search)

  useEffect(() => {
    getorders()
  }, [])

  const getorders = async () => {
    let orders = await getOrdersRideAPI()
    // console.log('>>> orders ', orders);
  }
  const [SerachResult, SetSearchResult] = useState([])
  const [SerachText, SetSearchText] = useState('')
  const onChangeFunc = (text) => {

    // let result = Search.filter(item => item.name.includes(text));
    SetSearchText(text)
    let result = Search.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key])
          .toLowerCase()
          .includes(text.toLowerCase());
      });
    });


    // var result = Search.filter(function (o) {           // for each object o in the array bikeshops
    //     return o.name.indexOf(text) !== -1;
    // });
    console.log('>>> ', text, '>>> ', result);
    SetSearchResult(result)
  }
  return (

    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF', }}>
      <ScrollView>
        <View>
          <Image
            source={require('../Assets/Logo.png')}
            style={{
              marginLeft: 110,
              width: 120,
              height: 120,
              marginTop: 40,


            }}

          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', }} >
          <Text style={{ marginTop: 20, fontSize: 24, color: 'black', marginLeft: 15 }} >
            Welcome
          </Text>
        </View>
        <View style={{ justifyContent: 'center', }} >
          <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'center', color: 'black', }} >
            Mr. {userName}
          </Text>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 170, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              // navigation.navigate(ScreenNames.Atd)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../Assets/Atd.jpg')} />

          </TouchableOpacity>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 170, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              // navigation.navigate(ScreenNames.Atd)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../Assets/Atd.jpg')} />

          </TouchableOpacity>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 160, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              // navigation.navigate(ScreenNames.Atd)
            }} >
            <Image style={{ marginTop: 0, height: 170, width: 320, resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../Assets/Atd.jpg')} />

          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={{ width: '99%', height: 60, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', backgroundColor: '#FFA500', }}
          onPress={() => {
            navigation.navigate(ScreenNames.FindMore)
          }} >
          <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Find More</Text>
        </TouchableOpacity>



      </ScrollView>

    </View >




  )
}

export default Dashboard