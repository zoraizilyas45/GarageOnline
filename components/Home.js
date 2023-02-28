

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,Button
} from 'react-native';

const Home = (props) =>
{
  return(
  <View>
    <Text style={{fontSize:60}}>Home Component {'\n'} {'\n'}
    {props.data} </Text>
  </View>
  )
}




export default Home;
