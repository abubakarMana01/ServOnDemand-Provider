import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {COLORS} from '@/constants';

interface ISectionHeader {
  title: string;
  navigationRoute?: string;
}

export default function SectionHeader({
  title,
  navigationRoute,
}: ISectionHeader) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sectionTitleContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {navigationRoute && (
        <TouchableOpacity onPress={() => navigation.navigate(navigationRoute)}>
          <Text style={styles.sectionRightActionText}>See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  sectionRightActionText: {
    color: COLORS.darkBlue,
  },
});
