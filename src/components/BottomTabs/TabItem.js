
import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { hp, ScreenWidth } from '../../utils/Dimension';
const LABEL_WIDTH = ScreenWidth / 4;
const TabItem = ({label, index, activeIndex, onTabPress}) => {
  const isActiveIndexColor =
    activeIndex === index + 1 ? 'green' : 'rgba(30, 31, 75, 0.5)';
  const {colors} = useTheme(); 
  const styles = Styles(colors);
  return (
    <Pressable
      onPress={onTabPress}
      style={[
        label == 'Filter' && { marginLeft: 3.5,marginTop:hp(-4)},
      ]}>
      <View
        testID={`tab${label}`}
        //Increasing touchable Area
        style={
          label != 'Filter' && {
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }
        }
        hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}>
        {label === 'Home' ? (
          <Feather name="home" size={22} color={isActiveIndexColor} />
        ) : label === 'Filter' ? (
          <View style={[styles.exchangeContainer]}>
            <Text style={styles.sellText}>Filter</Text>
          </View>
        ) : (
          label === 'Setting' && (
            <Octicons name="person" size={22} color={isActiveIndexColor} />
          )
        )}
      </View>
      <Text
        style={[
          styles.label,
          activeIndex === index + 1 && {color: 'green'},
        ]}>
        {label === 'Filter' ? '' : label}
      </Text>
    </Pressable>
  );
};

export default React.memo(TabItem);

const Styles = () =>
  StyleSheet.create({
    labelContainer: {
      position: 'absolute',
      alignItems: 'center',
      width: LABEL_WIDTH,
    },
    label: {
      fontSize: 12,
      // color: colors.border,
    },
    exchangeContainer: {
      backgroundColor: 'blue',
      borderRadius: 100,
      height: 55,
      width: 55,
      marginLeft: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sellText: {
      color: 'white',
      fontSize: 18,
      // fontFamily: fonts.semiBold,
    },
  });
