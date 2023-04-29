import React, {useRef} from 'react';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type GooglePlacesInputProps = {
  placeholder: string;
  setLocationDetails: React.Dispatch<React.SetStateAction<null | ILocation>>;
  autoFocus?: boolean;
  label?: string;
  error?: string;
};

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = ({
  placeholder,
  setLocationDetails,
  label,
  error,
}) => {
  const mapRef = useRef<GooglePlacesAutocompleteRef>(null);

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
      <GooglePlacesAutocomplete
        ref={mapRef}
        placeholder={placeholder}
        nearbyPlacesAPI="GooglePlacesSearch"
        listViewDisplayed="auto"
        enablePoweredByContainer={false}
        fetchDetails={true}
        minLength={2}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components: 'country:ng',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setLocationDetails({
            coordinates: {
              latitude: details?.geometry.location.lat!,
              longitude: details?.geometry.location.lng!,
            },
            address: data.description,
          });
        }}
        styles={{
          textInput: styles.textInput,
          separator: styles.separator,
          row: styles.row,
          listView: {
            top: 10,
            paddingHorizontal: 12,
          },
          container: {},
          loader: styles.loader,
        }}
        renderRightButton={() => (
          <>
            {Platform.OS === 'android' ? (
              <View style={styles.customRightClearButton}>
                <TouchableOpacity
                  onPress={() => mapRef.current?.setAddressText('')}>
                  <MaterialIcons name="cancel" size={20} color={COLORS.grey} />
                </TouchableOpacity>
              </View>
            ) : null}
          </>
        )}
      />
    </View>
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
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
  textInput: {
    color: COLORS.black,
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#b2beb590',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 47.5,
  },
  separator: {
    height: 0,
  },
  row: {
    padding: 0,
  },
  loader: {
    alignSelf: 'center',
    height: 25,
  },
  customRightClearButton: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -12.5}],
  },
});
