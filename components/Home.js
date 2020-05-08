import React, {useState} from 'react';
import {StyleSheet,View,Text,ScrollView, Button, Animated, Easing} from 'react-native';
import CurrentAccounts from './CurrentAccounts';
import AddNewAccount from './AddNewAccount';
import Navbar from './Navbar';
const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
    console.log(props.visibility, "Fade Vis")
    React.useEffect(() => {
      if(props.visibility){
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            easing: Easing.back(),
            duration: 1000,
          }
        ).start();
      }else {
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            easing: Easing.back(),
            duration: 1000,
          }
        ).start();
      }
      
    }, [props.visibility])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,
          transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }



const Home = props => {
    const [isVisible, setModalVisibility] = useState(false)

    const toggleModal = () => {
      // showAccounts()
      let vis = !isVisible;
      console.log(vis, "VIS")
      setModalVisibility(vis);
     
    }
    let addCardBtn;

    if(isVisible){
      addCardBtn =   <Button onPress={toggleModal} style={styles.addCardBtn} title="Add a New Card" />
    }

    return (
        <View style={styles.homeScreen}>
                 <Navbar navigation={props.navigation} />
            <View style={styles.summary}>
            <Text>Welcome Account Summary</Text>
            </View>
            
        <ScrollView style={styles.container}>
            {/* CurrentAccounts */}
            <View style={styles.accountSection}>
                <FadeInView visibility={isVisible} style={{height:0, width: '100%', backgroundColor: 'transparent'}}>
                    <AddNewAccount visibility={isVisible} toggleModal={toggleModal} />
                </FadeInView>
                <CurrentAccounts/>
            </View>
            <View style={styles.btnSection}>
               {addCardBtn}
           </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        padding:0,
        backgroundColor:'#e2f3f5'
    
    },
    homeScreen:{
        flex:1,
        width:'100%',
        padding:0,
        backgroundColor:'#e2f3f5' 
    },
    addCardBtn:{
        width:'100%'
    },
    accountSection:{
        height:'auto',
        width:'100%'
    },
    btnSection:{
        height:'10%',
        width:'100%',
        padding:20,
    },
    summary:{
        alignItems:'center',
        justifyContent:'center',
        height:250,
        width:'90%',
        marginTop:10,
        marginLeft:'5%',
        backgroundColor:'white'
    }
})

export default Home;