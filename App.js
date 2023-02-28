
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Navigation/AppNavigator'






const App = () => {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
