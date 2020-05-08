import React, {useState} from 'react';
import {Platform, ScrollView,Picker, Image,TouchableOpacity, TextInput,ImageBackground, StyleSheet, View, Text, Modal, Button, Animated} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DateTimePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';




const FormLabel = props => {
    return (
        <View style={{...props.containerRow},{...props.containerRowLeft}}>
            {props.children}
        </View>
    )
}



const AddNewAccount = props => {
    console.log(props, "add acc props")
    const visibility = props.visibility;
    const {modalOpen, modalHidden} = styles;
    const [mode, setMode] = useState('date');
    const [accountName, setAccountName] = useState('');
    const [currentCardNumber, setCurrentCardNumber] = useState('8852 3232 3423 6634')
    const [accountLimit, setAccountLimit] = useState(0);
    const [date, setDate] = useState(new Date(2020, 3, 20))
    const [show, setShow] = useState(false);


    const accountNameHandler = enteredText => {
        setAccountName(enteredText)
    }


    const cardEpireyDateFormated = (date.getMonth() + 1) + "/" + date.getFullYear().toString().slice(2,4);;

    const getCardNumber = () => {
        let cardNum = "";

        for(let i = 0;i < 4;i++){
        let randomNum = Math.floor((Math.random() * ((9990 - 1000) + 1) + 1000));
        console.log(randomNum, "randomNum")
        
        cardNum += " " + randomNum;
        }
        console.log(cardNum);
        // setCurrentCardNumber(cardNum)
        return cardNum;
    }

    const generateNewCardHandler = () => {
        let newCardNumber = getCardNumber();
        setCurrentCardNumber(newCardNumber)
    }

    const accountLimitHandler = () => {
        setAccountLimit(accountLimit)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
      const formatDate = (date.getMonth() + 1) + "/" + date.getFullYear();
      
    
      const showTimepicker = () => {
        showMode('time');
      };
      console.log(date.getMonth(), date.getFullYear(),"date")
    const language = "en-EN";
    return (
     
        <View  style={visibility ? {...styles.modalContainer,...modalOpen}: {...styles.modalContainer,...modalHidden}}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add a New Card</Text>
            </View>



            {/* Card */}
            <ImageBackground source={require('../assets/images/creditcard.png')} style={styles.imgBackground}>
                <View style={styles.numberContainer}>
                    <Text  style={styles.cardNumber}>{currentCardNumber}</Text>
                </View>
                <View style={styles.expireyContainer}>
                    <Text  style={styles.cardExpirey}>{cardEpireyDateFormated}</Text>
                </View>
            </ImageBackground>

            {/* Form */}
            <View style={styles.container}>
                <View style={styles.form}>

                    <View style={styles.containerRow}>
                        <TouchableOpacity onPress={generateNewCardHandler} color="red" style={{...styles.buttonContainer},{...styles.FacebookStyle}} activeOpacity={0.5}>
                            <Image
                            source={require('../assets/icon.png')}
                            style={styles.ImageIconStyle}
                            />
                            <View style={styles.SeparatorLine} />
                            <Text style={styles.TextStyle}> Generate a New Card </Text>
                        </TouchableOpacity>
                    </View>

                    <FormLabel containerRow={styles.containerRow} containerRowLeft={styles.containerRowLeft}>
                        <Text style={styles.label}>Account Title:</Text>
                    </FormLabel>
                    <View style={styles.containerRow}>
                            <TextInput autoFocus={true}
                                    style={{width:'100%',height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft:10, borderRadius:4}}
                                    onChangeText={accountNameHandler}
                                    value={accountName}
                                    placeholder="Account Title"
                            />
                    </View>

                    <FormLabel containerRow={styles.containerRow} containerRowLeft={styles.containerRowLeft}>
                        <Text style={styles.label}>Card Limit:</Text>
                        <Text style={styles.label}>Card Expirey:</Text>
                    </FormLabel>
                    <View style={styles.containerRow}>
                        <View style={styles.halfButtonContainer}>
                                    <TextInput
                                        style={{width:'100%',height: 40, borderColor: 'gray', borderWidth: 1,paddingLeft:10, borderRadius:4}}
                                        onChangeText={accountLimitHandler}
                                        value={accountLimit}
                                        keyboardType="numeric"
                                        placeholder="ex. 500"
                                    />
                        </View>
                        <View style={styles.halfButtonContainer}>
                                    {/* <TextInput
                                        style={{width:'100%',height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft:10, borderRadius:4}}
                                        onChangeText={accountNameHandler}
                                        value={accountName}
                                        placeholder="07/2022"
                                    /> */}
                                    {/* <Picker
                                        selectedValue={language}
                                        style={{height: 50, width: 100}}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({language: itemValue})
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                        </Picker> */}
                                        {/* <DatePicker
                                        date={date}
                                        onDateChange={setDate}
                                        /> */}
                                       <View>
      <View>
       
            <TouchableOpacity onPress={showDatepicker} color="white" activeOpacity={0.5} style={styles.datepickerInput}>
                                    <Text style={styles.datepickerInputText}>{formatDate}</Text>
            </TouchableOpacity>
      </View>
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
                                </View>
                    </View>



                    

                </View>
                

                

                
                <View style={styles.containerRow}>
                     <View style={styles.halfButtonContainer}>
                        <Button style={styles.button} onPress={props.toggleModal} color="#9e579d" title="Cancel" />
                    </View>
                    <View style={styles.halfButtonContainer}>
                        <Button style={styles.button} onPress={props.toggleModal} color="#3d5af1" title="Create" />
                    </View>
                </View>
            </View>
        {/* // </Modal> */}
      
        </View>

        
  
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        height:'auto',
        width:'95%',
        backgroundColor:'white',
        marginVertical:40,
        marginHorizontal:'2.5%',
        elevation:6,
        borderRadius:10
    },
    imgBackground:{
        // flexDirection:'row',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        width:'97.5%',
        marginLeft:'5%',
        height:220,
        padding:10
    },
    datepickerInput:{
        color:'black',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        paddingLeft:10,
        height:40,
        
    },
    datepickerInputText:{
        lineHeight:32
    },
    modal:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'transparent',
        height:'100%'

    },
    cardExpirey:{
        color:'white',
        backgroundColor:'black',
        width:'100%',
        height:20,
        fontSize:23,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        fontFamily:'monospace',
        fontSize:14,
        marginRight:45
    },

    cardNumber:{
        color:'white',
        backgroundColor:'black',
        // marginRight:20,
        width:'100%',
        height:35,
        fontSize:23,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        fontFamily:'monospace'
    },
    modalHidden:{
        opacity:0,
        height:0
    },
    label:{
        alignItems:'flex-end',
        width:'50%',
        paddingLeft:3
    },
    modalOpen:{
        opacity:1,
        height:'auto'
    },
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        backgroundColor:'transparent',
    },
    card:{
        width:'90%',
        height:270,
        backgroundColor: 'grey',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'5%',
        marginVertical:20,
        borderRadius:10

    },
    numberContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
        // paddingTop:120,
        marginTop:70
    },
    expireyContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
        marginTop:0,
        width:38,
        // backgroundColor:'red'
        
    },
    containerRow:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:20,
        paddingVertical:4
    },
    containerRowLeft:{
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-start',
        alignSelf:'flex-start',
        paddingHorizontal:20,
        paddingVertical:4
    },
    btnContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'green',
    },
    btn:{
        width:'100%'
    },
    halfButtonContainer:{
        // flexDirection:'row',
        width:'50%',
        // borderWidth:2,
        // borderColor:'green',
        justifyContent:'center',
        margin:0,
        padding:1
       
    },
    buttonContainer:{
        // flexDirection:'row',
        width:'100%',
        // borderWidth:2,
        // borderColor:'green',
        justifyContent:'center',
        // marginLeft:'1%'
       
    },
    button:{
        width:'100%'
    },
    title:{
        fontSize:25,
        marginVertical:10
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2d6cdf',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width:'100%',
        borderRadius: 5,
        margin: 0,
      },
      ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      TextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
      },
      SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      }
})

export default AddNewAccount;