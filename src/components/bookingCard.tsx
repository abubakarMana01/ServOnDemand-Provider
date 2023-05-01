import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@/constants';
import {ROUTES} from '@/navs';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IBookingCard {
  data: IBooking;
}

export default function BookingCard({data}: IBookingCard) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ROUTES.BOOKING_DETAILS, {
          service: data.service,
          worker: data.worker,
          status: data.status,
          user: data.userId,
        })
      }>
      <View style={styles.infoContainer}>
        <Image source={{uri: data.service.picture}} style={styles.image} />

        <View style={{flex: 1}}>
          <Text numberOfLines={2} style={styles.title}>
            {data.service.title}
          </Text>
          <Text style={styles.date}>
            {new Date(data.createdAt).toLocaleDateString()}
          </Text>

          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  data.status === 'completed'
                    ? styles.completedStatus.backgroundColor
                    : data.status === 'cancelled'
                    ? styles.cancelledStatus.backgroundColor
                    : styles.upcomingStatus.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    data.status === 'completed'
                      ? styles.completedStatus.color
                      : data.status === 'cancelled'
                      ? styles.cancelledStatus.color
                      : styles.upcomingStatus.color,
                },
              ]}>
              {data.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.1,
    elevation: 2,
    shadowColor: Platform.select({android: COLORS.darkGrey}),
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: COLORS.lightGrey,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  date: {
    marginTop: 3,
    marginBottom: 10,
    color: COLORS.black,
    opacity: 0.7,
    fontSize: 12,
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
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
