import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppStackNav} from '@/navs';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppStackNav />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
