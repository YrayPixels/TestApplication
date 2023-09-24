import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { Animated, StyleSheet, Text, View } from 'react-native';
import Cart from './Views/Cart';
import Item from './Views/Item';
import Menu from './Views/Menu';

const Stack = createNativeStackNavigator();
export default function App() {
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };


  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          headerStyleInterpolator: forFade
        }}>
        <Stack.Screen
          name={'menu'}
          component={Menu}
        />
        <Stack.Screen
          name={'item'}
          component={Item}
        />
        <Stack.Screen
          name={'cart'}
          component={Cart}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

