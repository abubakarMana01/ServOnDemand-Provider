import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import BookingCard from '@/components/bookingCard';

const BOOKINGS: IBooking[] = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
];

export default function Bookings() {
  return (
    <View style={styles.container}>
      <FlatList
        data={BOOKINGS}
        contentContainerStyle={{
          padding: 16,
        }}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        renderItem={() => (
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
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
