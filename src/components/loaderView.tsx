import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/constants';

export default function LoaderView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.darkBlue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
