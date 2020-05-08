import React from 'react';
import {StyleSheet,Modal} from 'react-native';




const ModalHalfPage = props => {

    const {transparent,visible,animationType} = props;

    return (
 
    <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
      >
          {props.children}
      </Modal>

    )
}

const styles = StyleSheet.create({

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
      }
})

export default ModalHalfPage;