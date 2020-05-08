import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

const Login = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>Login</Text>
            <Button
      title="Home"
      onPress={() => props.navigation.navigate('Home')}
    />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        padding:40,
        height:'100%',
        backgroundColor:'#2d6cdf',
        width:'100%',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10
       
    },
    navbarTitle:{
        fontSize:20,
        color:'white'
    }
});

export default Login;