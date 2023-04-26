import {SectionHeader} from '@/components';
import BookingCard from '@/components/bookingCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES} from '@/navs';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '@/constants';
import {Calendar} from 'react-native-calendars';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome John</Text>
          <Text style={styles.workerJob}>Plumber</Text>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color={COLORS.dark}
          />
          <View style={styles.bellNewNotification} />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            arrowColor: COLORS.darkBlue,
            dotColor: 'red',
            indicatorColor: COLORS.darkBlue,
            todayTextColor: COLORS.darkBlue,
            textMonthFontWeight: '600',
            textDayFontSize: 14,
          }}
          markedDates={{
            '2023-04-28': {selected: true, selectedColor: COLORS.darkBlue},
            '2023-04-30': {selected: true, selectedColor: COLORS.darkBlue},
            '2023-04-26': {marked: true},
          }}
        />
      </View>

      <SectionHeader
        title="Recent requests"
        navigationRoute={ROUTES.BOOKINGS}
      />

      <BookingCard
        data={{
          _id: '1',
          service: {
            _id: '',
            title: "Men's Haircut",
            picture:
              'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
            createdAt: JSON.stringify(Date.now()),
          },
          status: 'upcoming',
          createdAt: Date.now(),
        }}
      />

      <View style={{height: 16}} />

      <BookingCard
        data={{
          _id: '1',
          service: {
            _id: '',
            title: "Men's Haircut",
            picture:
              'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
            createdAt: JSON.stringify(Date.now()),
          },
          status: 'upcoming',
          createdAt: Date.now(),
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },

  workerJob: {
    color: COLORS.darkBlue,
    fontSize: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.dark,
  },
  bellNewNotification: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#cb2626',
    right: 0,
    top: 0,
  },

  calendarContainer: {
    flex: 1,
    marginBottom: 24,
    marginTop: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  calendar: {
    borderRadius: 24,
    overflow: 'hidden',
  },
});
