import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

const Navbar = props => {

    console.log('navprop', props.navigation)

    return (
        <View style={styles.navbar}>
            <Button
      title=""
      onPress={() => props.navigation.navigate('Login')}
    />
            <Text style={styles.navbarTitle}>Flux Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        padding:40,
        height:90,
        backgroundColor:'#2d6cdf',
        width:'100%',
        alignItems:'center',
        alignSelf:'center',
        flexDirection:'row'
       
    },
    navbarTitle:{
        fontSize:20,
        color:'white'
    }
});

export default Navbar;