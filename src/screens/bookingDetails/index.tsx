import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BookingDetails() {
  return (
    <View style={styles.container}>
      <Text>BookingDetails</Text>
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
