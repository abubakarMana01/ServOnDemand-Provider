interface IUser {
  _id: string;
  chargePerHour: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: {
    _id: string;
    address: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  ratings: {
    _id: string;
    count: number;
    overallRatings: number;
  };
  serviceOffered: {
    _id: string;
    description: string;
    service: IService;
  };
}

interface IService {
  _id: string;
  title: string;
  picture: string;
  createdAt: string;
}

interface IBooking {
  _id: string;
  service: IService;
  worker: IHandyMan;
  status: 'upcoming' | 'cancelled' | 'completed';
  userId: IUser;
  createdAt: string;
}

interface IWorker {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  serviceOffered: {
    description: string;
    service: string;
    _id: string;
  };
  ratings: {
    count: number;
    overallRatings: number;
    _id: string;
  };
  chargePerHour: number;
  location: {
    coordinates: {
      longitude: string;
      latitude: string;
    };
    address: string;
    _id: string;
  };
  password: string;
  createdAt: string;
}

interface IReview {
  _id: string;
  customer: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: true;
    createdAt: string;
    updatedAt: string;
  };
  worker: IWorker;
  comment: string;
  rating: 4.3;
  createdAt: string;
}

interface IHandyMan {
  _id: string;
  chargePerHour: number;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  location: {
    _id: string;
    address: string;
    coordinates: {latitude: string; longitude: string};
  };
  ratings: {
    count: number;
    overallRatings: number;
  };
  password: string;
  serviceOffered: {
    _id: string;
    description: string;
    service: IService;
  };
}

interface ILocation {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
}
