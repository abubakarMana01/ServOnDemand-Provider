import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Divider, GoBackButton} from '../../components';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '@/constants';

export default function BookingDetails() {
  const route = useRoute();

  const {service, worker, status} = route.params as {
    service: IService;
    worker: IHandyMan;
    status: 'completed' | 'cancelled' | 'upcoming';
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
            <View style={styles.detailsTop}>
              <View style={{flex: 1}}>
                <Text style={styles.title} numberOfLines={2}>
                  {service.title}
                </Text>
                <Text style={styles.handymanName}>
                  {worker.firstName} {worker.lastName}
                </Text>
              </View>

              <View>
                <Text style={styles.price}>
                  ₦{worker.chargePerHour}
                  <Text style={styles.perHour}>/hr</Text>
                </Text>
              </View>
            </View>

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
  detailsTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 16,
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
    fontSize: 16,
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
});
