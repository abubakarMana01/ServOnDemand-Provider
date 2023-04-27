import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '@/components';
import Divider from '@/components/divider';
import {useAppContext} from '@/contexts/appProvider';
import {useAuthToken} from '@/hooks';

export default function Profile() {
  const {setToken, setUser, user} = useAppContext();
  const {removeToken} = useAuthToken();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    removeToken();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.userInfo}>
          {/* <Image
            source={require('@/assets/neymar.jpeg')}
            style={styles.userImg}
          /> */}
          <View style={styles.userImg}>
            <Ionicons name="person" size={80} color={COLORS.grey} />
          </View>
          <Text style={styles.userName}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>

        <ScrollView bounces={false} contentContainerStyle={styles.scrollView}>
          <Pressable style={styles.options}>
            <Ionicons name="person-outline" size={24} color={COLORS.black} />
            <Text style={styles.optionText}>Edit Profile</Text>
          </Pressable>
          <Divider color={COLORS.grey + '70'} />
          <Pressable style={styles.options}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
            <Text style={styles.optionText}>Notifications</Text>
          </Pressable>
          <Divider color={COLORS.grey + '70'} />
          <Pressable style={styles.options}>
            <Ionicons name="settings-outline" size={24} color={COLORS.black} />
            <Text style={styles.optionText}>Settings</Text>
          </Pressable>
        </ScrollView>

        <AppButton
          title="Logout"
          onPress={handleLogout}
          icon={
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={COLORS.white}
            />
          }
          customStyles={styles.logoutButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    marginTop: 16,
  },

  userInfo: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  userImg: {
    width: Dimensions.get('window').height < 700 ? 100 : 130,
    height: Dimensions.get('window').height < 700 ? 100 : 130,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.lightGrey + '80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
    color: COLORS.black,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  userEmail: {
    marginTop: 2,
    color: COLORS.black,
    textAlign: 'center',
  },

  options: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: COLORS.black,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  logoutButton: {
    marginBottom: Dimensions.get('window').height < 700 ? 0 : 8,
  },
});
