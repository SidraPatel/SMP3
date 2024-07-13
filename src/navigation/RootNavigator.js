import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme, Linking, Alert} from 'react-native';
import TabNavigator from './BottomNavigation';
const Stack = createNativeStackNavigator();
function Root() {
  return (
    //  <View style={{flex:1 }}>
    <NavigationContainer>
      <StatusBar
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="bottomTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    //  </View>
  );
}

export default Root;
