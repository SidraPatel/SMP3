import React, { cloneElement } from 'react';
import { StyleSheet,View,Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles/StyleGuide';
import { hp, FontSize } from '../utils/Dimension';




const Cards3 = ({ text, icon, description,color,text2,text3,text4, text5, backgroundColor,image ,image2,children, onPress }) => {
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

          <View style={styles.txt3}>
          <Text style={styles.txt}>{text3}</Text>
          
          </View>
<View style={styles.cardimg2}>
<Text style={styles.txtt}>{text4}</Text>
<Text style={styles.txt2}>{text5}</Text>
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
        marginTop:'5%',
        elevation:15,
        flexDirection:'row'
    },

    txt:{
        color:Colors.black,
       fontWeight:'bold',
        marginLeft:'10%',
        fontSize:FontSize(15),
       
    },
    txtt:{
        color:Colors.white,
       fontWeight:'bold',
        marginLeft:'10%',
        fontSize:FontSize(15),
       
    },

    txt2:{
        color:Colors.darkGrey,
        marginLeft:'10%',
        fontWeight:'bold'

    },

    cardtxt:{
        height:hp(10),
//backgroundColor:'pink',
        width:"40%",
        justifyContent:'center'
    
    },
txt3:{
    height:hp(10),
    width:'20%',
   // backgroundColor:Colors.brown,
    justifyContent:'center',
    alignItems:'center'
},
    image: {
        height: hp(7),
        width: '50%',
        marginBottom: '10%',
        
    },

  

    cardimg:{
        height:hp(10),
        width:'20%',
       // backgroundColor:Colors.pasteldarkgreen,
        alignItems:'center',
        justifyContent:'center'
  
    },
  
    cardimg2:{
        height:hp(10),
        width:'20%',
        backgroundColor:'tomato',
        alignItems:'center',
        justifyContent:'center',
       borderTopRightRadius:5,
       borderBottomRightRadius:5
       

  
    },



 


});

export default Cards3;
