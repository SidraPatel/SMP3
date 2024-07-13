import React from 'react';
import { StyleSheet,Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles/StyleGuide';
import { hp } from '../utils/Dimension';



const Cardslocation = ({ text, icon, description,color, backgroundColor,image ,children, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.cardbox, { backgroundColor: backgroundColor }]}
           onPress={onPress}>
          
          {image && <Image style={styles.image} source={image} />}
            
          {children} 
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardbox: {
        height: hp(13),
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
       marginTop:'5%',
        borderRadius: 10,
       // elevation:15
    },

    txt:{
        color:Colors.grey,
      //  fontWeight:'bold',
        textAlign:'center',
        bottom:'10%'
     
    },

    image: {
        height: hp(8),
        width: '55%',
        marginBottom: '10%'
    }

 


});

export default Cardslocation;
