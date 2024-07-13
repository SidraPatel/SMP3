import React from 'react';
import { StyleSheet,Text, Touchable, TouchableOpacity, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { FontSize, hp } from '../utils/Dimension';
import { Colors } from '../styles/StyleGuide';
Colors

const Splash = () => {
    const btnlogin={
        ...btnlogin,
        backgroundColor:Colors.pastelpurple
    }
    return (
        <View style={styles.container}>
        <BackgroundImage source={require('../assets/Image/bg.png')}>
<View style={styles.btncontainer}>
    <TouchableOpacity style={styles.btnSignin}>
       <Text style={styles.btntxt}>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{...styles.btnSignin, ...btnlogin}}>
    <Text style={styles.btntxt}>Login</Text>
    </TouchableOpacity>
</View>
           </BackgroundImage>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },

    btncontainer:{
        height:hp(30),
        width:'100%',
     //   backgroundColor:'pink',
        bottom:0,
        position:'absolute'
    },

    btnSignin:{
        width:'90%',
        height:hp(8),
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'#FFB22C',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%'
    },

    btntxt:{
        color:Colors.white,
        fontSize:FontSize(15),
        fontWeight:'bold'
    }
})

export default Splash;
