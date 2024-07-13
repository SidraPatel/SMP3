import React from 'react';
import { View, StyleSheet } from 'react-native';

const Bottombar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.circle}></View>
      <View style={styles.container3}></View>
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:55,
        marginTop:'10%',
        backgroundColor:'grey',
        flexDirection:'row'
    },
  container2: {
    width: '50%',
    height: 40,
   marginTop:'2%',
    backgroundColor: 'blue',
    borderTopRightRadius:60,

  },
  container3: {
    width: '50%',
    height: 40,
    marginTop:'2%',
    backgroundColor: 'blue',
    borderTopLeftRadius:60,

  },
  circle:{
    width:'20%',
    height:50,
    backgroundColor:'white',
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    marginTop:'1%',
    left:0,
    right:0
  }
});

export default Bottombar;
