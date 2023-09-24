import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { Animated, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import MainSplashOne from './pages/mainSplashOne';
import Otp from './pages/Otp';
import SignIn from './pages/SignIn';
import SplashOne from './pages/splashOne';
import Subs from './pages/sub';
import { Screens } from './routes/routeStacks';

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
        {/* <Stack.Screen
          name={'main'}
          component={SplashOne}
        /> */}
        {/* <Stack.Screen
          name={'slides'}
          component={MainSplashOne}
        /> */}

        <Stack.Screen
          name={'signin'}
          component={SignIn}
        />
        <Stack.Screen
          name={'signup'}
          component={HomeScreen}
        />
        <Stack.Screen
          name={'otp'}
          component={Otp}
        />
        <Stack.Screen
          name={'home'}
          component={HomeScreen}
        />
        <Stack.Screen
          name={'subscription'}
          component={Subs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
