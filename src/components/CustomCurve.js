// CustomBottomBar.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const CustomCurve = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <Svg
        width="100%"
        height="100"
        viewBox="0 0 1440 150"
        style={styles.curveContainer}
      >
        <Path
          fill="#6200ee"
          d="M0,96L48,96C96,96,192,96,288,80C384,64,480,32,576,32C672,32,768,64,864,85.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V96Z"
        />
      </Svg>
      <BottomTabBar {...{ state, descriptors, navigation }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  curveContainer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default CustomCurve;
