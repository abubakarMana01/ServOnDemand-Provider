import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppStackNav, navigationTheme} from '@/navs';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <AppStackNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
