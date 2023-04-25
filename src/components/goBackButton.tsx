import {COLORS} from '@/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

interface IGoBackButton {
  handlePress?: () => void;
}

export default function GoBackButton({handlePress}: IGoBackButton) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.button} onPress={handlePress || navigation.goBack}>
      {/* <Ionicons name="arrow-back" color={COLORS.black} size={24} /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 37,
    height: 37,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
});
