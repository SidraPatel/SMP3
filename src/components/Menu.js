import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '@/styles/StyleGuide';
import { FontSize } from '@/utils/Dimension';
const Menu = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity activeOpacity={0.7}
        style={[styles.tab, activeTab === 'Lodge Complain' && styles.activeTab]}
        onPress={() => setActiveTab('Lodge Complain')}>
       
        <Text style={[styles.tabText, activeTab === 'Lodge Complain' && { color: 'white' }]}>Upcoming News</Text>
      </TouchableOpacity>


      <TouchableOpacity activeOpacity={0.7}
        style={[styles.tab, activeTab === 'Resolved Complain' && styles.activeTab]}
        onPress={() => setActiveTab('Resolved Complain')}>
       
        <Text style={[styles.tabText, activeTab === 'Resolved Complain' && { color: 'white' }]}>Details</Text>
      </TouchableOpacity>


     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#561dc5', 
  //  borderTopWidth: 1,
    borderTopColor: '#DDD',
    bottom:0,
    position:'absolute'
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    color:'pink'
  },

  activeTab:{
    backgroundColor:'#561dc5',
    borderBottomWidth:3,
    borderBottomColor:Colors.white,
    color:'white'
  },

  tabText: {
    color: 'grey', 
    fontSize: FontSize(13),
    marginTop: 5, 
    fontWeight:'bold'
  },
});

export default Menu;
