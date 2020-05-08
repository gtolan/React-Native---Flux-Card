import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import { StyleSheet, Text, View, Animated, Easing, Modal } from 'react-native';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
// import CurrentAccounts from './components/CurrentAccounts';
// import AddNewAccount from './components/AddNewAccount';






export default function App({navigation}) {

  
  console.log(NavigationContainer, "nav")
  
  return (
   
    // <View style={styles.container}>
   
      <NavigationContainer onStateChange={state => console.log('New state is', state)}> 
   
      <Stack.Navigator 
        initialRouteName={Home} 
        headerMode="none">
      <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen mode="modal"  name="Login" component={Login} />
        
      </Stack.Navigator>
      </NavigationContainer> 
    // {/* </NavigationContainer> */}
    // {/* <Home/> */}
    //   {/* <Home isVisible={isVisible} toggleModal={toggleModal} /> */}
    // // </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
