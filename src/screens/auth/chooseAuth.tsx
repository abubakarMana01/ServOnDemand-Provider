import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {COLORS} from '@/constants';
import {ROUTES} from '@/navs';

export default function ChooseAuth() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.wrapper}>
      <View style={styles.container}>
        <AppButton
          title="Sign Up"
          onPress={() => navigation.replace(ROUTES.SIGNUP)}
        />
        <AppButton
          title="Log In"
          onPress={() => navigation.replace(ROUTES.LOGIN)}
          customStyles={styles.loginButton}
          customTextStyles={{}}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
  },
});
