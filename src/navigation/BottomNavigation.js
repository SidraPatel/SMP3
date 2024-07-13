
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '@/components/BottomTabs/CustomBottomTab';
import { FilterScreen,Home,SettingScreen } from '@/screens';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {borderWidth: 0, borderTopWidth: 0},
        tabBarStyle: {borderTopWidth: 0},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
