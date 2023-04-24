import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {Home} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '@/constants';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};
