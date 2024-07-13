import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue
} from 'react-native-reanimated';
import { interpolatePath } from 'react-native-redash';
import Svg, { Path } from 'react-native-svg';
import TabItem from './TabItem';
import usePath from './usePath';
// import {ScreenWidth, wp} from '@/utils/dimensions';
// import {white} from '@/config/colors';
import { ScreenWidth } from '../../utils/Dimension';
const AnimatedPath = Animated.createAnimatedComponent(Path);
export const CustomBottomTab= ({
  state,
  navigation,
}) => {
  const isCreateTransactionScreen =
  state.routes[state.index].name === 'CreateTransaction';

if (isCreateTransactionScreen) {
  return null; 
}
  const {containerPath, curvedPaths} = usePath();
  const progress = useSharedValue(1);
  progress.value = 2.5;
  
  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({length: curvedPaths.length}, (_, index) => index + 1),
      curvedPaths,
    );
    return {
      d: `${containerPath} ${currentPath}`,
    };
  });

  const handleTabPress = async(tab) => {
    navigation.navigate(tab);
  };

  return (
    <View style={[styles.tabBarContainer, styles.shadowMd]}>
      <Svg width={ScreenWidth} height={55} style={styles.shadowMd}>
        <AnimatedPath fill={'white'} animatedProps={animatedProps} />
      </Svg>
      <View
        style={[
          styles.tabItemsContainer,
          {
            height: 55,
          },
          styles.shadowMd,
        ]}>
        {state.routes.map((route, index) => {
          const label = route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() => handleTabPress(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};
export default CustomBottomTab;
const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  tabItemsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '99%',
    justifyContent: 'space-around',
  },
  shadowMd: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});