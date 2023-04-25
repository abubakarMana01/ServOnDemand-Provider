import {SectionHeader} from '@/components';
import BookingCard from '@/components/bookingCard';
import {ROUTES} from '@/navs';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
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
});
