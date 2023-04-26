import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppStackNav, navigationTheme} from '@/navs';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppProvider from '@/contexts/appProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <NavigationContainer theme={navigationTheme}>
          <QueryClientProvider client={queryClient}>
            <AppStackNav />
          </QueryClientProvider>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
