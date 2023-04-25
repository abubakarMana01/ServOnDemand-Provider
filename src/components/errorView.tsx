import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/constants';

interface IErrorView {
  error?: string;
}

export default function ErrorView({error}: IErrorView) {
  const styles = styleSheet({});

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error || 'Something went wrong!'}</Text>
    </View>
  );
}

const styleSheet = ({}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: COLORS.black,
    },
  });
