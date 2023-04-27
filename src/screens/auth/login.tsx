import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';

import {AppTextInput, AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '@/constants';
import {attemptLogin, loginValidationSchema} from './helpers';
import {ROUTES} from '@/navs';
import {useAppContext} from '@/contexts/appProvider';
import {useAuthToken} from '@/hooks';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {storeToken} = useAuthToken();
  const {setUser, setToken} = useAppContext();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              attemptLogin({
                values,
                setIsLoading,
                setUser,
                setToken,
                storeToken,
              });
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* <View style={{flex: 1}} /> */}

                <View style={styles.header}>
                  <Text style={styles.title}>Welcome Back! 👋</Text>
                  <Text style={styles.subtitle}>
                    You've been missed. Please login!
                  </Text>
                </View>

                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Email address"
                      placeholder="Email Address"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={values.email}
                      onBlur={handleBlur('email')}
                      onChangeText={handleChange('email')}
                      error={errors.email}
                      touched={touched.email}
                      autoFocus
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Password"
                      placeholder="Enter your password"
                      secureTextEntry
                      autoCapitalize="none"
                      value={values.password}
                      onBlur={handleBlur('password')}
                      onChangeText={handleChange('password')}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </View>

                  <View style={styles.forgotPasswordContainer}>
                    <Pressable
                      style={styles.forgotPasswordCheckBox}
                      onPress={() => setIsRememberMeChecked(prev => !prev)}>
                      <Ionicons
                        name={
                          isRememberMeChecked ? 'checkbox' : 'checkbox-outline'
                        }
                        size={24}
                        color={COLORS.darkBlue}
                      />
                      <Text style={styles.remeberMeText}>Remember me</Text>
                    </Pressable>
                    <TouchableOpacity>
                      <Text style={styles.forgotPasswordText}>
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.spacer} />

                <View style={styles.bottom}>
                  <AppButton
                    title="Log in"
                    isLoading={isLoading}
                    onPress={handleSubmit}
                  />
                  <Pressable
                    style={styles.bottomTextContainer}
                    onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
                    <Text style={styles.bottomText}>
                      Don't have an account?{' '}
                      <Text style={styles.bottomTextLink}>Create one</Text>
                    </Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
  },
  header: {
    marginTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: COLORS.black,
  },
  subtitle: {
    fontWeight: Platform.OS === 'ios' ? '500' : '600',
    opacity: 0.5,
    color: COLORS.black,
  },
  form: {
    marginTop: 50,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remeberMeText: {
    marginLeft: 4,
    color: COLORS.dark,
  },
  forgotPasswordText: {
    color: COLORS.darkBlue,
    fontSize: 12,
    fontWeight: '500',
  },
  spacer: {
    flex: 1,
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  bottomTextContainer: {
    alignSelf: 'center',
  },
  bottomText: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.dark,
  },
  bottomTextLink: {
    fontWeight: '600',
    color: COLORS.darkBlue,
  },
});
