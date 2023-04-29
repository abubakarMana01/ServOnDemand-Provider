import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {
  AppTextInput,
  AppButton,
  GooglePlacesAutocompleteInput,
} from '@/components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable} from 'react-native';
import {signupValidationSchema} from './helpers';
import {ROUTES} from '@/navs';
import {COLORS} from '@/constants';
import {getAllServices, signup} from '@/utils/apiRequests';
import ServiceDropDownPicker from './components/serviceDropDownPicker';
import LoaderView from '@/components/loaderView';
import {useQuery} from '@tanstack/react-query';

export default function Signup() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [addressError, setAddressError] = useState('');
  const [serviceIdError, setServiceIdError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const [locationDetails, setLocationDetails] = useState<ILocation | null>(
    null,
  );

  useEffect(() => {
    if (locationDetails) {
      setAddressError('');
    }
  }, [locationDetails]);

  const handleSignup = async (values: any) => {
    if (!locationDetails?.address || !locationDetails.coordinates) {
      setAddressError('Address is required');
      return Alert.alert('Something went wrong', 'Please enter address again');
    }

    if (!selectedServiceId) {
      setServiceIdError('Service is required');
      return Alert.alert('Something went wrong', 'Please select service');
    }

    setIsLoading(true);
    try {
      await signup({
        ...values,
        location: locationDetails,
        serviceOffered: {description: '', serviceId: selectedServiceId},
      });
      Alert.alert('Success', 'You have successfully signed up', [
        {
          text: 'OK',
          onPress: () => navigation.navigate(ROUTES.LOGIN),
        },
      ]);
    } catch (ex: any) {
      console.log(ex.response?.data?.error || ex.message);
      Alert.alert(ex?.response?.data?.error?.message || ex.message);
    } finally {
      setIsLoading(false);
    }
  };

  const {data: services, status} = useQuery({
    queryKey: ['allServices'],
    queryFn: getAllServices,
  });

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>
            Please fill in the form to register
          </Text>
        </View>

        {status === 'loading' && (
          <View style={{height: Dimensions.get('window').height - 170}}>
            <LoaderView />
          </View>
        )}

        {status === 'success' && (
          <Formik
            validationSchema={signupValidationSchema}
            initialValues={{
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              chargePerHour: '',
              // serviceOffered: 0,
            }}
            onSubmit={handleSignup}>
            {({
              errors,
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              touched,
            }) => (
              <>
                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="First name"
                      placeholder="Enter your first name"
                      keyboardType="default"
                      autoCapitalize="words"
                      value={values.firstName}
                      onBlur={handleBlur('firstName')}
                      onChangeText={handleChange('firstName')}
                      error={errors.firstName}
                      touched={touched.firstName}
                      autoFocus
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Last name"
                      placeholder="Enter your last name"
                      keyboardType="default"
                      autoCapitalize="words"
                      value={values.lastName}
                      onBlur={handleBlur('lastName')}
                      onChangeText={handleChange('lastName')}
                      error={errors.lastName}
                      touched={touched.lastName}
                    />
                  </View>

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

                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Charge/hr"
                      placeholder="How much would you charge per hour?"
                      keyboardType="number-pad"
                      value={values.chargePerHour}
                      onBlur={handleBlur('chargePerHour')}
                      onChangeText={handleChange('chargePerHour')}
                      error={errors.chargePerHour}
                      touched={touched.chargePerHour}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <GooglePlacesAutocompleteInput
                      placeholder="Enter your address"
                      setLocationDetails={setLocationDetails}
                      label="Address"
                      error={addressError}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <ServiceDropDownPicker
                      {...{
                        services,
                        label: 'Service',
                        error: serviceIdError,
                        selectedServiceId: selectedServiceId,
                        setSelectedServiceId: setSelectedServiceId,
                      }}
                    />
                  </View>
                </View>

                <View style={styles.bottom}>
                  <AppButton
                    title="Sign up"
                    onPress={handleSubmit}
                    isLoading={isLoading}
                  />
                  <Pressable
                    style={styles.bottomTextContainer}
                    onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                    <Text style={styles.bottomText}>
                      Already have an account?{' '}
                      <Text style={styles.bottomTextLink}>Log in</Text>
                    </Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    paddingHorizontal: 16,
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
    fontWeight: Platform.select({ios: '500', android: '600'}),
    color: COLORS.black,
    opacity: 0.5,
    marginTop: 3,
  },
  animationContainer: {
    alignItems: 'center',
  },
  animation: {
    width: 180,
    height: 180,
  },
  form: {
    marginTop: 32,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
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
