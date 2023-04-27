import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import BookingCard from '@/components/bookingCard';
import {useQuery} from '@tanstack/react-query';
import {getAllBookings} from '@/utils/apiRequests';
import {useAppContext} from '@/contexts/appProvider';
import LoaderView from '@/components/loaderView';

export default function Bookings() {
  const {token} = useAppContext();

  const {data: bookings, status} = useQuery({
    queryKey: ['allBookings'],
    queryFn: () => getAllBookings(token!),
  });

  if (status === 'loading') {
    return <LoaderView />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        renderItem={({item}) => <BookingCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    padding: 16,
  },
});
