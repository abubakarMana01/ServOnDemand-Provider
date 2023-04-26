import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppStackNav, navigationTheme} from '@/navs';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <QueryClientProvider client={queryClient}>
          <AppStackNav />
        </QueryClientProvider>
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
