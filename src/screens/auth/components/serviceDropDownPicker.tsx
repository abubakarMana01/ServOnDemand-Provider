import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '@/constants';

export default function ServiceDropDownPicker({
  error,
  label,
}: {
  error: string;
  label: string;
}) {
  // Picker stuffs
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Plumber', value: 'Plumber'},
    {label: 'Car Mechanic', value: 'Car Mechanic'},
    {label: 'Electrician', value: 'Electrician'},
    {label: 'AC Repair & Service', value: 'AC Repair & Service'},
  ]);

  return (
    <View>
      {label ? (
        <View style={styles.labelAndErrorContainer}>
          <Text style={styles.label}>{label}</Text>
          {error ? (
            <View>
              <Text style={styles.error}>{error}</Text>
            </View>
          ) : null}
        </View>
      ) : null}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select the service you offer"
        style={styles.dropdownPicker}
        dropDownContainerStyle={styles.dropdownPicker}
        placeholderStyle={{color: '#b2beb5ce'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownPicker: {
    borderColor: '#b2beb590',
    borderWidth: 1.5,
  },
  labelAndErrorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});
