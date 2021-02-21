export interface Route {
  start: string;
  end: string;
  distance: number;
  time: string;
  price: string;
  energy: string;
}

export interface Passenger {
  name: string;
  photo: string;
  interactions: number;
  email: string;
  phone: string;
  location: string;
  route: Route;
}

export const Passengers: Array<Passenger> = [
  {
    name: 'Chandler',
    photo: 'assets/chandler.jpg',
    interactions: 4,
    email: 'duckandchick@gmail.com',
    phone: '123 456 789',
    location: 'New York, NY',
    route: {
      start: 'A',
      end: 'B',
      distance: 123,
      time: '12h',
      price: '100 euro',
      energy: '12.4 kWh',
    },
  },
  {
    name: 'Monica',
    photo: 'assets/monica.jpg',
    interactions: 4,
    email: 'monana@gmail.com',
    phone: '123 456 789',
    location: 'New York, NY',
    route: {
      start: 'A',
      end: 'B',
      distance: 123,
      time: '12h',
      price: '100 euro',
      energy: '12.4 kWh',
    },
  },
  {
    name: 'Joey',
    photo: 'assets/joey.jpg',
    interactions: 4,
    email: 'ilovepizza@gmail.com',
    phone: '123 456 789',
    location: 'New York, NY',
    route: {
      start: 'A',
      end: 'B',
      distance: 123,
      time: '12h',
      price: '100 euro',
      energy: '12.4 kWh',
    },
  },
];
