import React from 'react';
import { StyleSheet,View,Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles/StyleGuide';
import { hp, FontSize } from '../utils/Dimension';




const Cardsearch = ({ text, icon, description,color,text2, backgroundColor,image ,image2,children, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.cardbox, { backgroundColor: backgroundColor }]}
           onPress={onPress}>
          <View style={styles.cardimg}>
          {image && <Image style={styles.image} source={image} />}
          </View>
          <View style={styles.cardtxt}>
          <Text style={styles.txt}>{text}</Text>
          <Text style={styles.txt2}>{text2}</Text>
          </View>

          <View style={styles.cardimg2}>
          {image2 && <Image style={styles.image} source={image2} />}
          </View>
            
          {children} 
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardbox: {
        height: hp(10),
        width: '100%',
      //  justifyContent: 'center',
      //  alignItems: 'center',
        borderRadius: 10,
        elevation:15,
        flexDirection:'row'
    },

    txt:{
        color:Colors.black,
       fontWeight:'bold',
        marginLeft:'10%',
        fontSize:FontSize(15),
       
    },

    txt2:{
        color:'#1E5128',
        marginLeft:'10%',
        fontWeight:'bold'

    },

    cardtxt:{
        height:hp(10),
     //   backgroundColor:'pink',
        width:"40%",
        justifyContent:'center'
    
    },

    image: {
        height: hp(8),
        width: '80%',
        marginBottom: '10%'
    },

  

    cardimg:{
        height:hp(8),
        width:'20%',
        backgroundColor:Colors.pastelbrown,
        alignItems:'center',
        marginLeft:'5%',
        marginTop:'2%',
        borderRadius:10

  
    },
    cardimg2:{
        height:hp(8),
        width:'25%',
        backgroundColor:Colors.white,
        alignItems:'center',
        marginLeft:'5%',
        marginTop:'2%',
        borderRadius:10

  
    },



 


});

export default Cardsearch;
