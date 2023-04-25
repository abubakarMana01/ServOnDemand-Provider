import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/constants';

interface IDivider {
  color?: string;
}

export default function Divider({color}: IDivider) {
  const styles = styleSheet({color});

  return <View style={styles.divider} />;
}

const styleSheet = ({color}: {color: string | undefined}) =>
  StyleSheet.create({
    divider: {
      height: 1,
      backgroundColor: color || COLORS.grey,
      opacity: 1,
    },
  });
