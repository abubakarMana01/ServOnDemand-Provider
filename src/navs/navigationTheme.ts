import {COLORS} from '@/constants';
import {DefaultTheme, Theme} from '@react-navigation/native';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default navigationTheme;
