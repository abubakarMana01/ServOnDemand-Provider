import React from 'react';
import {BookingDetails} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from './routes';
import BottomTabsNavigation from './bottomTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.BOTTOM_TABS}
        component={BottomTabsNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.BOOKING_DETAILS} component={BookingDetails} />
    </Stack.Navigator>
  );
}

export default App;
