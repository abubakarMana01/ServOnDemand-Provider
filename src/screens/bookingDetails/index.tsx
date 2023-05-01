import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Linking,
} from 'react-native';
import React from 'react';
import {AppButton, Divider, GoBackButton} from '../../components';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '@/constants';

export default function BookingDetails() {
  const route = useRoute();

  const {service, worker, status, user} = route.params as {
    service: IService;
    worker: IHandyMan;
    user: IUser;
    status: 'completed' | 'cancelled' | 'upcoming';
  };

  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${' + user.phoneNumber + '}';
    } else {
      number = 'tel:${' + user.phoneNumber + '}';
    }
    Linking.openURL(number);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: service.picture,
          }}>
          <SafeAreaView style={{marginLeft: 16, marginTop: 16}}>
            <GoBackButton />
          </SafeAreaView>
        </ImageBackground>

        <View style={styles.main}>
          <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, paddingTop: 16}}>
              <Text style={styles.title} numberOfLines={2}>
                {service.title}
              </Text>
              <Text style={styles.handymanName}>
                {worker.firstName} {worker.lastName}
              </Text>
            </View>

            <View style={styles.statusAndPriceContainer}>
              <View
                style={[
                  styles.statusContainer,
                  {
                    backgroundColor:
                      status === 'completed'
                        ? styles.completedStatus.backgroundColor
                        : status === 'cancelled'
                        ? styles.cancelledStatus.backgroundColor
                        : styles.upcomingStatus.backgroundColor,
                  },
                ]}>
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        status === 'completed'
                          ? styles.completedStatus.color
                          : status === 'cancelled'
                          ? styles.cancelledStatus.color
                          : styles.upcomingStatus.color,
                    },
                  ]}>
                  {status}
                </Text>
              </View>

              <View>
                <Text style={styles.price}>
                  ₦{worker.chargePerHour}
                  <Text style={styles.perHour}>/hr</Text>
                </Text>
              </View>
            </View>

            <View style={styles.separator}>
              <Divider color={COLORS.grey + '70'} />
            </View>

            <View>
              <Text style={styles.descriptionTitle}>About Service</Text>
              <Text style={styles.descriptionText}>
                {worker.serviceOffered.description}
              </Text>
            </View>
          </ScrollView>

          <SafeAreaView>
            <Divider color={COLORS.grey + '70'} />
            <View style={styles.actionButtonsContainer}>
              <View style={styles.actionButton}>
                <AppButton
                  title="Reject"
                  onPress={() => {}}
                  customStyles={styles.messageButton}
                  customTextStyles={styles.messageButtonText}
                />
              </View>
              <View style={styles.actionButton}>
                <AppButton title="Contact" onPress={() => openDialScreen()} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: Dimensions.get('window').height < 700 ? 0.5 : 0.6,
    backgroundColor: COLORS.lightGrey,
  },
  main: {
    flex: Dimensions.get('window').height < 700 ? 0.5 : 0.4,
    padding: 16,
    paddingTop: 0,
  },
  statusAndPriceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  separator: {
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.black,
  },
  handymanName: {
    marginTop: 2,
    color: COLORS.darkGrey,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.darkBlue,
  },
  perHour: {
    fontSize: 14,
    color: COLORS.darkGrey,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  descriptionText: {
    color: COLORS.darkGrey,
    marginTop: 8,
    paddingBottom: 12,
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusText: {
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: 12,
  },
  upcomingStatus: {
    backgroundColor: '#1343ED30',
    color: '#1343ED',
  },
  completedStatus: {
    backgroundColor: '#00A66030',
    color: '#028a52',
  },
  cancelledStatus: {
    backgroundColor: '#ED131320',
    color: '#ED1313',
  },

  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom:
      Platform.OS === 'android'
        ? 12
        : Dimensions.get('window').height < 700
        ? 12
        : 0,
  },
  actionButton: {
    flex: 0.47,
  },
  messageButton: {
    backgroundColor: '#ED131320',
  },
  messageButtonText: {
    color: '#ED1313',
  },
});
