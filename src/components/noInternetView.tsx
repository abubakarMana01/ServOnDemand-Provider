import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './appButton';
import {refresh} from '@react-native-community/netinfo';
import {COLORS} from '@/constants';

export default function NoInternetView() {
  const styles = styleSheet({});

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.subtitle}>Sorry, something went wrong.</Text>
        <Text style={styles.subtitle}>Please try again later.</Text>

        <AppButton
          title="Try again"
          onPress={async () => {
            await refresh();
          }}
          customStyles={styles.buttonStyles}
        />
      </View>
    </View>
  );
}

const styleSheet = ({}) =>
  StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: COLORS.lightGrey,
    },
    container: {
      alignItems: 'center',
      borderRadius: 16,
      paddingVertical: 32,
      paddingHorizontal: 24,
      width: '100%',
      maxWidth: 300,
      backgroundColor: COLORS.white,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 16,
      color: COLORS.black,
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: 4,
      color: COLORS.black,
    },
    buttonStyles: {
      marginTop: 16,
    },
  });
