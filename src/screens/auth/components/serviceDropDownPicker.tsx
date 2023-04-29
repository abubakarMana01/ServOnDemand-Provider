import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '@/constants';

export default function ServiceDropDownPicker({
  error,
  label,
  services,
  selectedServiceId,
  setSelectedServiceId,
}: {
  error: string;
  label: string;
  services: IService[];
  selectedServiceId: string | null;
  setSelectedServiceId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<{label: string; value: string}[]>([]);

  useEffect(() => {
    setItems(
      services.map(service => ({label: service.title, value: service._id})),
    );
  }, [services]);

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
        value={selectedServiceId}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedServiceId}
        setItems={setItems}
        placeholder="Select the service you offer"
        style={styles.dropdownPicker}
        dropDownContainerStyle={styles.dropdownPicker}
        placeholderStyle={styles.dropdownPickerPlaceholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownPicker: {
    borderColor: '#b2beb590',
    borderWidth: 1.5,
  },
  dropdownPickerPlaceholder: {
    color: '#b2beb5ce',
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
