import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '@/constants';

interface IAuthButton {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  customStyles?: StyleProp<ViewStyle>;
  customTextStyles?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}

export default function AppButton({
  title,
  onPress,
  isLoading = false,
  customStyles = {},
  customTextStyles = {},
  icon,
}: IAuthButton) {
  const styles = styleSheet({});

  return (
    <Pressable onPress={onPress} style={[styles.button, customStyles]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.white} />
      ) : (
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[styles.text, customTextStyles]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styleSheet = ({}) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 54,
      backgroundColor: COLORS.darkBlue,
      borderRadius: 12,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      marginRight: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: COLORS.white,
    },
  });
