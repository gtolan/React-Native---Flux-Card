import React from 'react';
import {StyleSheet,Modal,Image, TouchableOpacity, View, Text, SafeAreaView, FlatList, Button, ScrollView} from 'react-native';


import ModalHalfPage from './ModalHalfPage';

  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.accountBtnContainer}>
             <View style={styles.accountBalanceChip}>
                <Text>0.00</Text>
            </View>
            <View style={styles.btn}>
                {/* <Button style={styles.btn} title="X"/> */}
                <TouchableOpacity onPress={()=> console.log('removed')} color="red" style={{...styles.buttonContainer},{...styles.FacebookStyle}} activeOpacity={0.5}>
                            <Image
                            source={require('../assets/icon.png')}
                            style={styles.ImageIconStyle}
                            />
                            
            </TouchableOpacity>
            </View>
            
        </View>
      </View>
    );
  }
  

    




const CurrentAccounts = props => {

    const accountList = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        accountTitle:"Gym",
        accountBalance:0,
        accountLimit:500,
        cardNumber:null
    },
    {   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        accountTitle:"Food",
        accountBalance:0,
        accountLimit:500,
        cardNumber:null
    },
    {   id: '58694a0f-3da1-471f-bd96-145571e29d72',
        accountTitle:"Hotel Booking",
        accountBalance:0,
        accountLimit:500,
        cardNumber:null
    },
    {   id: '58694a0f-ewrwer1-471f-bd96-145571e29d72',
        accountTitle:"Fuel ",
        accountBalance:0,
        accountLimit:500,
        cardNumber:null
}]


    return (
        <View style={styles.container}>
        <ScrollView  >
            <View style={styles.accountsTitleContainer} >
                <Text style={styles.accountsTitle}>Title</Text>
                <View style={styles.accountBtnContainer}>
                    <Text style={styles.accountsBalance}>Balance</Text>
                    <Text style={styles.accountsRemove}>Remove</Text>
                </View>
            </View>
           
            <FlatList
            data={accountList}
            renderItem={({ item }) => <Item title={item.accountTitle} />}
            keyExtractor={item => item.id}
            />
            {/* <ModalHalfPage visible={true} transparent={true} animation={"slide"} >
                <View style={styles.card}>
                     <Text style={styles.cardText}>Modal</Text>
                </View>
            </ModalHalfPage> */}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
        flexDirection:'row',
        height:'auto',
        backgroundColor:'white',
        paddingVertical:12
    },
    accountsTitle:{
        color:'black',
        backgroundColor:'lightgrey',
        width:'65%',
        paddingLeft:2,
        fontSize:20,
        fontWeight:'100',
        marginLeft:'1%',
        
    },
      item: {
        width:'100%',
        backgroundColor: 'lightgrey',
        padding: 12,
        marginVertical: 2,
        flexDirection:'row',
        borderWidth:1,
        borderTopColor:'#1c3a57',
        borderBottomColor:'#1c3a57'
      },
      title: {
        fontSize: 18,
        flex:2,
        lineHeight:32,
        color:'black'
      },
      accountTitle:{
          color:'white',
          flex:8
      },
      accountsBalance:{
        color:'black',
        flex:1,
        fontSize:14,
        lineHeight:26
    },
    accountsRemove:{
        color:'black',
        flex:1,
        fontSize:14,
        lineHeight:26
    },
      accountsTitleContainer:{
          flexDirection:'row',
          width:'98%',
          backgroundColor:'lightgrey',
            marginHorizontal:'1%',
          flex:1,
          borderRadius:4,
          marginBottom: 7,
      },
      accountBtnContainer:{
          flex:1,
          flexDirection:'row',
          width:'100%'
         
      },
      btn:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'dodgerblue',
        borderRadius:50,
        fontSize:30,
        marginHorizontal:3
      },
      accountBalanceChip:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'white',
        borderRadius:5,
        fontSize:30,
        marginHorizontal:3
      },
      card:{
        marginTop:'30%',
        maxHeight:'60%',
        width:'90%',
        height:'60%',
        flex: 1,
        marginLeft:'5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{width: 3,height: 3},
        shadowOpacity:.5,
        elevation:5
      },
      cardText:{
        flex: 1,
        flexDirection:'row',
        height:100,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
})

export default CurrentAccounts;