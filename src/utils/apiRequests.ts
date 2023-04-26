import {axiosInstance} from '@/libs';

type TLoginPayload = {
  email: string;
  password: string;
};

export const login = async (payload: TLoginPayload) => {
  const {data} = await axiosInstance.post('/auth/login', payload);
  return data;
};

type TSignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  chargePerHour: number;
  serviceOffered: string;
  location: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
    address: string;
  };
};
export const signup = async (payload: TSignupPayload) => {
  const {data} = await axiosInstance.post('/workers/add', payload);
  return data;
};

export const getAllBookings = async (token: string): Promise<IBooking[]> => {
  const {data} = await axiosInstance.get('/bookings/vendor/all', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data.data;
};

export const getUpcomingBookings = async (
  token: string,
): Promise<IBooking[]> => {
  const {data} = await axiosInstance.get('/bookings/vendor/upcoming', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data.data;
};
