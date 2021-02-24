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

export const Routes: Array<Route> = [
  {
    start: 'Jackson Heights',
    end: 'Greenpoint',
    distance: 123,
    time: '42 min',
    price: '78.12',
    energy: '12.4 kWh',
  },
  {
    start: 'Wrocalaw Main',
    end: 'Barcelona Sants',
    distance: 987,
    time: '13 h',
    price: '56.86',
    energy: '38.9 kWh',
  },
];

export const Passengers: Array<Passenger> = [
  {
    name: 'Chandler Bing',
    photo: 'assets/chandler.jpg',
    interactions: 4,
    email: 'duckandchick@gmail.com',
    phone: '123 456 789',
    location: 'New York, NY',
    route: Routes[1],
  },
  {
    name: 'Monica Geller',
    photo: 'assets/monica.jpg',
    interactions: 25,
    email: 'monana@gmail.com',
    phone: '456 789 123',
    location: 'New York, NY',
    route: Routes[0],
  },
  {
    name: 'Joey Tribbiani',
    photo: 'assets/joey.jpg',
    interactions: 13,
    email: 'ilovepizza@gmail.com',
    phone: '987 654 321',
    location: 'New York, NY',
    route: Routes[1],
  },
];
