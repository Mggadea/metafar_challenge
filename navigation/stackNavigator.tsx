import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StockDetailsScreen from '../screens/StockDetailsScreen'

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
